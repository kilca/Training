export class ApiResponse<T> {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
  }