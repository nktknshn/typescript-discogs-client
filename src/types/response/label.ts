import { Image } from "./image";

export interface Label {
  profile?: string;
  releases_url: string;
  name: string;
  contact_info?: string;
  uri: string;
  urls?: string[];
  images?: Image[];
  resource_url: string;
  id: number;
  data_quality: string;
}
