import {
  BAD_REQUEST_ERROR_INFO,
  HttpServiceError,
  INTERNAL_ERROR_INFO,
  NOT_FOUND_ERROR_INFO,
  UNAUTHORIZED_HTTP_INFO,
} from '../../../HttpService';
import { ApiDataError } from '../../error';

type ApiErrorInfo = {
  statusCode: number;
  errorMessage?: string;
  errors?: Array<{
    message: string;
    additionalInfo: {
      errorCustomField?: string;
    };
  }>;
};

// Если нет response, то это Network Error (403...)
export const getMainApiErrorRes = (
  error: HttpServiceError<ApiErrorInfo, ApiErrorInfo>,
): ApiErrorInfo => {
  if (error?.response?.status === UNAUTHORIZED_HTTP_INFO.code) {
    return {
      statusCode: UNAUTHORIZED_HTTP_INFO.code,
      errors: [
        {
          message: UNAUTHORIZED_HTTP_INFO.message,
          additionalInfo: {},
        },
      ],
    };
  }

  return (
    error.response?.data || {
      statusCode: INTERNAL_ERROR_INFO.httpCode,
      errors: [
        {
          message: INTERNAL_ERROR_INFO.message,
          additionalInfo: {},
        },
      ],
    }
  );
};

export const formatApiError = (
  mainApiError: HttpServiceError<ApiErrorInfo, ApiErrorInfo>,
): ApiDataError => {
  const errorResponse: ApiErrorInfo = getMainApiErrorRes(mainApiError);

  const { statusCode } = errorResponse;

  if (errorResponse.errors && errorResponse.errors.length) {
    return new ApiDataError({
      errors: errorResponse.errors,
    });
  }

  switch (statusCode) {
    case BAD_REQUEST_ERROR_INFO.code:
      return new ApiDataError({
        errors: [
          {
            message: BAD_REQUEST_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });

    case NOT_FOUND_ERROR_INFO.code:
      return new ApiDataError({
        errors: [
          {
            message: NOT_FOUND_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });

    default:
      return new ApiDataError({
        errors: [
          {
            message: INTERNAL_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });
  }
};
