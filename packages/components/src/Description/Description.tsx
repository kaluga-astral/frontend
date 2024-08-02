import { type ReactNode } from 'react';

import { Name } from './Name';
import { Value } from './Value';
import { Wrapper } from './styles';
import { DescriptionContextProvider } from './DescriptionContext';
import { DESCRIPTION_ROOT_CLASSNAME } from './constants';
import { useLogic } from './useLogic';

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
   * @default ':'
   */
  separator?: string;

  /**
   * Определяет тип корневого HTML-элемента
   */
  component?: 'div' | 'dl';

  /**
   * Определяет перенос строк
   * @default 'default'
   */
  direction?: 'default' | 'column' | 'row';
};

export const Description = (props: DescriptionProps) => {
  const { descriptionContextProviderProps, direction } = useLogic(props);

  const {
    justifyContent = 'start',
    component = 'dl',
    children,
    leader = false,
  } = props;

  return (
    <DescriptionContextProvider
      leader={leader}
      {...descriptionContextProviderProps}
    >
      <Wrapper
        $justifyContent={justifyContent}
        className={DESCRIPTION_ROOT_CLASSNAME}
        $direction={direction}
        as={component}
      >
        {children}
      </Wrapper>
    </DescriptionContextProvider>
  );
};

Description.Name = Name;
Description.Value = Value;
