import { stringify } from 'query-string';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { DataError } from '../DataError';

type ErrorHandler = (error: HttpServiceError<unknown, unknown>) => unknown;
type ErrorFormatter<
  CurrentDataError extends DataError<Record<string, unknown>>,
  //  eslint-disable-next-line
  > = (error: HttpServiceError<any, any>) => CurrentDataError;

export interface HttpService extends AxiosInstance {
  subscribeOnError(func: ErrorHandler): void;
  initErrorFormatter<
    CurrentDataError extends DataError<Record<string, unknown>>,
  >(
    func: ErrorFormatter<CurrentDataError>,
  ): void;
}

export type HttpServiceError<T, D> = AxiosError<T, D>;

export type HttpServiceResponse<T, D = T> = AxiosResponse<T, D>;

export type HttpServicePromise<T> = AxiosPromise<T>;

type HttpServiceConfig = AxiosRequestConfig;

export const createHttpService = (
  config: HttpServiceConfig = {},
): HttpService => {
  const errorListeners: ErrorHandler[] = [];
  let errorFormatter: ErrorFormatter<DataError<Record<string, unknown>>> = () =>
    new DataError({
      errors: [{ message: 'Неизвестная ошибка', additionalInfo: {} }],
    });

  const httpService = axios.create({
    ...config,
    paramsSerializer: {
      serialize: (params) => {
        return stringify(params);
      },
    },
  }) as HttpService;

  httpService.subscribeOnError = (func) => {
    errorListeners.push(func);
  };

  httpService.initErrorFormatter = (func) => {
    errorFormatter = func;
  };

  httpService.interceptors.response.use(
    (res) => res,
    (error) => {
      errorListeners.forEach((func) => {
        func(error);
      });

      return Promise.reject(errorFormatter(error));
    },
  );

  return httpService;
};

export const setStaticAuthToken = (httpService: HttpService, token: string) => {
  // eslint-disable-next-line
  httpService.defaults.headers.common.authorization = token;
};
