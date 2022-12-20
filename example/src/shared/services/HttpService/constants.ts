export const UNAUTHORIZED_HTTP_CODE = 401;

export const FORBIDDEN_HTTP_CODE = 403;

export const BAD_REQUEST_HTTP_CODE = 400;

export const NOT_FOUND_HTTP_CODE = 404;

export const INTERNAL_ERROR_HTTP_CODE = 500;

export const BAD_REQUEST_ERROR_INFO = {
  code: BAD_REQUEST_HTTP_CODE,
  message: 'Ошибка запроса',
};

export const NOT_FOUND_ERROR_INFO = {
  code: NOT_FOUND_HTTP_CODE,
  message: 'Сервер не отвечает',
};

export const UNAUTHORIZED_HTTP_INFO = {
  code: UNAUTHORIZED_HTTP_CODE,
  message: 'Пользователь не авторизован',
};

export const INTERNAL_ERROR_INFO = {
  httpCode: INTERNAL_ERROR_HTTP_CODE,
  message: 'Неизвестная ошибка',
};
