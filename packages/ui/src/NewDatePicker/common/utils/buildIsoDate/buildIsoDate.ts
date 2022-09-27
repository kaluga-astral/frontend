import {
  BuildIsoDateStringOptions,
  buildIsoDateString,
} from '../buildIsoDateString';

/**
 * @description рендер даты не зависящей от часового пояса пользователя
 */
export const buildIsoDate = (options: BuildIsoDateStringOptions) =>
  new Date(buildIsoDateString(options));
