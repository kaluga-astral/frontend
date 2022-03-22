import { ReactNode } from 'react';

export type PlaceholderProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text?: string | ReactNode;
  Actions?: ReactNode;
};
