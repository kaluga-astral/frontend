import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { ru } from 'date-fns/locale';

export const DatePickersUtilsProvider = ({ children }: any) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
    {children}
  </LocalizationProvider>
);

export default DatePickersUtilsProvider;
