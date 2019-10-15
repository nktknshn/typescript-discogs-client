import Axios from "axios";
import Debug from "debug";
import {
  SearchQuery,
  GetArtistReleasesOpts,
  GetMasterVersionsOpts,
  PaginationOpts
} from "./types/query";
import {
  SearchResponse,
  GetArtistResponse,
  GetArtistReleasesResponse,
  GetMasterResponse,
  GetMasterVersionsResponse,
  GetReleaseResponse,
  GetLabelResponse,
  GetLabelReleasesResponse,
  GetReleaseRatingByUserResponse,
  GetCommunityReleaseRatingResponse
} from "./types/response";

const debug = Debug("discogs-client");

type Response<T> = Promise<T>;

type Options = {
  auth?: { token: string } | { key: string; secret: string };
};

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
  constructor(public readonly options: Options = {}) {}

  search = (q: SearchQuery): Response<SearchResponse> =>
    this._query("/database/search", q);

  getArtist = (artistId: number): Response<GetArtistResponse> =>
    this._query(`/artists/${artistId}`);

  getArtistReleases = (
    artistId: number,
    opts?: GetArtistReleasesOpts
  ): Response<GetArtistReleasesResponse> =>
    this._query(`/artists/${artistId}/releases`, opts);

  getMaster = (masterId: number): Response<GetMasterResponse> =>
    this._query(`/masters/${masterId}`);

  getMasterVersions = (
    masterId: number,
    opts?: GetMasterVersionsOpts
  ): Response<GetMasterVersionsResponse> =>
    this._query(`/masters/${masterId}/versions`, opts);

  getRelease = (releaseId: number): Response<GetReleaseResponse> =>
    this._query(`/releases/${releaseId}`);

  getLabel = (labelId: number): Response<GetLabelResponse> =>
    this._query(`/labels/${labelId}`);

  getLabelReleases = (
    labelId: number,
    opts?: PaginationOpts
  ): Response<GetLabelReleasesResponse> =>
    this._query(`/labels/${labelId}/releases`, opts);

  getReleaseRatingByUser = (
    releaseId: number,
    username: string
  ): Response<GetReleaseRatingByUserResponse> =>
    this._query(`/releases/${releaseId}/rating/${username}`);

  getCommunityReleaseRating = (
    releaseId: number
  ): Response<GetCommunityReleaseRatingResponse> =>
    this._query(`/releases/${releaseId}/rating`);

  private _authorizationQueryString = this.options.auth
    ? makeQueryString(this.options.auth)
    : "";

  private _query = <T>(uri: string, q?: object): Response<T> => {
    const url = this._buildUrl(uri, q);
    debug(url);
    return this._doHttpGetRequest(url);
  };

  private _buildUrl = <T extends {}>(path: string, query?: T): string =>
    "https://api.discogs.com" +
    path +
    "?" +
    this._authorizationQueryString +
    (query !== undefined ? "&" + makeQueryString(query) : "");

  private _doHttpGetRequest = <T>(url: string): Promise<T> =>
    Axios.get<T>(url)
      .then(resp => {
        const ratelimit = Number.parseInt(resp.headers["x-discogs-ratelimit"]),
          ratelimitRemaining = Number.parseInt(
            resp.headers["x-discogs-ratelimit-remaining"]
          ),
          ratelimitUsed = Number.parseInt(
            resp.headers["x-discogs-ratelimit-used"]
          );

        debug({ ratelimit, ratelimitRemaining, ratelimitUsed });

        return resp.data;
      })
      .catch(reason => {
        if (reason.response)
          throw new DiscogsError(
            reason.response.data.message,
            reason.response.status
          );
        else throw new DiscogsError(String(reason));
      });
}
