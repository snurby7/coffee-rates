/**
 * @description Interface used to ensure all new coffees following a concrete pattern.
 * @export
 * @interface ICoffeeProfile
 */
export interface ICoffeeProfile {
  /**
   * @description Date of purchase of the coffee. Will default to today
   * @memberof ICoffeeProfile
   */
  purchaseDate: string;
  /**
   * @description Roaster name, more details can be found via Googling the roaster name
   * @memberof ICoffeeProfile
   */
  roasterName: string;
  /**
   * @description The name the roaster uses to identify the coffee.
   * @memberof ICoffeeProfile
   */
  coffeeName: string;
  /**
   * @description Region the beans came from (i.e. Guatemala, Kenya, etc)
   * @memberof ICoffeeProfile
   */
  region: string;
  /**
   * @description A rating from 1 to 5 with 5 being the best.
   * @memberof ICoffeeProfile
   */
  rating: number;
  /**
   * @description The URL to possibly buy more or find out more about the roaster
   * @memberof ICoffeeProfile
   */
  url?: string;
  /**
   * @description Some notes about the coffee, maybe flavors or something to that effect
   * @memberof ICoffeeProfile
   */
  notes?: string;
  /**
   * @description The ID for the user who wants to add the new coffee
   * @memberof ICoffeeProfile
   */
  userId: string;
}
