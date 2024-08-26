import {
  type ComponentProps,
  type ElementType,
  type FunctionComponent,
  type ReactNode,
} from 'react';

import { Collapse } from '../../Collapse';
import { type TreeListData } from '../types';
import { Tooltip } from '../../Tooltip';

import { TOOLTIP_PLACEMENT, TREE_ITEM_NOTE_CLASSNAME } from './constants';
import {
  ChevronIcon,
  CollapseButton,
  Item,
  ItemContent,
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
   * Уникальный префикс для идентификаторов в рамках дерева
   */
  prefixId?: string;

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
   * Текст тултипа при заблокированном состоянии элемента дерева
   */
  disableReason?: string;

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
   * Функция, которая запускается при нажатии на элемент списка.
   */
  onClick?: () => void;
} & Omit<ComponentProps<TComponent>, ''>;

export const TreeItem = (props: TreeItemProps) => {
  const { isOpen, handleToggle, itemProps, itemContentProps, tooltipProps } =
    useLogic(props);

  const {
    id,
    prefixId,
    label,
    note,
    renderItem,
    children,
    className,
    isSelected,
    isDisabled = false,
    disableReason,
    isDefaultExpanded,
    isNotBlockingExpandList = false,
    level = 0,
    component = 'div',
    onClick,
    ...restProps
  } = props;

  const renderCollapseButton = () => (
    <CollapseButton
      $isNotBlockingExpandList={isNotBlockingExpandList}
      disabled={!isNotBlockingExpandList && isDisabled}
      variant="text"
      onClick={handleToggle}
    >
      <ChevronIcon $isActive={isOpen} />
    </CollapseButton>
  );

  if (children) {
    return (
      <Item
        {...restProps}
        $level={level}
        as={component}
        className={className}
        {...itemProps}
      >
        <ItemContent
          $isSelected={isSelected}
          $isDisabled={isDisabled}
          $level={level}
          tabIndex={0}
          {...itemContentProps}
        >
          <Tooltip placement={TOOLTIP_PLACEMENT} {...tooltipProps}>
            {renderItem ? (
              <LabelWrapper $level={level}>
                {renderCollapseButton()}
                {renderItem({ label, note, id })}
              </LabelWrapper>
            ) : (
              <>
                <LabelWrapper $level={level}>
                  {renderCollapseButton()}
                  <Label>{label}</Label>
                </LabelWrapper>

                {note && (
                  <Note
                    className={TREE_ITEM_NOTE_CLASSNAME}
                    variant="small"
                    color="textSecondary"
                  >
                    {note}
                  </Note>
                )}
              </>
            )}
          </Tooltip>
        </ItemContent>

        <Collapse in={isOpen}>{children}</Collapse>
      </Item>
    );
  }

  return (
    <Item
      {...restProps}
      $level={level}
      as={component}
      className={className}
      {...itemProps}
    >
      <ItemContent
        $isSelected={isSelected}
        $isDisabled={isDisabled}
        $level={level}
        tabIndex={0}
        {...itemContentProps}
      >
        <Tooltip placement={TOOLTIP_PLACEMENT} {...tooltipProps}>
          {renderItem ? (
            <LabelWrapper $level={level}>
              {renderItem({ label, note, id })}
            </LabelWrapper>
          ) : (
            <>
              <LabelWrapper $level={level}>
                <Label>{label}</Label>
              </LabelWrapper>
              {note && (
                <Note
                  className={TREE_ITEM_NOTE_CLASSNAME}
                  variant="small"
                  color="textSecondary"
                >
                  {note}
                </Note>
              )}
            </>
          )}
        </Tooltip>
      </ItemContent>
    </Item>
  );
};
