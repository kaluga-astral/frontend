import { PickersDayProps } from '@mui/lab';

export type CustomPickerDayProps = PickersDayProps<Date> & {
  today: boolean;
};
