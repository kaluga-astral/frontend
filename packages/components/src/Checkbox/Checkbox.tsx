import { forwardRef } from 'react';

import { CheckboxStyled } from './styles';
import { CheckedIcon, DefaultIcon, IndeterminateIcon } from './icons';
import { CheckboxProps } from './types';

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
