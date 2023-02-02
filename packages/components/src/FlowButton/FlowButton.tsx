import { forwardRef } from 'react';
import { ArrowROutlineLg } from '@astral/icons';

import { Typography } from '../Typography';

import { FlowButtonContentWrapper, FlowButtonWrapper } from './styles';
import { FlowButtonProps } from './types';

export const FlowButton = forwardRef<HTMLButtonElement, FlowButtonProps>(
  (props, ref) => {
    const { children, smallText, ...restProps } = props;

    return (
      <FlowButtonWrapper
        ref={ref}
        {...restProps}
        size="medium"
        endIcon={<ArrowROutlineLg width={32} height={32} />}
      >
        <FlowButtonContentWrapper>
          <Typography variant="h7" color="white">
            {smallText}
          </Typography>
          <Typography marginTop={1} variant="h6" color="white">
            {children}
          </Typography>
        </FlowButtonContentWrapper>
      </FlowButtonWrapper>
    );
  },
);

export default FlowButton;
