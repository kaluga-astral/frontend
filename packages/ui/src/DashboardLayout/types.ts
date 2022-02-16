import React from 'react';

export type LogoComponentProps = {
  logoSrc: string;
};

export type LogoLinkComponentProps = {
  logoLink: string;
  children?: React.ReactNode;
};

export type HeaderProps = {
  logoSrc?: string;
  logoLink?: string;
  Widget?: React.ElementType;
  LogoLinkComponent?: React.FC<LogoLinkComponentProps>;
  WidgetComponent?: React.ElementType;
  NavBarComponent?: React.ElementType;
};
