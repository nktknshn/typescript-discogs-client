export interface Master {
    styles?:                 string[];
    genres?:                 string[];
    videos?:                 Video[];
    num_for_sale:            number;
    title:                   string;
    most_recent_release:     number | null;
    main_release:            number;
    notes?:                  string;
    main_release_url:        string;
    uri:                     string;
    artists:                 MasterArtist[];
    versions_url:            string;
    data_quality:            string;
    most_recent_release_url: string;
    year:                    number;
    images?:                 Image[];
    resource_url:            string;
    lowest_price:            number | null;
    id:                      number;
    tracklist:               MasterTrack[];
}

export interface MasterArtist {
    join:         string;
    name:         string;
    anv:          string;
    tracks:       string;
    role:         string;
    resource_url: string;
    id:           number;
}

export interface Image {
    uri:          string;
    height:       number;
    width:        number;
    resource_url: string;
    type:         string;
    uri150:       string;
}

export interface MasterTrack {
    duration:      string;
    position:      string;
    type_:         string;
    title:         string;
    extraartists?: MasterArtist[];
}

export interface Video {
    duration:    number;
    description: string;
    embed:       boolean;
    uri:         string;
    title:       string;
}