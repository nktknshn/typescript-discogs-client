export interface Pagination {
  per_page: number;
  pages: number;
  page: number;
  urls: {
    last?: string;
    next?: string;
    prev?: string;
    first?: string;
  };
  items: number;
}
