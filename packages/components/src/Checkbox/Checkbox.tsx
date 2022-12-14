import { forwardRef } from 'react';

import { CheckboxProps } from './types';
import { StyledCheckbox } from './styled';
import { CheckedIcon, DefaultIcon, IndeterminateIcon } from './icons';

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
