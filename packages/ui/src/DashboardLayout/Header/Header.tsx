import { forwardRef } from 'react';

import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile/types';

import { HeaderRoot } from './styled';
import { HeaderNav } from './HeaderNav';
import { HeaderNavProps } from './HeaderNav';

export type HeaderProps = {
  nav: HeaderNavProps;
  profile: ProfileProps;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { nav, profile } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderNav {...nav} />
      <Profile {...profile} />
    </HeaderRoot>
  );
});

export default Header;
