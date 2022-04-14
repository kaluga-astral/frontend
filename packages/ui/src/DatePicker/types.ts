import { DatePickerProps as MuiDatePickerProps } from '@mui/lab';

export type DatePickerProps = Omit<
  MuiDatePickerProps,
  | 'components'
  | 'renderInput'
  | 'showDaysOutsideCurrentMonth'
  | 'components'
  | 'componentsProps'
  | 'OpenPickerButtonProps'
  | 'PaperProps'
  | 'PopperProps'
>;

export type DatePickerValue = Date;
