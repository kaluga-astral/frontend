import { forwardRef } from 'react';
import { MenuOffOutlineMd, MenuOnOutlineMd } from '@astral/icons';

import { Tooltip } from '../../../../Tooltip';
import { ButtonProps } from '../../../../Button';

import {
  SidebarTogglerButtonRoot,
  SidebarTogglerIconWrapper,
  SidebarTogglerOffIconWrapper,
  SidebarTogglerOnIconWrapper,
} from './styles';

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
        <>
          <SidebarTogglerOffIconWrapper isOpen={collapsedIn}>
            <SidebarTogglerIconWrapper>
              <MenuOffOutlineMd />
            </SidebarTogglerIconWrapper>
          </SidebarTogglerOffIconWrapper>
          <SidebarTogglerOnIconWrapper isOpen={collapsedIn}>
            <Tooltip title="Раскрыть меню" arrow placement="right">
              <SidebarTogglerIconWrapper>
                <MenuOnOutlineMd />
              </SidebarTogglerIconWrapper>
            </Tooltip>
          </SidebarTogglerOnIconWrapper>
        </>
      }
      variant="text"
      {...restProps}
    />
  );
});
