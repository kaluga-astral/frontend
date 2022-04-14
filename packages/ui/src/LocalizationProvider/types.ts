import { LocalizationProviderProps as MuiLocalizationProviderProps } from '@mui/lab';

export type LocalizationProviderProps = Omit<
  MuiLocalizationProviderProps,
  'dateAdapter'
>;
