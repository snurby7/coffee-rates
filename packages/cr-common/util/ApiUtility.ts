import { UrlFormatUtility } from './UrlFormatUtility';

export const ApiUtility = {
  /**
   * @description A wrapper around the fetch operation in case my needs ever change
   *
   * @template T The Object that the query is of the type of
   * @param {string} route The route that needs to be hit
   * @param {T} [query] The optional query object
   * @returns A promise of type any
   */
  async getRequest<T extends any>(route: string, query?: T) {
    if (query) {
      route = UrlFormatUtility.formatUrl(route, query);
    }
    const response = (await fetch(route).catch((error) => {
      alert(error);
    })) as Response;
    const result = await response.json();
    return result;
  },

  async postRequest<T extends any>(route: string, data: T, replaceTemplates: boolean = true) {
    if (replaceTemplates) {
      route = UrlFormatUtility.formatUrl(route, data);
    }

    const response = (await fetch(route, {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).catch((error) => {
      alert(error);
    })) as Response;
    const result = await response.json();
    return result;
  },
  async deleteRequest<T extends any>(route: string, data: T) {
    const response = (await fetch(route, {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    }).catch((error) => {
      alert(error);
    })) as Response;
    return await response.json();
  },
};
