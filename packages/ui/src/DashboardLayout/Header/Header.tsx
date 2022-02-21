import { FC, forwardRef } from 'react';

import {
  InnerContainer,
  LeftContainer,
  LogoContainer,
  LogoStyle,
  StyledHeader,
} from './styled';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, logoSrc, logoAlt, LogoLink, WidgetComponent }, ref) => {
    return (
      <StyledHeader ref={ref}>
        <InnerContainer>
          <LeftContainer>
            {WidgetComponent && <WidgetComponent />}
            <LogoContainer withWidget={!!WidgetComponent}>
              <LogoLink Logo={<LogoStyle src={logoSrc} alt={logoAlt} />} />
            </LogoContainer>
          </LeftContainer>
          {children}
        </InnerContainer>
      </StyledHeader>
    );
  }
);

export default Header;
