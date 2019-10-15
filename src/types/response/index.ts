import { SearchLabel } from "./searchLabel";
import { SearchArtist } from "./searchArtist";
import { SearchMaster } from "./searchMaster";
import { SearchRelease } from "./searchRelease";
import { Pagination } from "./pagination";
import { ArtistRelease } from "./artistRelease";
import { ArtistMaster } from "./artistMaster";
import { LabelRelease } from "./labelRelease";
import { MasterVersions } from "./masterVersions";
import { Artist } from "./artist";
import { Master } from "./master";
import { Release } from "./release";
import { Label } from "./label";

export interface GetArtistResponse extends Artist {}
export interface GetMasterResponse extends Master {}
export interface GetReleaseResponse extends Release {}
export interface GetLabelResponse extends Label {}

export interface GetArtistReleasesResponse {
  pagination: Pagination;
  releases: (ArtistRelease | ArtistMaster)[];
}
export interface SearchResponse {
  pagination: Pagination;
  results: SearchResult[];
}
export interface GetLabelReleasesResponse {
  pagination: Pagination;
  releases: LabelRelease[];
}
export interface GetMasterVersionsResponse extends MasterVersions {
  pagination: Pagination;
}

export type SearchResult =
  | SearchArtist
  | SearchLabel
  | SearchMaster
  | SearchRelease;

export interface GetReleaseRatingByUserResponse {
  username: string;
  release: string;
  rating: string;
}

export interface GetCommunityReleaseRatingResponse {
  rating: {
    count: number;
    average: number;
  };
  release_id: number;
}
