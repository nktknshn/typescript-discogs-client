export interface ArtistMaster {
  stats: {
    community: {
      in_collection: number;
      in_wantlist: number;
    };
  };
  thumb: string;
  title: string;
  main_release: number;
  artist: string;
  role: string;
  year?: number;
  resource_url: string;
  type: "master";
  id: number;
}
