import { PropsWithChildren, SyntheticEvent } from 'react';
import { PopperProps } from '@mui/material';

import { useEscapeClickEffect } from '../../hooks/useEscapeClickEffect';
import { CloseEventReason, WithoutEmotionSpecific } from '../../types';

import { DatePickerPopoverInner, PopperWrapper } from './styles';

export type DatePickerProps = PropsWithChildren<
  Omit<WithoutEmotionSpecific<PopperProps>, 'children'>
> & {
  onClose?: (
    _?: SyntheticEvent<Element, Event> | Event,
    reason?: CloseEventReason,
  ) => void;
};

export const DatePickerPopper = ({
  children,
  onClose,
  ...props
}: DatePickerProps) => {
  useEscapeClickEffect({
    onEscape: onClose,
    isActive: props.open,
    preventBubbling: true,
  });

  return (
    <PopperWrapper
      {...props}
      placement="bottom-start"
      disablePortal
      modifiers={[
        {
          name: 'offset',
          options: {
            // использование отступов для соответствия с дизайном, 0 по горизонтали, 8px по вертикали
            offset: [0, 8],
          },
        },
      ]}
    >
      <DatePickerPopoverInner>{children}</DatePickerPopoverInner>
    </PopperWrapper>
  );
};
