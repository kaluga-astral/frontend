import { forwardRef } from 'react';
import { MenuOffOutlineMd, MenuOnOutlineMd } from '@astral/icons';

import { Tooltip } from '../../../../Tooltip';
import { ButtonProps } from '../../../../Button';

import { SidebarTogglerButtonRoot, SidebarTogglerIconWrapper } from './styles';

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
