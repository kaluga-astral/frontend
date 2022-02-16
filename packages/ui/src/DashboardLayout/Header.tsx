import React, { forwardRef } from 'react';

import {
  InnerContainer,
  LeftPartContainer,
  LogoContainer,
  LogoStyle,
  StyledHeader,
} from './styled';
import {
  HeaderProps,
  LogoComponentProps,
  LogoLinkComponentProps,
} from './types';

const LogoLinkComponentDefault = ({
  children,
  logoLink,
}: LogoLinkComponentProps) => <a href={logoLink}>{children}</a>;

const LogoComponentDefault: React.FC<LogoComponentProps> = ({
  logoSrc,
}: LogoComponentProps) => <LogoStyle src={logoSrc} />;

export const Header: React.FC<HeaderProps> = forwardRef(
  (
    {
      children,
      logoSrc,
      logoLink = '/',
      LogoLinkComponent,
      WidgetComponent,
      NavBarComponent,
    },
    ref
  ) => {
    const LogoComponent = () => {
      if (logoSrc) {
        const Logo = <LogoComponentDefault logoSrc={logoSrc} />;
        if ((LogoLinkComponent || logoLink) && logoLink !== null) {
          const LinkComponent = LogoLinkComponent || LogoLinkComponentDefault;
          return <LinkComponent logoLink={logoLink}>{Logo}</LinkComponent>;
        } else return Logo;
      } else if (LogoLinkComponent) {
        return <LogoLinkComponent logoLink={logoLink} />;
      }
      return null;
    };

    return (
      <StyledHeader ref={ref}>
        <InnerContainer>
          <LeftPartContainer>
            {WidgetComponent && <WidgetComponent />}
            <LogoContainer withWidget={!!WidgetComponent}>
              <LogoComponent />
            </LogoContainer>
            {NavBarComponent && <NavBarComponent />}
          </LeftPartContainer>
          {children}
        </InnerContainer>
      </StyledHeader>
    );
  }
);

export default Header;
