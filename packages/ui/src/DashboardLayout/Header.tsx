import React, { forwardRef } from 'react';

import { InnerContainer, LeftPartContainer, StyledHeader } from './styled';
import { HeaderProps, LogoComponentProps } from './types';

const LogoComponentDefault = ({ src, className }: LogoComponentProps) => (
  <img src={src} className={className} />
);

export const Header: React.FC<HeaderProps> = forwardRef<any, HeaderProps>(
  (
    {
      children,
      logoSrc,
      LogoComponent = LogoComponentDefault,
      WidgetComponent,
      NavBarComponent,
    },
    ref
  ) => {
    return (
      <StyledHeader ref={ref}>
        <InnerContainer>
          <LeftPartContainer withWidget={!!WidgetComponent}>
            {WidgetComponent && <WidgetComponent />}
            {(logoSrc || LogoComponent) && (
              <LogoComponent className="logo" src={logoSrc} />
            )}
            {NavBarComponent && <NavBarComponent />}
          </LeftPartContainer>
          {children}
        </InnerContainer>
      </StyledHeader>
    );
  }
);

export default Header;
