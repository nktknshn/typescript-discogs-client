export interface SearchLabel {
  thumb: string;
  title: string;
  uri: string;
  master_url: null;
  cover_image: string;
  resource_url: string;
  master_id: null;
  type: "label";
  id: number;
  user_data?: {
    in_collection: boolean;
    in_wantlist: boolean;
  };
}
