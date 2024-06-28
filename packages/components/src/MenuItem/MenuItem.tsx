import {
  MenuItem as MuiMenuItem,
  type MenuItemProps as MuiMenuItemProps,
} from '@mui/material';
import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
} from 'react';

import { type WithoutEmotionSpecific } from '../types';
import { Tooltip, type TooltipProps } from '../Tooltip';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

export type MenuItemProps<TComponent extends ElementType = ElementType> =
  WithoutEmotionSpecific<MuiMenuItemProps> & {
    /**
     * Текст тултипа при заблокированном состоянии элемента меню
     */
    disabledReason?: string;
    tooltipPlacement?: TooltipProps['placement'];
    /**
     * Тип элемента
     */
    component?: TComponent;
    /**
     * Ссылка, если в component передан тег a.
     */
    href?: string;
  } & ComponentPropsWithRef<ElementType extends TComponent ? 'li' : TComponent>;

const InnerMenuItem = <TComponent extends ElementType>(
  props: MenuItemProps<TComponent>,
  ref: ForwardedRef<HTMLLIElement>,
) => {
  const {
    disabledReason,
    disabled,
    component = 'div',
    title,
    tooltipPlacement,
    ...rest
  } = props;

  return (
    <li>
      <Tooltip
        key={title}
        title={disabled && disabledReason}
        placement={tooltipPlacement}
        withoutContainer={!disabled}
      >
        <MuiMenuItem
          {...rest}
          disabled={disabled}
          title={title}
          ref={ref}
          component={component}
        />
      </Tooltip>
    </li>
  );
};

export const MenuItem = forwardRefWithGeneric(InnerMenuItem);
