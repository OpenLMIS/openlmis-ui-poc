export interface SortInfo {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  descending: boolean;
  ascending: boolean;
}

export interface Pageable {
  sort: SortInfo[];
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PaginatedResponse<TContentItem> {
  content: TContentItem[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: SortInfo[];
  totalElements: number;
  totalPages: number;
}

export type Right = {
  id: string;
  name: string;
  type: string;
};

export type RoleAssignment = {
  id: string;
  name: string;
  description: string;
  rights: Right[];
  count: number;
};

export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  timezone: string;
  active: boolean;
  extraData: Record<string, unknown>;
  roleAssignments: RoleAssignment[];
};

export type MinimalFacility = {
  active: boolean;
  id: string;
  name: string;
  code: string;
};
