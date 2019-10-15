import { Image } from "./image";
import { Video } from "./video";
import { EntityArtist } from "./entityArtist";

export interface Release {
  identifiers: Identifier[];
  series: unknown[];
  labels: Company[];
  community: ReleaseCommunity;
  year: number;
  images?: Image[];
  format_quantity: number;
  id: number;
  artists_sort: string;
  genres: string[];
  thumb: string;
  num_for_sale: number;
  title: string;
  artists: EntityArtist[];
  date_changed: Date | null;
  lowest_price: number | null;
  status: string;
  released_formatted?: string;
  released?: string;
  date_added: Date | null;
  extraartists: EntityArtist[];
  country?: string;
  notes?: string;
  tracklist: ReleaseTrack[];
  companies: Company[];
  uri: string;
  formats: Format[];
  resource_url: string;
  data_quality: string;
  estimated_weight?: number;
  styles?: string[];
  videos?: Video[];
  master_id?: number;
  master_url?: string;
}

export interface ReleaseCommunity {
  status: string;
  rating: Rating;
  want: number;
  contributors: Contributor[];
  have: number;
  submitter: Contributor | null;
  data_quality: string;
}

export interface Contributor {
  username: string;
  resource_url: string;
}

export interface Rating {
  count: number;
  average: number;
}

export interface Company {
  name: string;
  entity_type: string;
  catno: string;
  resource_url: string;
  id: number;
  entity_type_name: string;
}

export interface Format {
  qty: string;
  descriptions?: string[];
  name: string;
  text?: string;
}

export interface Identifier {
  type: string;
  value: string;
  description?: string;
}

export interface ReleaseTrack {
  duration: string;
  position: string;
  type_: string;
  artists?: EntityArtist[];
  title: string;
  extraartists?: EntityArtist[];
}
