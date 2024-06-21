import { type ReactNode } from 'react';

import { Description, type DescriptionProps } from '../Description';
import { type ValueProps } from '../Description/Value';

import { StyledDescriptionName, Wrapper } from './styles';

export type DescriptionOptions = Pick<
  ValueProps,
  'canCopy' | 'copyPosition' | 'color'
> & {
  nameMaxWidth?: string;
};

export type DescriptionListItem = {
  name: ReactNode;
  value: ReactNode;
  options?: DescriptionOptions;
};

export type DescriptionListProps = Pick<
  DescriptionProps,
  'justifyContent' | 'leader' | 'separator'
> & {
  /**
   * Список отображаемых "name: value"
   */
  items: DescriptionListItem[];
};

export const DescriptionList = ({ items, ...props }: DescriptionListProps) => {
  return (
    <Wrapper>
      {items.map(({ name, value, options }, index) => (
        <Description
          key={index}
          justifyContent={props.justifyContent}
          leader={props.leader}
          separator={props.separator}
          component="div"
        >
          <StyledDescriptionName $nameMaxWidth={options?.nameMaxWidth}>
            {name}
          </StyledDescriptionName>
          <Description.Value
            canCopy={options?.canCopy}
            color={options?.color}
            copyPosition={options?.copyPosition}
          >
            {value}
          </Description.Value>
        </Description>
      ))}
    </Wrapper>
  );
};
