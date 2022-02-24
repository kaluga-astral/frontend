import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

import { TooltipSizes } from './constants';

export type TooltipSize = `${TooltipSizes}`;

export type TooltipProps = MuiTooltipProps & {
  size?: TooltipSize;
};
