import { ICoffeeProfile } from '../contracts';
import { IServerResponse } from '../contracts/IServerResponse';
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
};
