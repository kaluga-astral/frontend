import { forwardRef } from 'react';

import { Profile } from '../../Profile';

import { Nav } from './Nav';
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
