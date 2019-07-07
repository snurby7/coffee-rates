import {
  ApiUtility,
  ICoffeePageRequest,
  ICoffeePageResponse,
  ICoffeeProfile,
  ICreateAccountRequest,
  ILoginRequest,
  IServerResponse,
} from '@cr/common';

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
  async addCoffee(request: ICoffeeProfile): Promise<IServerResponse<void>> {
    const response: IServerResponse<void> = await ApiUtility.postRequest(
      CoffeeRoutes.addCoffee,
      request,
    );
    return handleServerResponse(response);
  },

  /**
   * @description Add a new coffee to the database
   * @param request The coffee to edit.
   * @returns A generic server response with no response but a response code
   */
  async editCoffee(
    request: ICoffeeProfile,
  ): Promise<IServerResponse<ICoffeeProfile>> {
    const response: IServerResponse<void> = await ApiUtility.postRequest(
      CoffeeRoutes.editCoffee,
      request,
    );
    return handleServerResponse(response);
  },

  /**
   * @description Page the available coffees in the server
   * @param request The request to retrieve containing where to start and the page size.
   * @returns A IServerResponse containing the coffee data
   */
  async pageCoffeeList(
    request: ICoffeePageRequest,
  ): Promise<IServerResponse<ICoffeePageResponse>> {
    const response: IServerResponse<
      ICoffeePageResponse
    > = await ApiUtility.postRequest(CoffeeRoutes.pageCoffees, request);
    return handleServerResponse(response);
  },

  async login(request: ILoginRequest): Promise<IServerResponse<any>> {
    // TODO endpoint
    return Promise.resolve({} as IServerResponse<any>);
  },

  async createAccount(
    request: ICreateAccountRequest,
  ): Promise<IServerResponse<any>> {
    return Promise.resolve({} as IServerResponse<any>);
  },
};
