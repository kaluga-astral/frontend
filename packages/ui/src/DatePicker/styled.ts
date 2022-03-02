/* import { CustomPickerDayProps } from './types';
import PickersDay, { PickersDayProps } from '@mui/lab/PickersDay';

import { styled } from '../styles';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'today',
})<CustomPickerDayProps>(({ theme, today }) => ({
  ...(today && {
    border: 'none',
    borderRadius: 0,
    backgroundColor: 'unset',
    borderBottom: '1px solid blue',
    color: 'unset',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export const renderWeekPickerDay = (pickersDayProps: PickersDayProps<Date>) => {
  return //<CustomPickersDay {...pickersDayProps} />;
};
 */
