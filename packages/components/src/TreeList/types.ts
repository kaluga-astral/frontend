import { type ComponentProps, type ElementType, type ReactNode } from 'react';

type Value = string | undefined;

export type TreeData = {
  /**
   * Идентификатор элемента в дереве
   */
  id: string;

  /**
   * Подпись или иное содержимое элемента
   */
  label: ReactNode;

  /**
   * Дочернии элементы
   */
  children?: TreeData[];
};

export type TreeItemProps<
  TComponentList extends ElementType = ElementType,
  TComponentItem extends ElementType = ElementType,
> = TreeData & {
  /**
   * Выбранные значения
   */
  value?: Value;

  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент.
   * @default 'ul'
   */
  componentList?: TComponentList;

  /**
   * Компонент, используемый для корневого узла элемента списка. Либо строка для использования элемента HTML, либо компонент.
   * @default 'li'
   */
  componentItem?: TComponentItem;

  /**
   * Props, специфичные для компонента List
   */
  listProps?: ComponentProps<TComponentList>;

  /**
   * Props, специфичные для компонента Item
   */
  itemProps?: ComponentProps<TComponentItem>;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Функция, которая запускается при изменении состояния
   */
  onChange?: (value: Value) => void;
};

export type TreeListProps<
  TComponentList extends ElementType = ElementType,
  TComponentItem extends ElementType = ElementType,
> = {
  /**
   * Выбранные значения
   */
  value?: Value;

  /**
   * Данные, которые необходимо отобразить в виде дерева.
   */
  data: TreeData[];

  /**
   * Название класса, применяется к корневому компоненту.
   */
  className?: string;

  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент.
   * @default 'ul'
   */
  componentList?: TComponentList;

  /**
   * Компонент, используемый для корневого узла элемента списка. Либо строка для использования элемента HTML, либо компонент.
   * @default 'li'
   */
  componentItem?: TComponentItem;

  /**
   * Props, специфичные для компонента List
   */
  listProps?: ComponentProps<TComponentList>;

  /**
   * Props, специфичные для компонента Item
   */
  itemProps?: ComponentProps<TComponentItem>;

  /**
   * Функция, которая запускается при изменении состояния.
   */
  onChange?: (value: Value) => void;
};
