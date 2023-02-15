import { HttpService, createHttpService } from '../HttpService';

import { IdentityDataError } from './error';
import { formatIdentityError } from './utils';

const createIdentityHttpClient = (): HttpService => {
  const identityHttpClient = createHttpService({
    //TODO заменить на config service
    baseURL: process.env.IDENTITY_URL as string,
  });

  identityHttpClient.initErrorFormatter<IdentityDataError>(formatIdentityError);

  return identityHttpClient;
};

/**
 * @description Http service для взаимодействия с основным api
 * */
export const identityHttpClient = createIdentityHttpClient();
