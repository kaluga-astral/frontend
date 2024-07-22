import {
  type TooltipProps as MuiTooltipProps,
  Tooltip,
  tooltipClasses,
} from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

import { TooltipSizes } from './constants';
import { type TooltipSize } from './types';

type StyledTooltipProps = WithoutEmotionSpecific<MuiTooltipProps> & {
  size?: TooltipSize;
};

export const StyledTooltip = styled(
  ({ className, ...props }: StyledTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)`
  & .${tooltipClasses.tooltip} {
    margin: 0;

    font-size: ${({ size, theme }) =>
      size === TooltipSizes.SMALL
        ? theme.typography.small.fontSize
        : theme.typography.ui.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    line-height: ${({ size, theme }) =>
      size === TooltipSizes.SMALL
        ? theme.typography.small.lineHeight
        : theme.typography.ui.lineHeight};
    white-space: pre-line;

    background-color: ${({ theme }) => theme.palette.grey[900]};
    border-radius: ${({ theme }) => theme.shape.small};
  }

  & .${tooltipClasses.arrow} {
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    color: ${({ theme }) => theme.palette.grey[900]};
  }

  &&[data-popper-placement*='top'] .${tooltipClasses.tooltip} {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  &&[data-popper-placement*='bottom'] .${tooltipClasses.tooltip} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  &&[data-popper-placement*='left'] .${tooltipClasses.tooltip} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  &&[data-popper-placement*='right'] .${tooltipClasses.tooltip} {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;

export const ContentWrapper = styled.div`
  display: inherit;
`;
