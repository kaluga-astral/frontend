import { Tooltip } from '@mui/material';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip/Tooltip';

import { styled } from '../styles';
import { WithoutEmotionSpecific } from '../types';

import { TooltipSizes } from './constants';
import { TooltipSize } from './types';

type StyledTooltipProps = WithoutEmotionSpecific<MuiTooltipProps> & {
  size?: TooltipSize;
};

export const StyledTooltip = styled(
  ({ className, ...props }: StyledTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)`
  & .MuiTooltip-tooltip {
    margin: 0;

    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    font-size: ${({ size, theme }) =>
      size === TooltipSizes.SMALL
        ? theme.typography.small.fontSize
        : theme.typography.ui.fontSize};
    line-height: ${({ size, theme }) =>
      size === TooltipSizes.SMALL
        ? theme.typography.small.lineHeight
        : theme.typography.ui.lineHeight};

    background-color: ${({ theme }) => theme.palette.grey[900]};
    border-radius: ${({ theme }) => theme.shape.small};
  }

  & .MuiTooltip-arrow {
    color: ${({ theme }) => theme.palette.grey[900]};
  }

  &&[data-popper-placement*='top'] .MuiTooltip-tooltip {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  &&[data-popper-placement*='bottom'] .MuiTooltip-tooltip {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  &&[data-popper-placement*='left'] .MuiTooltip-tooltip {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  &&[data-popper-placement*='right'] .MuiTooltip-tooltip {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;

export const TooltipContentWrapper = styled.div`
  display: inherit;
`;
