import { ReactElement, forwardRef } from 'react';

import { Collapse } from '../../Collapse';
import { Tooltip } from '../../Tooltip';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';

import { NavMenuItemButtonRoot } from './styled';

export type NavMenuItemButtonProps = {
  collapsedIn: boolean;
  selected?: boolean;
  text: string;
  icon: ReactElement;
};

export const NavMenuItemButton = forwardRef<
  HTMLDivElement,
  NavMenuItemButtonProps
>((props, ref) => {
  const { collapsedIn, selected, text, icon } = props;

  return (
    <NavMenuItemButtonRoot ref={ref} selected={selected}>
      <Tooltip arrow title={!collapsedIn && text} placement="right">
        <ListItemIcon sx={{ minWidth: 'unset' }}>{icon}</ListItemIcon>
      </Tooltip>
      <Collapse orientation="horizontal" in={collapsedIn}>
        <ListItemText sx={{ ml: 4 }} primary={text} />
      </Collapse>
    </NavMenuItemButtonRoot>
  );
});
