import { ReactNode } from 'react';

import { Name } from './Name';
import { Value } from './Value';
import { DescriptionWrapper } from './styles';
import { DescriptionProvider } from './DescriptionProvider';

export type DescriptionProps = {
  /**
   * Элементы Description.Name и Description.Value
   */
  children: ReactNode;

  /**
   * Позиционирует элементы либо по разным краям, либо по левому краю
   */
  justifyContent?: 'space-between' | 'start';

  /**
   * Добавляет dashed разделитель, заполняющего свободное пространство между Name Value
   */
  leader?: boolean;

  /**
   * Определяет разделитель между Name Value
   */
  separator?: string;
};

export const Description = ({
  children,
  justifyContent = 'start',
  leader = false,
  separator = ':',
}: DescriptionProps) => {
  return (
    <DescriptionProvider leader={leader} separator={separator}>
      <DescriptionWrapper justifyContent={justifyContent}>
        {children}
      </DescriptionWrapper>
    </DescriptionProvider>
  );
};

Description.Name = Name;
Description.Value = Value;
