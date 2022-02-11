import { TooltipProps } from './types';
import { StyledTooltip } from './styled';

export const Tooltip = ({
  children,
  placement = 'top',
  size = 'medium',
  ...props
}: TooltipProps) => {
  return (
    <StyledTooltip size={size} placement={placement} {...props}>
      {children}
    </StyledTooltip>
  );
};
