import { ElementType, FC, ReactNode } from 'react';

export type HeaderProps = {
  logoSrc: string;
  logoAlt: string;
  LogoLinkComponent: FC<LogoLinkComponentProps>;
  WidgetComponent?: ElementType;
};

export type LogoLinkComponentProps = {
  Logo: ReactNode;
};
