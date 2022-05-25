import { DatePickerDayButton } from './styled';

type Props = {
  dayOfMonth: number;
  date?: Date;
};

export const DatePickerDay = (props: Props) => {
  return (
    <DatePickerDayButton variant="text">{props.dayOfMonth}</DatePickerDayButton>
  );
};
