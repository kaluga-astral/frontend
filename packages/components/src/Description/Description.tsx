import { ReactNode } from 'react';

import { Name } from './Name';
import { Value } from './Value';
import { DescriptionWrapper } from './styles';

export type DescriptionProps = {
  /**
   * Элементы Description.Name и Description.Value
   */
  children: ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
};

Description.Name = Name;
Description.Value = Value;
