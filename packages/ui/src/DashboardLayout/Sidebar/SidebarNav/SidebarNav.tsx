import { ReactElement, forwardRef } from 'react';

export type SidebarNavProps = {
  menu: ReactElement;
};

export const SidebarNav = forwardRef<HTMLDivElement, SidebarNavProps>(
  (props, ref) => {
    const { menu } = props;

    return <nav ref={ref}>{menu}</nav>;
  },
);
