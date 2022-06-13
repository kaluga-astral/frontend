import { forwardRef, useCallback, useState } from 'react';

import { NavMenu, NavMenuProps } from '../../NavMenu';

import { SidebarRoot } from './styled';
import { SidebarNav } from './SidebarNav';
import { SidebarToggler } from './SidebarToggler';

export type SidebarProps = {
  menu: {
    items: NavMenuProps['items'];
  };
};

export const Sidebar = forwardRef<HTMLBaseElement, SidebarProps>(
  (props, ref) => {
    const { menu } = props;

    const [collapsedIn, setCollapsedIn] = useState(true);

    const handleTogglerChange = useCallback(() => {
      setCollapsedIn((prevValue) => !prevValue);
    }, []);

    return (
      <SidebarRoot ref={ref} collapsedIn={collapsedIn}>
        <SidebarNav
          menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
        />
        <SidebarToggler
          collapsedIn={collapsedIn}
          onChange={handleTogglerChange}
        />
      </SidebarRoot>
    );
  }
);
