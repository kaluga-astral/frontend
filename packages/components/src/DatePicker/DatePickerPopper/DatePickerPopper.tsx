import { PropsWithChildren } from 'react';
import { PopperProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';
import { Fade } from '../../Fade';

import { DatePickerPopoverInner, PopperWrapper } from './styles';

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

export type DatePickerProps = PropsWithChildren<
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

export const DatePickerPopper = ({
  children,
  offset = DEFAULT_OFFSET,
  ...props
}: DatePickerProps) => (
  <PopperWrapper
    placement="bottom-start"
    {...props}
    disablePortal
    modifiers={[
      {
        name: 'offset',
        options: {
          offset,
        },
      },
    ]}
    transition
  >
    {({ TransitionProps }) => (
      <Fade {...TransitionProps}>
        <DatePickerPopoverInner>{children}</DatePickerPopoverInner>
      </Fade>
    )}
  </PopperWrapper>
);
