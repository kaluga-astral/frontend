import { type MouseEvent, type ReactNode } from 'react';

import { getKey } from './utils';
import { useLogic } from './useLogic';
import { Tag } from './Tag';
import type { TagValue } from './types';
import { Wrapper } from './styles';

export type TagsListProps<TData extends TagValue = TagValue> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Список к отображению
   */
  data?: Array<TData> | undefined;

  /**
   * Если `true`, то тег будет недоступен для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Поле, используемое в качестве ключа списка
   */
  keyId: TData extends string ? never : keyof TData;

  /**
   * Используется для определения строкового значения опции
   */
  getOptionLabel: (value: TData) => ReactNode;

  onChange: (value: Array<TData> | undefined) => void;

  /**
   * Функция, вызываемая при клике не тэг
   */
  onClick: (value: MouseEvent<HTMLDivElement>) => void;
};

/**
 * Предназначен для отображения списка тегов в таких компонентах как: Select, Autocomplete, TreeLikeAutocomplete
 * Не предназначен для использования в продуктах, не экспортируется из пакета
 */
export const TagsList = <TData extends TagValue>(
  props: TagsListProps<TData>,
) => {
  const { maxItems, tagsContainerRef, visibleOptions, getTagProps } =
    useLogic(props);

  const { className, data, keyId, isDisabled, onClick } = props;

  if (!data || !data.length) {
    return null;
  }

  return (
    <Wrapper className={className} ref={tagsContainerRef}>
      {visibleOptions?.map((option, index) => {
        const tagProps = getTagProps(option, index);

        return (
          <Tag
            key={getKey(option, keyId)}
            isDisabled={isDisabled}
            onClick={onClick}
            {...tagProps}
          />
        );
      })}

      {maxItems < data.length && (
        <Tag
          key="more"
          isDisabled={isDisabled}
          label={`+${data.length - maxItems}`}
          onClick={onClick}
        />
      )}
    </Wrapper>
  );
};
