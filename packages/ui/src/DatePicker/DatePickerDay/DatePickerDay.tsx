import { DatePickerDayButton } from './styled';

type Props = {
  dayOfMonth: number;
  date?: Date | undefined;
};

export const DatePickerDay = (props: Props) => {
  return (
    <DatePickerDayButton variant="text">{props.dayOfMonth}</DatePickerDayButton>
  );
};
