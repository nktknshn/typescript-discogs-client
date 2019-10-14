import { Artist } from './artist'
import { ArtistRelease } from './artistRelease'
import { ArtistMaster } from './artistMaster'
import { Release, ReleaseTrack, ReleaseArtist } from './release'
import { Master, MasterTrack, MasterArtist } from './master'
import { MasterVersions } from './masterVersions'
import { Label } from './label'
import { LabelRelease } from './labelRelease'
import { SearchArtist } from './searchArtist'
import { SearchMaster } from './searchMaster'
import { SearchRelease } from './searchRelease'
import { SearchLabel } from './searchLabel'

interface SearchQuery {
  per_page?: number,
  page?: number,
  query?: string,
  type?: 'artist' | 'master' | 'release' | 'label',
  title?: string,
  release_title?: string,
  credit?: string,
  artist?: string,
  anv?: string,
  label?: string,
  genre?: string,
  style?: string,
  country?: string,
  year?: string | number,
  format?: string,
  catno?: string,
  barcode?: string,
  track?: string,
  submitter?: string,
  contributor?: string,
}

interface Pagination {
  per_page: number,
  pages: number,
  page: number,
  urls: {
    last?: string,
    next?: string,
    prev?: string,
    first?: string
  },
  items: number
}

type SearchResult = SearchArtist | SearchLabel | SearchMaster | SearchRelease

interface SearchResponse {
  pagination: Pagination,
  results: SearchResult[]
}

type ArtistReleaseOrMaster = ArtistRelease | ArtistMaster

interface ArtistReleasesResponse {
  pagination: Pagination,
  releases: ArtistReleaseOrMaster[]
}

interface LabelReleasesResponse {
  pagination: Pagination,
  releases: LabelRelease[]
}

interface MasterVersionsResponse extends MasterVersions {
  pagination: Pagination,
}

interface ReleaseRatingByUser {
  username: string,
  release: string,
  rating: string
}

interface CommunityReleaseRating {
  rating: {
    count: number,
    average: number
  },
  release_id: number
}

// type EntityTrack = MasterTrack | ReleaseTrack
// type EntityArtist = ReleaseArtist | MasterArtist

export {
  Artist, ArtistMaster, ArtistRelease,
  Label, LabelRelease, Master, MasterVersions, Release, SearchArtist,
  SearchMaster, SearchRelease, SearchQuery, SearchResponse, SearchResult, Pagination,
  ArtistReleasesResponse, LabelReleasesResponse, MasterVersionsResponse, ReleaseRatingByUser,
  CommunityReleaseRating, ArtistReleaseOrMaster, ReleaseTrack, ReleaseArtist, MasterTrack, MasterArtist
}
