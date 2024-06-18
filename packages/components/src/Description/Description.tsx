import { type ReactNode } from 'react';

import { Name } from './Name';
import { Value } from './Value';
import { Wrapper } from './styles';
import { DescriptionContextProvider } from './DescriptionContext';
import { DEFAULT_SEPARATOR } from './constants';

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
   * @default ':'
   * Определяет разделитель между Name Value
   */
  separator?: string;

  /**
   * Определяет тип HTML-элемента Description
   */
  component?: 'div' | 'dl';
};

export const Description = ({
  children,
  justifyContent = 'start',
  leader = false,
  separator = DEFAULT_SEPARATOR,
  component = 'dl',
}: DescriptionProps) => {
  return (
    <DescriptionContextProvider leader={leader} separator={separator}>
      <Wrapper $justifyContent={justifyContent} as={component}>
        {children}
      </Wrapper>
    </DescriptionContextProvider>
  );
};

Description.Name = Name;
Description.Value = Value;
