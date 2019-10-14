export interface Artist {
    profile:         string;
    releases_url:    string;
    name:            string;
    namevariations?: string[];
    uri:             string;
    members?:        Alias[];
    urls?:           string[];
    images?:         Image[];
    resource_url:    string;
    aliases?:        Alias[];
    id:              number;
    data_quality:    string;
    realname?:       string;
    groups?:         Alias[];
}

export interface Alias {
    resource_url: string;
    id:           number;
    name:         string;
    active?:      boolean;
}

export interface Image {
    uri:          string;
    height:       number;
    width:        number;
    resource_url: string;
    type:         string;
    uri150:       string;
}
