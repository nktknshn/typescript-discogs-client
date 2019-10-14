export interface ArtistRelease {
    status:       string;
    stats:        Stats;
    thumb:        string;
    format:       string;
    title:        string;
    label:        string;
    role:         string;
    year?:        number;
    resource_url: string;
    artist:       string;
    type:         'release';
    id:           number;
    trackinfo?:   string;
}

export interface Stats {
    community: Community;
}

export interface Community {
    in_collection: number;
    in_wantlist:   number;
}
