export interface MasterVersions {
    filter_facets: FilterFacet[];
    filters:       Filters;
    versions:      Version[];
}

export interface FilterFacet {
    allows_multiple_values: boolean;
    values:                 Value[];
    id:                     string;
    title:                  string;
}

export interface Value {
    count: number;
    value: string;
    title: string;
}

export interface Filters {
    applied:   Applied;
    available: Available;
}

export interface Applied {
}

export interface Available {
    country:  { [key: string]: number };
    label:    { [key: string]: number };
    released: { [key: string]: number };
    format:   { [key: string]: number };
}

export interface Version {
    status:        string;
    stats:         Stats;
    thumb:         string;
    format:        string;
    country:       string;
    title:         string;
    label:         string;
    released:      string;
    major_formats: string[];
    catno:         string;
    resource_url:  string;
    id:            number;
}

export interface Stats {
    community: Community;
}

export interface Community {
    in_collection: number;
    in_wantlist:   number;
}
