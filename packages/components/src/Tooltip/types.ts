import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip/Tooltip';

import { WithoutEmotionSpecific } from '../types';

import { TooltipSizes } from './constants';

export type TooltipSize = `${TooltipSizes}`;

export type TooltipProps = WithoutEmotionSpecific<MuiTooltipProps> & {
  /**
   * Размер тултипа
   */
  size?: TooltipSize;
  /**
   * При значении false оборачивает компонент в div. По-умолчанию true
   * Это позволяет показывать тултипы на задизейбленных компонентах
   * @example <Tooltip withoutContainer={false} ...><Button disabled></Tooltip>
   */
  withoutContainer?: boolean;
};
