import { forwardRef } from 'react';
import { ArrowROutlineLg } from '@astral/icons';

import { Typography } from '../Typography';
import { Grid } from '../Grid';

import { FlowButtonWrapper, TargetTextWrapper } from './styles';
import { FlowButtonProps } from './types';

export const FlowButton = forwardRef<HTMLButtonElement, FlowButtonProps>(
  (props, ref) => {
    const { children, targetText, ...restProps } = props;

    return (
      <FlowButtonWrapper
        ref={ref}
        {...restProps}
        size="medium"
        endIcon={<ArrowROutlineLg width={32} height={32} />}
      >
        <Grid container justifyContent="flex-start" justifyItems="flex-start">
          <TargetTextWrapper variant="h7">{targetText}</TargetTextWrapper>
          <Typography variant="h6">{children}</Typography>
        </Grid>
      </FlowButtonWrapper>
    );
  },
);

export default FlowButton;
