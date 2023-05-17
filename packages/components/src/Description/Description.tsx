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
   * пропс justifyContent, который позиционирует элементы либо по разным краям, либо по левому краю
   */
  justifyContent?: 'space-between' | 'start';

  /**
   * флаг отвечающий за добавление dashed разделителя, заполняющего свободное пространство между Name Value
   */
  leader?: boolean;
};

export const Description = ({
  children,
  justifyContent,
  leader = false,
}: DescriptionProps) => {
  return (
    <DescriptionProvider leader={leader}>
      <DescriptionWrapper justifyContent={justifyContent}>
        {children}
      </DescriptionWrapper>
    </DescriptionProvider>
  );
};

Description.Name = Name;
Description.Value = Value;
