import { PropsWithChildren } from 'react';
import { ClickAwayListener } from '@mui/material';

type DatePickerClickAwayListenerProps = {
  onClickAway: () => void;
};

export const DatePickerClickAwayListener = ({
  onClickAway,
  children,
}: PropsWithChildren<DatePickerClickAwayListenerProps>) => (
  <ClickAwayListener onClickAway={onClickAway}>
    <div>{children}</div>
  </ClickAwayListener>
);
