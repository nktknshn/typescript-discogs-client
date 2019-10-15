import { Image } from "./image";
import { Video } from "./video";
import { EntityArtist } from "./entityArtist";

export interface Master {
  styles?: string[];
  genres?: string[];
  videos?: Video[];
  num_for_sale: number;
  title: string;
  most_recent_release: number | null;
  main_release: number;
  notes?: string;
  main_release_url: string;
  uri: string;
  artists: EntityArtist[];
  versions_url: string;
  data_quality: string;
  most_recent_release_url: string;
  year: number;
  images?: Image[];
  resource_url: string;
  lowest_price: number | null;
  id: number;
  tracklist: MasterTrack[];
}

export interface MasterTrack {
  duration: string;
  position: string;
  type_: string;
  title: string;
  extraartists?: EntityArtist[];
}
