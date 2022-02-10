import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type TooltipSizes = 'normal' | 'small';

export type TooltipProps = MuiTooltipProps & {
  size?: TooltipSizes;
};
