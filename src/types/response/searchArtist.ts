export interface SearchArtist {
  thumb: string;
  title: string;
  uri: string;
  master_url: null;
  cover_image: string;
  resource_url: string;
  master_id: null;
  type: "artist";
  id: number;
  user_data?: {
    in_collection: boolean;
    in_wantlist: boolean;
  };
}
