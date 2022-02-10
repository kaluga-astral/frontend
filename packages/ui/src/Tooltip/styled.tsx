import { Tooltip } from '@mui/material';

import { styled } from '../styles';

import { TooltipProps } from './types';

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  && .MuiTooltip-tooltip {
    margin: 0;
    background-color: ${({ theme }) => theme.palette.grey[900]};
    border-radius: ${({ theme }) => theme.shape.small};
    font-size: ${({ size, theme }) =>
      size === 'small'
        ? theme.typography.pxToRem(12)
        : theme.typography.pxToRem(14)};
    line-height: ${({ size, theme }) =>
      size === 'small'
        ? theme.typography.pxToRem(16)
        : theme.typography.pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }

  & .MuiTooltip-arrow {
    color: ${({ theme }) => theme.palette.grey[900]};
  }

  &[data-popper-placement*='top'] .MuiTooltip-tooltip {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  &[data-popper-placement*='bottom'] .MuiTooltip-tooltip {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  &[data-popper-placement*='left'] .MuiTooltip-tooltip {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  &[data-popper-placement*='right'] .MuiTooltip-tooltip {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;
