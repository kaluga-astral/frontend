import { forwardRef } from 'react';

import {
  InnerContainer,
  LeftContainer,
  LogoContainer,
  LogoStyle,
  StyledHeader,
} from './styled';
import { HeaderProps } from './types';

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { children, logoSrc, logoAlt, LogoLink, Widget } = props;

  return (
    <StyledHeader ref={ref}>
      <InnerContainer>
        <LeftContainer>
          {Widget && <Widget />}
          <LogoContainer withWidget={Boolean(Widget)}>
            <LogoLink Logo={<LogoStyle src={logoSrc} alt={logoAlt} />} />
          </LogoContainer>
        </LeftContainer>
        {children}
      </InnerContainer>
    </StyledHeader>
  );
});

export default Header;
