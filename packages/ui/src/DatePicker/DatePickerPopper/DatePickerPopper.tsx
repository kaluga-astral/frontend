import { PropsWithChildren, SyntheticEvent } from 'react';
import { PopperProps } from '@mui/material';

import { useEscapeClickEffect } from '../../hooks/useEscapeClickEffect';
import { CloseEventReason, WithoutEmotionSpecific } from '../../types';

import { DatePickerPopoverInner, PopperWrapper } from './styles';

/**
 * @description тупл для соответсвтия попперовскому способу задания отступов, 1е число по X, второе по Y
 */
export type OffsetTuple = [number, number];

const DEFAULT_OFFSET: OffsetTuple = [0, 8];

export type DatePickerProps = PropsWithChildren<
  Omit<WithoutEmotionSpecific<PopperProps>, 'children'>
> & {
  onClose?: (
    _?: SyntheticEvent<Element, Event> | Event,
    reason?: CloseEventReason,
  ) => void;
  offset?: OffsetTuple;
};

export const DatePickerPopper = ({
  children,
  onClose,
  offset = DEFAULT_OFFSET,
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
            offset,
          },
        },
      ]}
    >
      <DatePickerPopoverInner>{children}</DatePickerPopoverInner>
    </PopperWrapper>
  );
};
