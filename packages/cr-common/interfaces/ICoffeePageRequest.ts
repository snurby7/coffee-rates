export interface ICoffeePageRequest {
  /**
   * @description Number of coffees that are expected as the maximum number of coffees per page
   * @memberof ICoffeePageRequest
   */
  maxPageSize: number;
  /**
   * @description The number to start the page at
   * @memberof ICoffeePageRequest
   */
  pageStart: number;
}
