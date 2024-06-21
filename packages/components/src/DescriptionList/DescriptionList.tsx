import { type ReactNode } from 'react';

import { Description } from '../Description';
import { type TypographyProps } from '../Typography';
import { DEFAULT_SEPARATOR } from '../Description/constants';

import { StyledDescriptionName, Wrapper } from './styles';

export type DescriptionOptions = Pick<TypographyProps, 'color'> & {
  maxWidth?: string;
  canCopy?: boolean;
  copyPosition?: 'left' | 'right';
};

export type DescriptionItem = {
  name: ReactNode;
  value: ReactNode;
  options?: DescriptionOptions;
};

export type DescriptionListProps = {
  /**
   * Элементы Description.Name и Description.Value, объект options
   */
  items: DescriptionItem[];
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

export const DescriptionList = ({
  items,
  justifyContent = 'start',
  leader = false,
  separator = DEFAULT_SEPARATOR,
}: DescriptionListProps) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Description
          key={index}
          justifyContent={justifyContent}
          leader={leader}
          separator={separator}
          component="div"
        >
          <StyledDescriptionName $maxWidth={item.options?.maxWidth}>
            {item.name}
          </StyledDescriptionName>
          <Description.Value
            canCopy={item.options?.canCopy}
            color={item.options?.color}
            copyPosition={item.options?.copyPosition}
          >
            {item.value}
          </Description.Value>
        </Description>
      ))}
    </Wrapper>
  );
};
