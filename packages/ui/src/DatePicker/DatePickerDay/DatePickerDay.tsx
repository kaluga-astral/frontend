import { StyledDatePickerDay } from './styled';
import { DatePickerDayProps } from './types';

export const DatePickerDay = (props: DatePickerDayProps) => {
  return (
    <StyledDatePickerDay variant="text">{props.dayOfMonth}</StyledDatePickerDay>
  );
};
