import { forwardRef } from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';

import { WithoutEmotionSpecific } from '../types';

import { CheckboxStyled } from './styles';
import { CheckedIcon, DefaultIcon, IndeterminateIcon } from './icons';

export type CheckboxProps = Omit<
  WithoutEmotionSpecific<MuiCheckboxProps>,
  'size' | 'color'
  /**
   * Флаг для активации error стилей для checkbox.
   */
> & { isError?: boolean };

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
      <CheckboxStyled
        ref={ref}
        icon={icon}
        checkedIcon={checkedIcon}
        indeterminateIcon={indeterminateIcon}
        {...props}
      />
    );
  },
);
