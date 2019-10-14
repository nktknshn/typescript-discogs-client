export interface ArtistMaster {
    stats:        Stats;
    thumb:        string;
    title:        string;
    main_release: number;
    artist:       string;
    role:         string;
    year?:        number;
    resource_url: string;
    type:         'master';
    id:           number;
}

export interface Stats {
    community: Community;
}

export interface Community {
    in_collection: number;
    in_wantlist:   number;
}