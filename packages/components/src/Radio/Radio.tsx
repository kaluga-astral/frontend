import { forwardRef } from 'react';
import { type RadioProps as MuiRadioProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledRadio } from './styles';
import { CheckedCircleIcon, DefaultIcon } from './Icon';

export type RadioProps = Omit<
  WithoutEmotionSpecific<MuiRadioProps>,
  'size' | 'color'
> & {
  /**
   * Флаг для применения error стилей.
   */
  isError?: boolean;
};

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      icon = <DefaultIcon />,
      checkedIcon = <CheckedCircleIcon />,
      ...props
    }: RadioProps,
    ref,
  ) => {
    return (
      <StyledRadio icon={icon} checkedIcon={checkedIcon} ref={ref} {...props} />
    );
  },
);
