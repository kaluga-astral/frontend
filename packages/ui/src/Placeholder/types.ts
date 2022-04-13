import { ReactNode } from 'react';

export type PlaceholderProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description?: string | ReactNode;
  Actions?: ReactNode;
};
