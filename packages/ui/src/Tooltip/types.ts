import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type TooltipSizes = 'medium' | 'small';

export type TooltipProps = MuiTooltipProps & {
  size?: TooltipSizes;
};
