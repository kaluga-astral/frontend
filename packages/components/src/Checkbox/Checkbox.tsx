import { forwardRef } from 'react';
import { type CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';

import { type WithoutEmotionSpecific } from '../types';

import { StyledCheckbox } from './styles';
import { CheckedIcon, DefaultIcon, IndeterminateIcon } from './icons';

export type CheckboxProps = Omit<
  WithoutEmotionSpecific<MuiCheckboxProps>,
  'size' | 'color'
> & {
  /**
   * Флаг для активации error стилей.
   */
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      icon = <DefaultIcon />,
      checkedIcon = <CheckedIcon />,
      indeterminateIcon = <IndeterminateIcon />,
      ...props
    }: CheckboxProps,
    ref,
  ) => {
    return (
      <StyledCheckbox
        ref={ref}
        icon={icon}
        checkedIcon={checkedIcon}
        indeterminateIcon={indeterminateIcon}
        {...props}
      />
    );
  },
);
