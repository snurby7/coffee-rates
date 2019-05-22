import { ICoffeePageRequest, ICoffeePageResponse, ICoffeeProfile, IServerResponse } from 'cr-common';

import { ApiUtility } from '../util';
import { CoffeeRoutes } from './CoffeeRoutes';

const handleServerResponse = (response: IServerResponse<any>) => {
  if (response.errmsg && response.errmsg.length > 0) {
    return Promise.reject('Internal Server Error');
  }
  return response;
};

export const CoffeeApi = {
  /**
   * @description Add a new coffee to the database
   * @param addRequest The newly created coffee from the form.
   * @returns A generic server response with no response but a response code
   */
  async addCoffee(addRequest: ICoffeeProfile): Promise<IServerResponse<void>> {
    const response: IServerResponse<void> = await ApiUtility.postRequest(
      CoffeeRoutes.addCoffee,
      addRequest
    );
    return handleServerResponse(response);
  },

  /**
   * @description Page the available coffees in the server
   * @param pageRequest The request to retrieve containing where to start and the page size.
   * @returns A IServerResponse containing the coffee data
   */
  async pageCoffeeList(
    pageRequest: ICoffeePageRequest
  ): Promise<IServerResponse<ICoffeePageResponse>> {
    const response: IServerResponse<ICoffeePageResponse> = await ApiUtility.postRequest(
      CoffeeRoutes.pageCoffees,
      pageRequest
    );
    return handleServerResponse(response);
  },
};
