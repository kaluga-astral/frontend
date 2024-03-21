import { type PropsWithChildren } from 'react';

import { Popover, type PopoverProps } from '../../Popover';
import { type WithoutEmotionSpecific } from '../../types';

import { InnerContainer } from './styles';

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
    WithoutEmotionSpecific<PopoverProps>,
    'children' | 'disablePortal' | 'transition'
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
  <Popover
    elevation={1}
    disableAutoFocus={true}
    disableEnforceFocus={true}
    disableRestoreFocus={true}
    {...props}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <InnerContainer>{children}</InnerContainer>
  </Popover>
);
