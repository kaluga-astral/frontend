import { forwardRef } from 'react';
import { MenuOffOutlineMd, MenuOnOutlineMd } from '@astral/icons';

import { Tooltip } from '../../../../Tooltip';
import { ButtonProps } from '../../../../Button';

import { SidebarTogglerButtonRoot } from './styles';

export type SidebarTogglerButtonProps = ButtonProps & {
  collapsedIn: boolean;
};

export const SidebarTogglerButton = forwardRef<
  HTMLButtonElement,
  SidebarTogglerButtonProps
>((props, ref) => {
  const { collapsedIn, ...restProps } = props;

  return (
    <SidebarTogglerButtonRoot
      ref={ref}
      startIcon={
        collapsedIn ? (
          <MenuOffOutlineMd />
        ) : (
          <Tooltip title="Раскрыть меню" arrow placement="right">
            <div>
              <MenuOnOutlineMd />
            </div>
          </Tooltip>
        )
      }
      variant="text"
      {...restProps}
    />
  );
});
