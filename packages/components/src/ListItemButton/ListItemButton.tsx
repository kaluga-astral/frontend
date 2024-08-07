import { type ElementType, forwardRef } from 'react';
import {
  ListItemButton as MuiListItemButton,
  type ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { Tooltip, type TooltipProps } from '../Tooltip';

export type ListItemButtonProps = Omit<
  WithoutEmotionSpecific<MuiListItemButtonProps>,
  'disableRipple'
> & {
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * Текст тултипа при заблокированном состоянии элемента меню
   */
  disabledReason?: string;
  /**
   * Текст тултипа при наведении на элемент меню
   */
  note?: string;
  component?: ElementType;
  /**
   * withoutContainer необходим для обратной совместимости и рендерит компонент без тега li
   */
  withoutContainer?: boolean;
};

export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  (props, ref) => {
    const {
      disabledReason,
      disabled,
      tooltipPlacement,
      note,
      withoutContainer = false,
    } = props;

    const renderListItemButton = () => {
      return (
        <Tooltip
          title={disabled ? disabledReason : note}
          placement={tooltipPlacement}
          withoutContainer={!disabled}
        >
          <MuiListItemButton
            ref={ref}
            component="div"
            {...props}
            disableRipple
          />
        </Tooltip>
      );
    };

    if (withoutContainer) {
      return renderListItemButton();
    }

    return <li>{renderListItemButton()}</li>;
  },
);
