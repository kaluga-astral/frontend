import { ElementType, FC, ReactNode } from 'react';

export type HeaderProps = {
  logoSrc: string;
  logoAlt: string;
  LogoLink: FC<LogoLinkProps>;
  Widget?: ElementType;
};

export type LogoLinkProps = {
  Logo: ReactNode;
};
