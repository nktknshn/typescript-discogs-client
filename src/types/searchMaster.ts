export interface SearchMaster {
    style:        string[];
    thumb:        string;
    format:       string[];
    country:      string;
    barcode:      string[];
    uri:          string;
    master_url:   string;
    label:        string[];
    genre:        string[];
    catno:        string;
    community:    Community;
    year?:        string;
    cover_image:  string;
    title:        string;
    resource_url: string;
    master_id:    number;
    type:         'master';
    id:           number;
    user_data?:   UserData;
}

export interface Community {
    want: number;
    have: number;
}

export interface UserData {
    in_collection: boolean;
    in_wantlist:   boolean;
}
