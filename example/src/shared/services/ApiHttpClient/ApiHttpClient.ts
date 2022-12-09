import { HttpService, createHttpService } from '../HttpService';
import { configService } from '../ConfigService';

import { ApiDataError } from './error';
import { formatApiError } from './utils';

const createApiHttpClient = (): HttpService => {
  const apiHttpClient = createHttpService({
    baseURL: configService.config.apiUrl,
  });

  apiHttpClient.initErrorFormatter<ApiDataError>(formatApiError);

  return apiHttpClient;
};

/**
 * @description Http service для взаимодействия с основным api
 * */
export const apiHttpClient = createApiHttpClient();
