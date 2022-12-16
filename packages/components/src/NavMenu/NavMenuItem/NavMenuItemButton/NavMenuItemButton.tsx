import { ElementType, ReactElement, forwardRef } from 'react';

import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';

import {
  NavMenuItemButtonChevron,
  NavMenuItemButtonIcon,
  NavMenuItemButtonRoot,
  NavMenuItemButtonText,
} from './styles';

export type NavMenuItemButtonProps = {
  opened?: boolean;
  collapsedIn: boolean;
  selected?: boolean;
  text: string;
  icon: ReactElement;
  component?: ElementType;
  onClick?: () => void;
};

export const NavMenuItemButton = forwardRef<
  HTMLDivElement,
  NavMenuItemButtonProps
>((props, ref) => {
  const {
    collapsedIn,
    opened,
    text,
    icon,
    component = 'a',
    ...restProps
  } = props;

  return (
    <NavMenuItemButtonRoot ref={ref} component={component} {...restProps}>
      <Tooltip arrow title={!collapsedIn && text} placement="right">
        <NavMenuItemButtonIcon>{icon}</NavMenuItemButtonIcon>
      </Tooltip>
      <Collapse orientation="horizontal" in={collapsedIn}>
        <NavMenuItemButtonText primary={text} />
      </Collapse>
      {typeof opened === 'boolean' && (
        <NavMenuItemButtonChevron collapsedIn={collapsedIn} opened={opened} />
      )}
    </NavMenuItemButtonRoot>
  );
});
