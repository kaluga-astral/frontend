import { DatePickerProps as MuiDatePickerProps } from '@mui/lab';

export type DatePickerProps = Omit<
  MuiDatePickerProps,
  'components' | 'renderInput'
>;
