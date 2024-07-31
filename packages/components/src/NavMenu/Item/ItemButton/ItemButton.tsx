import {
  type ElementType,
  type ReactElement,
  type ReactNode,
  forwardRef,
} from 'react';

import { useViewportType } from '../../../hooks/useViewportType';
import { type ListItemTextProps } from '../../../ListItemText';
import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';

import {
  NavMenuItemButtonChevron,
  NavMenuItemButtonIcon,
  NavMenuItemButtonText,
  StyledListItemButton,
} from './styles';

export type NavMenuItemButtonProps = {
  opened?: boolean;
  collapsedIn: boolean;
  selected?: boolean;
  text: ReactNode;
  icon: ReactElement;
  component?: ElementType;
  onClick?: () => void;
};

export const ItemButton = forwardRef<HTMLDivElement, NavMenuItemButtonProps>(
  (props, ref) => {
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
      <StyledListItemButton
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
      </StyledListItemButton>
    );
  },
);
