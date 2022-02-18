import { ElementType, FC } from 'react';

export type HeaderProps = {
  logoSrc?: string;
  logoLink?: string;
  Widget?: ElementType;
  LogoLinkComponent?: FC<LogoLinkComponentProps>;
  WidgetComponent?: ElementType;
  NavBarComponent?: ElementType;
};

export type LogoComponentProps = {
  logoSrc: string;
};

export type LogoLinkComponentProps = {
  logoLink: string;
  children?: React.ReactNode;
};
