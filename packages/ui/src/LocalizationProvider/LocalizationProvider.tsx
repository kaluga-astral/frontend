import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  LocalizationProviderProps,
  LocalizationProvider as MuiLocalizationProvider,
} from '@mui/lab';
import { FC } from 'react';
import { ru } from 'date-fns/locale';

export const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  locale = ru,
}): JSX.Element => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
