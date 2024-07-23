import {
  type ComponentProps,
  type ElementType,
  type FunctionComponent,
  type ReactNode,
} from 'react';

import { Collapse } from '../../Collapse';
import { type TreeListData } from '../types';

import {
  ChevronIcon,
  CollapseButton,
  Item,
  ItemContent,
  ItemWrapper,
  Label,
  LabelWrapper,
  Note,
} from './styles';
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
   * Подзаголовок, который будет отображено под элементом списка.
   */
  note?: ReactNode;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeListData, 'children'>>;

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
   * Если true, то элемент будет не доступен для взаимодействия
   * @default 'false'
   */
  isDisabled?: boolean;

  /**
   * Если true, то список можно будет развернуть даже если установлен `isDisabled=true`
   * @default 'false'
   */
  isNotBlockingExpandList?: boolean;

  /**
   * Если true, то вложенный список будет раскрыт
   * @default 'false'
   */
  isDefaultExpanded?: boolean;

  /**
   * Функция, которая запускается при нажатии на элемента списка.
   */
  onClick?: () => void;
} & Omit<ComponentProps<TComponent>, ''>;

export const TreeItem = ({
  id,
  label,
  note,
  renderItem,
  children,
  className,
  isSelected,
  isDisabled = false,
  isDefaultExpanded = false,
  isNotBlockingExpandList = false,
  level = 0,
  component = 'div',
  onClick,
  ...props
}: TreeItemProps) => {
  const { isOpen, handleToggle } = useLogic({ isDefaultExpanded });

  const renderCollapseButton = () => (
    <CollapseButton
      $isNotBlockingExpandList={isNotBlockingExpandList}
      variant="text"
      onClick={handleToggle}
    >
      <ChevronIcon $isActive={isOpen} />
    </CollapseButton>
  );

  if (children) {
    return (
      <Item {...props} $level={level} as={component} className={className}>
        <ItemContent
          $isSelected={isSelected}
          $isDisabled={isDisabled}
          $level={level}
          {...{
            inert: isDisabled && !isNotBlockingExpandList ? '' : undefined,
          }}
          onClick={onClick}
        >
          {renderItem ? (
            <LabelWrapper $level={level}>
              {renderCollapseButton()}
              {renderItem({ label, note, id })}
            </LabelWrapper>
          ) : (
            <ItemWrapper>
              <LabelWrapper $level={level}>
                {renderCollapseButton()}
                <Label>{label}</Label>
              </LabelWrapper>
              {note && <Note color="textSecondary">{note}</Note>}
            </ItemWrapper>
          )}
        </ItemContent>

        <Collapse in={isOpen}>{children}</Collapse>
      </Item>
    );
  }

  return (
    <Item {...props} $level={level} as={component} className={className}>
      <ItemContent
        $isSelected={isSelected}
        $isDisabled={isDisabled}
        $level={level}
        {...{ inert: isDisabled ? '' : undefined }}
        onClick={onClick}
      >
        {renderItem ? (
          <LabelWrapper $level={level}>
            {renderItem({ label, note, id })}
          </LabelWrapper>
        ) : (
          <ItemWrapper>
            <LabelWrapper $level={level}>
              <Label>{label}</Label>
            </LabelWrapper>
            {note && <Note color="textSecondary">{note}</Note>}
          </ItemWrapper>
        )}
      </ItemContent>
    </Item>
  );
};
