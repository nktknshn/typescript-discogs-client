import { Image } from "./image";

export interface Artist {
  profile: string;
  releases_url: string;
  name: string;
  namevariations?: string[];
  uri: string;
  members?: ArtistAlias[];
  urls?: string[];
  images?: Image[];
  resource_url: string;
  aliases?: ArtistAlias[];
  id: number;
  data_quality: string;
  realname?: string;
  groups?: ArtistAlias[];
}

export interface ArtistAlias {
  resource_url: string;
  id: number;
  name: string;
  active?: boolean;
}
