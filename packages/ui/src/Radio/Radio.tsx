import React from 'react';

import { RadioProps } from './types';
import { StyledRadio } from './styled';
import { CheckedCircleIcon, DefaultIcon } from './Icon';

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
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
