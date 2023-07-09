/**
 * Return from the database api when requesting records with pagination.
 */
export interface PageRecord<T> {
    items: T[];
    page: number;
    perPage : number;
    totalItems: number;
    totalPages: number;
}