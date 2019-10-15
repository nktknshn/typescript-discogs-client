export interface SearchMaster {
  style: string[];
  thumb: string;
  format: string[];
  country: string;
  barcode: string[];
  uri: string;
  master_url: string;
  label: string[];
  genre: string[];
  catno: string;
  community: {
    want: number;
    have: number;
  };
  year?: string;
  cover_image: string;
  title: string;
  resource_url: string;
  master_id: number;
  type: "master";
  id: number;
  user_data?: {
    in_collection: boolean;
    in_wantlist: boolean;
  };
}
