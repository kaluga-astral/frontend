import { type ReactNode, useCallback } from 'react';

import { Description, type DescriptionProps } from '../Description';
import { type ValueProps } from '../Description/Value';
import { Tag, type TagColor } from '../Tag';

import { StyledDescriptionName, Wrapper } from './styles';

export type DescriptionOptions = Pick<
  ValueProps,
  'canCopy' | 'copyPosition' | 'color'
> & {
  nameMaxWidth?: string;
  /**
   *  Вариант отображения Value в списке
   */
  variant?: 'tag';
  color?: TagColor;
  renderOption?: (
    optionProps: Omit<DescriptionOptions, 'nameMaxWidth'>,
    value: ReactNode,
  ) => ReactNode;
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

export const DescriptionList = ({
  items,
  justifyContent,
  leader,
  separator,
}: DescriptionListProps) => {
  const renderValue = useCallback(
    (
      optionProps: Omit<DescriptionOptions, 'nameMaxWidth'>,
      value: ReactNode,
    ) => {
      const { renderOption, color, canCopy, copyPosition, variant } =
        optionProps;

      if (renderOption) {
        return renderOption(optionProps, value);
      }

      if (variant) {
        return (
          <Description.Value>
            <Tag label={value} color={color} variant="light" />
          </Description.Value>
        );
      }

      return (
        <Description.Value
          canCopy={canCopy}
          color={color}
          copyPosition={copyPosition}
        >
          {value}
        </Description.Value>
      );
    },
    [],
  );

  return (
    <Wrapper>
      {items.map(({ name, value, options }) => {
        const { nameMaxWidth, ...restOptions } = options || {};

        return (
          <Description
            key={`${name}:${value}`}
            justifyContent={justifyContent}
            leader={leader}
            separator={separator}
            component="div"
          >
            <StyledDescriptionName $nameMaxWidth={nameMaxWidth}>
              {name}
            </StyledDescriptionName>
            {renderValue(restOptions, value)}
          </Description>
        );
      })}
    </Wrapper>
  );
};
