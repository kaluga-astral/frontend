import { type ElementType, type ReactElement, forwardRef } from 'react';

import { useViewportType } from '../../../hooks/useViewportType';
import { type ListItemTextProps } from '../../../ListItemText';
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

  const { isMobile } = useViewportType();

  const isGroupTitleItem = typeof opened === 'boolean';

  const navMenuItemButtonTextProps: ListItemTextProps = {
    [isMobile && isGroupTitleItem ? 'secondary' : 'primary']: text,
    secondaryTypographyProps: {
      variant: isGroupTitleItem ? 'caption' : 'body1',
    },
  };

  return (
    <NavMenuItemButtonRoot
      isGroupTitleItem={isGroupTitleItem}
      ref={ref}
      component={component}
      {...restProps}
    >
      {!isMobile && (
        <Tooltip arrow title={!collapsedIn && text} placement="right">
          <NavMenuItemButtonIcon>{icon}</NavMenuItemButtonIcon>
        </Tooltip>
      )}

      <Collapse orientation="horizontal" in={collapsedIn}>
        <NavMenuItemButtonText {...navMenuItemButtonTextProps} />
      </Collapse>

      {isGroupTitleItem && (
        <NavMenuItemButtonChevron collapsedIn={collapsedIn} opened={opened} />
      )}
    </NavMenuItemButtonRoot>
  );
});
