import Axios from "axios";
import Debug from 'debug';
import * as Types from './types';

const debug = Debug('discogs-client')

type Response<T> = Promise<T>

type PaginationOpts = {
  page?: number,
  per_page?: number
}

type Options = {
  auth?: { token: string } | { key: string, secret: string }
}

type GetArtistReleasesOpts = {
  sort?: "year" | "title" | "format"
} & PaginationOpts

type GetMasterVersionsOpts = {
  format?: string,
  label?: string,
  country?: string,
  sort?: "released" | "title" | "format" | "label" | "catno" | "country",
  sort_order?: "asc" | "desc"
} & PaginationOpts

function makeQueryString(q: { [key: string]: number | string }): string {
  return Object.keys(q)
    .filter(k => q[k] !== undefined)
    .map(k => `${k.toString()}=${encodeURIComponent(q[k].toString())}`)
    .join("&");
}

export class DiscogsError extends Error {
  constructor(message?: string, public readonly code?: number) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = DiscogsError.name;
  }
}

export class Client {

  constructor(public readonly options: Options = {}) { }

  search = (q: Types.SearchQuery): Response<Types.SearchResponse> =>
    this._query("/database/search", q);

  getArtist = (artistId: number): Response<Types.Artist> =>
    this._query(`/artists/${artistId}`)

  getArtistReleases = (artistId: number, opts?: GetArtistReleasesOpts): Response<Types.ArtistReleasesResponse> =>
    this._query(`/artists/${artistId}/releases`, opts)

  getMaster = (masterId: number): Response<Types.Master> =>
    this._query(`/masters/${masterId}`)

  getMasterVersions = (masterId: number, opts?: GetMasterVersionsOpts): Response<Types.MasterVersionsResponse> =>
    this._query(`/masters/${masterId}/versions`, opts)

  getRelease = (releaseId: number): Response<Types.Release> =>
    this._query(`/releases/${releaseId}`)

  getLabel = (labelId: number): Response<Types.Label> =>
    this._query(`/labels/${labelId}`)

  getLabelReleases = (labelId: number, opts?: PaginationOpts): Response<Types.LabelReleasesResponse> =>
    this._query(`/labels/${labelId}/releases`, opts)

  getReleaseRatingByUser = (releaseId: number, username: string): Response<Types.ReleaseRatingByUser> =>
    this._query(`/releases/${releaseId}/rating/${username}`)

  getCommunityReleaseRating = (releaseId: number): Response<Types.CommunityReleaseRating> =>
    this._query(`/releases/${releaseId}/rating`)

  private _authorizationQueryString = this.options.auth ? makeQueryString(this.options.auth) : ''

  private _query = <T>(uri: string, q?: object): Response<T> => {
    const url = this._buildUrl(uri, q)
    debug(url)
    return this._makeGetHttpRequest(url)
  }

  private _buildUrl = <T extends {}>(path: string, query?: T) =>
    'https://api.discogs.com' + path + '?' + this._authorizationQueryString + (query !== undefined ? '&' + makeQueryString(query) : '')

  private _makeGetHttpRequest = <T>(url: string) =>
    Axios.get<T>(url).then(resp => {

      const
        ratelimit = Number.parseInt(resp.headers['x-discogs-ratelimit']),
        ratelimitRemaining = Number.parseInt(resp.headers['x-discogs-ratelimit-remaining']),
        ratelimitUsed = Number.parseInt(resp.headers['x-discogs-ratelimit-used'])

      debug({ ratelimit, ratelimitRemaining, ratelimitUsed })

      return resp.data
    }).catch(reason => {
      if (reason.response)
        throw new DiscogsError(reason.response.data.message, reason.response.status)
      else
        throw new DiscogsError(String(reason))
    })
}
