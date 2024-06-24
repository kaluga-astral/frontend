import { type HTMLAttributes, type ReactNode, useCallback } from 'react';

import { Description, type DescriptionProps } from '../Description';
import { type ValueProps } from '../Description/Value';
import { Tag, type TagColor } from '../Tag';

import { StyledDescriptionName, Wrapper } from './styles';

export type DescriptionOptions = Pick<
  ValueProps,
  'canCopy' | 'copyPosition' | 'color'
> & {
  nameMaxWidth?: string;
  color?: TagColor;
  renderOption?: (
    optionProps: HTMLAttributes<HTMLDivElement> & { key?: string },
    { name, value, options }: DescriptionListItem,
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
  /**
   * Отображение Value в виде компонента Tag
   * @default tag
   */
  variant?: 'tag';
};

export const DescriptionList = ({
  items,
  variant,
  ...props
}: DescriptionListProps) => {
  const renderOption = useCallback(
    (
      optionProps: HTMLAttributes<HTMLDivElement> & { key?: string },
      { name, value, options }: DescriptionListItem,
    ) => {
      if (options?.renderOption) {
        return options?.renderOption(optionProps, { name, value, options });
      }

      return (
        <Description
          key={optionProps.key}
          justifyContent={props.justifyContent}
          leader={props.leader}
          separator={props.separator}
          component="div"
        >
          <StyledDescriptionName $nameMaxWidth={options?.nameMaxWidth}>
            {name}
          </StyledDescriptionName>
          {variant ? (
            <Description.Value>
              <Tag label={value} color={options?.color} variant="light" />
            </Description.Value>
          ) : (
            <Description.Value
              canCopy={options?.canCopy}
              color={options?.color}
              copyPosition={options?.copyPosition}
            >
              {value}
            </Description.Value>
          )}
        </Description>
      );
    },
    [props.justifyContent, props.leader, props.separator, variant],
  );

  return (
    <Wrapper>
      {items.map((item, index) => {
        const optionProps: HTMLAttributes<HTMLDivElement> & { key?: string } = {
          key: `description-item-${index}`,
        };

        return renderOption(optionProps, item);
      })}
    </Wrapper>
  );
};
