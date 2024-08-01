import { type ReactNode } from 'react';

import { useViewportType } from '../hooks/useViewportType';

import { Name } from './Name';
import { Value } from './Value';
import { Wrapper } from './styles';
import { DescriptionContextProvider } from './DescriptionContext';
import {
  DEFAULT_SEPARATOR,
  DESCRIPTION_ROOT_CLASSNAME,
  WITHOUT_SEPARATOR,
} from './constants';

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
   * Определяет перенос строк на мобильном устройстве
   * @default 'column'
   */
  mobileDirection?: 'column' | 'row';
};

export const Description = ({
  children,
  justifyContent = 'start',
  leader = false,
  separator = DEFAULT_SEPARATOR,
  component = 'dl',
  mobileDirection = 'column',
}: DescriptionProps) => {
  const { isMobile } = useViewportType();
  const hasSeparator = isMobile && mobileDirection === 'column';

  return (
    <DescriptionContextProvider
      leader={leader}
      separator={hasSeparator ? WITHOUT_SEPARATOR : separator}
    >
      <Wrapper
        $justifyContent={justifyContent}
        className={DESCRIPTION_ROOT_CLASSNAME}
        $mobileDirection={mobileDirection}
        as={component}
      >
        {children}
      </Wrapper>
    </DescriptionContextProvider>
  );
};

Description.Name = Name;
Description.Value = Value;
