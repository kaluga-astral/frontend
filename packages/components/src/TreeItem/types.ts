import { type ComponentProps, type ElementType, type ReactNode } from 'react';

export type TreeItemProps<TComponent extends ElementType = ElementType> = {
  /**
   * Название класса, применяется к корневому компоненту.
   */
  className?: string;

  /**
   * Если true, item отображается как корневой узел.
   */
  isRoot?: boolean;

  /**
   * Если true, item выделяется как активный.
   */
  isSelected: boolean;

  /**
   * Содержимое, которое будет отображено внутри элемента списка.
   */
  label: ReactNode;

  /**
   * Содержимое, отображающееся в при раскрытии элемента, если `isRoot` равен `true`
   */
  children?: ReactNode;

  /**
   * Компонент, используемый для корневого узла элемента списка. Либо строка для использования элемента HTML, либо компонент.
   * @default 'div'
   */
  component?: TComponent;

  /**
   * Уровень вложенности в дереве.
   */
  level: number;

  /**
   * Функция, которая запускается при нажатии на элемента списка.
   */
  onClick?: () => void;
} & ComponentProps<TComponent>;
