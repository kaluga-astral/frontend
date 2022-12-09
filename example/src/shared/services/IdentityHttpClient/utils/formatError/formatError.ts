import {
  BAD_REQUEST_ERROR_INFO,
  HttpServiceError,
  INTERNAL_ERROR_INFO,
  NOT_FOUND_ERROR_INFO,
  UNAUTHORIZED_HTTP_INFO,
} from '../../../HttpService';
import { IdentityDataError } from '../../error';

type IdentityErrorInfo = {
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
export const getIdentityApiErrorRes = (
  error: HttpServiceError<IdentityErrorInfo, IdentityErrorInfo>,
): IdentityErrorInfo => {
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

export const formatIdentityError = (
  mainApiError: HttpServiceError<IdentityErrorInfo, IdentityErrorInfo>,
): IdentityDataError => {
  const errorResponse: IdentityErrorInfo = getIdentityApiErrorRes(mainApiError);

  const { statusCode } = errorResponse;

  if (errorResponse.errors && errorResponse.errors.length) {
    return new IdentityDataError({
      errors: errorResponse.errors,
    });
  }

  switch (statusCode) {
    case BAD_REQUEST_ERROR_INFO.code:
      return new IdentityDataError({
        errors: [
          {
            message: BAD_REQUEST_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });

    case NOT_FOUND_ERROR_INFO.code:
      return new IdentityDataError({
        errors: [
          {
            message: NOT_FOUND_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });

    default:
      return new IdentityDataError({
        errors: [
          {
            message: INTERNAL_ERROR_INFO.message,
            additionalInfo: {},
          },
        ],
      });
  }
};
