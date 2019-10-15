export interface SearchQuery {
  per_page?: number;
  page?: number;
  query?: string;
  type?: "artist" | "master" | "release" | "label";
  title?: string;
  release_title?: string;
  credit?: string;
  artist?: string;
  anv?: string;
  label?: string;
  genre?: string;
  style?: string;
  country?: string;
  year?: string | number;
  format?: string;
  catno?: string;
  barcode?: string;
  track?: string;
  submitter?: string;
  contributor?: string;
}

export type PaginationOpts = {
  page?: number;
  per_page?: number;
};

export type GetArtistReleasesOpts = {
  sort?: "year" | "title" | "format";
} & PaginationOpts;

export type GetMasterVersionsOpts = {
  format?: string;
  label?: string;
  country?: string;
  sort?: "released" | "title" | "format" | "label" | "catno" | "country";
  sort_order?: "asc" | "desc";
} & PaginationOpts;
