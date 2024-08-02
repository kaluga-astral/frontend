import { forwardRef } from 'react';

import { type MenuListType } from '../Profile';

type MenuListProps = {
  menuList: Array<MenuListType>;
  onExitClick?: () => {};
};

export const MenuList = forwardRef<HTMLDivElement, MenuListProps>(
  (props, ref) => {
    console.log(props);

    return <div ref={ref}></div>;
  },
);
