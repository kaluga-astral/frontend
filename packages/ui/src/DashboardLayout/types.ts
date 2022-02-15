import React from 'react';

export type LogoComponentProps = {
  className: string;
  src?: string;
};

export type HeaderProps = {
  logoSrc?: string;
  Widget?: React.ElementType;
  LogoComponent?: React.ElementType<LogoComponentProps>;
  WidgetComponent?: React.ElementType;
  NavBarComponent?: React.ElementType;
};
