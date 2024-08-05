import { type ReactElement, forwardRef } from 'react';

import { Navigation } from './styles';

export type SidebarNavProps = {
  menu: ReactElement;
};

export const SidebarNav = forwardRef<HTMLDivElement, SidebarNavProps>(
  (props, ref) => {
    const { menu } = props;

    return <Navigation ref={ref}>{menu}</Navigation>;
  },
);
