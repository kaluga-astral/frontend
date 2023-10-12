import { forwardRef } from 'react';

import { StyledRadio } from './styles';
import { CheckedCircleIcon, DefaultIcon } from './Icon';
import { RadioProps } from './types';

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

export default Radio;
