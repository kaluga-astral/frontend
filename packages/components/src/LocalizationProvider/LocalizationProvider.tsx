import { PropsWithChildren } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/lab';
import { LocalizationProviderProps as MuiLocalizationProviderProps } from '@mui/lab';

export type LocalizationProviderProps = Omit<
  MuiLocalizationProviderProps,
  'dateAdapter'
>;

export const LocalizationProvider = ({
  children,
  locale = 'ru',
}: PropsWithChildren<LocalizationProviderProps>) => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
