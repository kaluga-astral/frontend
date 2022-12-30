import {
  BuildIsoDateStringOptions,
  buildIsoDateString,
} from './buildIsoDateString';

/**
 * @description утилита для создания даты не зависящей от часового пояса пользователя
 */
export const buildIsoDate = (options: BuildIsoDateStringOptions) =>
  new Date(buildIsoDateString(options));
