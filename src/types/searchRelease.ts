export interface SearchRelease {
    style:           string[];
    barcode:         string[];
    thumb:           string;
    title:           string;
    type:            'release';
    format:          string[];
    uri:             string;
    community:       Community;
    label:           string[];
    country:         string;
    cover_image:     string;
    catno:           string;
    master_url:      null | string;
    year?:           string;
    genre:           string[];
    resource_url:    string;
    master_id:       number;
    format_quantity: number;
    id:              number;
    formats:         Format[];
    user_data?:      UserData;
}

export interface Community {
    want: number;
    have: number;
}

export interface Format {
    qty:           string;
    descriptions?: string[];
    name:          string;
    text?:         string;
}

export interface UserData {
    in_collection: boolean;
    in_wantlist:   boolean;
}
