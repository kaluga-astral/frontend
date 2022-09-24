import {
  BuildIsoDateStringOptions,
  buildIsoDateString,
} from '../buildIsoDateString';

export const buildIsoDate = (options: BuildIsoDateStringOptions) =>
  new Date(buildIsoDateString(options));
