// export interface LabelRelease {
//     pagination: Pagination;
//     releases:   Release[];
// }

// export interface Pagination {
//     per_page: number;
//     items:    number;
//     page:     number;
//     urls:     Urls;
//     pages:    number;
// }

// export interface Urls {
//     last: string;
//     next: string;
// }

export interface LabelRelease {
    status:       string;
    artist:       string;
    catno:        string;
    thumb:        string;
    format:       string;
    resource_url: string;
    title:        string;
    year:         number;
    id:           number;
}
