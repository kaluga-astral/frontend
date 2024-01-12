import { type PropsWithChildren } from 'react';
import { type PopperProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

import { DatePickerPopoverInner, PopoverWrapper } from './styles';

/**
 * @description тупл для соответсвтия попперовскому способу задания отступов, 1е число по X, второе по Y
 */
export type OffsetTuple = [number, number];

const DEFAULT_OFFSET: OffsetTuple = [
  0, /**
   * @description минус 12, потому что мы используем в качестве рефа грид/див,
   * в котором создают лишние отступы плейсхолдеры для ошибок валидации
   */ -12,
];

export type DatePickerPopoverProps = PropsWithChildren<
  Omit<
    WithoutEmotionSpecific<PopperProps>,
    'children' | 'disablePortal' | 'transition' | 'modifiers'
  >
> & {
  /**
   * @description оффсет появления поппера от якоря
   * @default [0, -12]
   */
  offset?: OffsetTuple;
};

export const DatePickerPopover = ({
  children,
  offset = DEFAULT_OFFSET,
  ...props
}: DatePickerPopoverProps) => (
  <PopoverWrapper
    placement="bottom-start"
    {...props}
    modifiers={[
      {
        name: 'offset',
        options: {
          offset,
        },
      },
    ]}
  >
    <DatePickerPopoverInner>{children}</DatePickerPopoverInner>
  </PopoverWrapper>
);
