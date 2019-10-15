export interface ArtistRelease {
  status: string;
  stats: {
    community: {
      in_collection: number;
      in_wantlist: number;
    };
  };
  thumb: string;
  format: string;
  title: string;
  label: string;
  role: string;
  year?: number;
  resource_url: string;
  artist: string;
  type: "release";
  id: number;
  trackinfo?: string;
}
