/**
 * TODO: https://github.com/snurby7/coffee-rates/issues/37
 @todo Make the Server response more robust
 @body This file really needs some work so #5 can have an easier time knowing what's what.
*/

/**
 * @description A generic container for the API to send back so all commands are structured the same
 * @interface IServerResponse
 * @template T
 */
export interface IServerResponse<T extends any> {
  /**
   * @description An optional response object of the expected type
   * @memberof IServerResponse
   */
  response: T;
  /**
   * @description A response code so there is logical to handle a given code
   * @memberof IServerResponse
   */
  errmsg?: string;
}
