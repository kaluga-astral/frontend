import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, LocalizationProviderProps } from '@mui/lab';
import { FC } from 'react';
import { ru } from 'date-fns/locale';

export const DatePickersUtilsProvider: FC<LocalizationProviderProps> = ({
  children,
  locale = ru,
}): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      {children}
    </LocalizationProvider>
  );
};

export default DatePickersUtilsProvider;
