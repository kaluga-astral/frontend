import { TooltipProps } from './types';
import { StyledTooltip } from './styled';

export const Tooltip = ({
  children,
  placement = 'top',
  size = 'normal',
  ...props
}: TooltipProps) => {
  return (
    <StyledTooltip size={size} placement={placement} {...props}>
      {children}
    </StyledTooltip>
  );
};
