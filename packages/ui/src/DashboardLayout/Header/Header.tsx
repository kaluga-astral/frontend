import { forwardRef } from 'react';

import { Nav } from './Nav';
import { Profile } from './Profile';
import { Root } from './styled';
import { HeaderProps } from './types';

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { nav, profile } = props;

  return (
    <Root ref={ref}>
      <Nav {...nav} />
      <Profile {...profile} />
    </Root>
  );
});

export default Header;
