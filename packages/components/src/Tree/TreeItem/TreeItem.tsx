import { type ComponentProps, type ElementType, type ReactNode } from 'react';

import { Collapse } from '../../Collapse';

import { ChevronIcon, CollapseButton, Item, ItemContent } from './styles';
import { useLogic } from './useLogic';

export type TreeItemProps<TComponent extends ElementType = ElementType> = {
  /**
   * Название класса, применяется к корневому компоненту.
   */
  className?: string;

  /**
   * Если true, item выделяется как активный.
   */
  isSelected: boolean;

  /**
   * Содержимое, которое будет отображено внутри элемента списка.
   */
  label: ReactNode;

  /**
   * Содержимое, отображающееся при раскрытии элемента.
   * При наличии children item будет отображен как родительский элемент.
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
} & Omit<ComponentProps<TComponent>, ''>;

export const TreeItem = ({
  label,
  children,
  className,
  isSelected,
  level = 0,
  component = 'div',
  onClick,
  ...props
}: TreeItemProps) => {
  const { isOpen, handleToggle } = useLogic();

  if (children) {
    return (
      <Item {...props} $level={level} as={component} className={className}>
        <ItemContent $isSelected={isSelected} $level={level} onClick={onClick}>
          <CollapseButton variant="text" onClick={handleToggle}>
            <ChevronIcon $isActive={isOpen} />
          </CollapseButton>
          {label}
        </ItemContent>

        <Collapse in={isOpen}>{children}</Collapse>
      </Item>
    );
  }

  return (
    <Item {...props} $level={level} as={component} className={className}>
      <ItemContent $isSelected={isSelected} $level={level} onClick={onClick}>
        {label}
      </ItemContent>
    </Item>
  );
};
