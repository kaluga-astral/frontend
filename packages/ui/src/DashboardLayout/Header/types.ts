import { ElementType, FC, ReactNode } from 'react';

export type HeaderProps = {
  logoSrc: string;
  logoAlt: string;
  LogoLink: FC<LogoLinkProps>;
  WidgetComponent?: ElementType;
};

export type LogoLinkProps = {
  Logo: ReactNode;
};
