import { type AutoSaveIndicatorErrorState } from './services/types';

export const AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE: AutoSaveIndicatorErrorState =
  {
    message: '',
    onRetry: () => {},
  };
