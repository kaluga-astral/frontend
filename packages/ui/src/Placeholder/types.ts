import { ReactNode } from 'react';

export type PlaceholderProps = {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  subtitle?: ReactNode;
  Footer?: ReactNode;
  children?: ReactNode;
};
