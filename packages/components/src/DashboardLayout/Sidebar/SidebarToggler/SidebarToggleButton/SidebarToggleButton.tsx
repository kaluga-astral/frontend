import { forwardRef } from 'react';
import { MenuOffOutlineMd, MenuOnOutlineMd } from '@astral/icons';

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
      startIcon={collapsedIn ? <MenuOffOutlineMd /> : <MenuOnOutlineMd />}
      variant="text"
      {...restProps}
    />
  );
});
