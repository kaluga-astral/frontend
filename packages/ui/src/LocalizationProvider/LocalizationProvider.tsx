import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/lab';
import { FC } from 'react';
import { ru } from 'date-fns/locale';

import { LocalizationProviderProps } from './types';

export const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  locale = ru,
}) => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
