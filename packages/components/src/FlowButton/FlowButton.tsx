import { forwardRef } from 'react';
import { ArrowROutlineLg } from '@astral/icons';

import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { type ButtonProps } from '../Button';

import { StyledButton, TargetTextWrapper } from './styles';

export type FlowButtonProps = Omit<
  ButtonProps,
  'loadingIndicator' | 'loadingPosition' | 'size' | 'variant'
> & {
  /**
   * Текст на кнопке, указывающей направление по флоу
   * */
  targetText?: string;
};

export const FlowButton = forwardRef<HTMLButtonElement, FlowButtonProps>(
  (props, ref) => {
    const { children, targetText, ...restProps } = props;

    return (
      <StyledButton
        ref={ref}
        endIcon={<ArrowROutlineLg width={32} height={32} />}
        {...restProps}
      >
        <LegacyGrid container justifyItems="start">
          {targetText && (
            <TargetTextWrapper variant="h7">{targetText}</TargetTextWrapper>
          )}
          <Typography variant="h6">{children}</Typography>
        </LegacyGrid>
      </StyledButton>
    );
  },
);

export default FlowButton;
