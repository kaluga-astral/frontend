import { forwardRef } from 'react';
import {
  CrossOutlineMd,
  MenuOffOutlineMd,
  MenuOnOutlineMd,
} from '@astral/icons';

import { useViewportType } from '../../../hooks/useViewportType';
import { Tooltip } from '../../../Tooltip';
import { type ButtonProps } from '../../../Button';

import { SidebarTogglerButtonRoot, SidebarTogglerIconWrapper } from './styles';

export type SidebarTogglerButtonProps = ButtonProps & {
  collapsedIn: boolean;
};

export const SidebarTogglerButton = forwardRef<
  HTMLButtonElement,
  SidebarTogglerButtonProps
>((props, ref) => {
  const { collapsedIn, ...restProps } = props;

  const { isMobile } = useViewportType();

  const MenuCloseIcon = isMobile ? CrossOutlineMd : MenuOffOutlineMd;

  return (
    <SidebarTogglerButtonRoot
      ref={ref}
      startIcon={
        collapsedIn ? (
          <MenuCloseIcon />
        ) : (
          <Tooltip title="Раскрыть меню" arrow placement="right">
            <SidebarTogglerIconWrapper>
              <MenuOnOutlineMd />
            </SidebarTogglerIconWrapper>
          </Tooltip>
        )
      }
      variant="text"
      {...restProps}
    />
  );
});
