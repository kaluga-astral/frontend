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
  disableReason,
  isDefaultExpanded = false,
  isNotBlockingExpandList = false,
  level = 0,
  component = 'div',
  onClick,
  ...props
}: TreeItemProps) => {
  const { isOpen, handleToggle, handleClick } = useLogic({
    isDefaultExpanded,
    onClick,
    isDisabled,
  });

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
      <Item {...props} $level={level} as={component} className={className}>
        <ItemContent
          $isSelected={isSelected}
          $isDisabled={isDisabled}
          $level={level}
          onClick={handleClick}
        >
          <Tooltip
            title={isDisabled && disableReason}
            placement={TOOLTIP_PLACEMENT}
            withoutContainer={!isDisabled}
          >
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
    <Item {...props} $level={level} as={component} className={className}>
      <ItemContent
        $isSelected={isSelected}
        $isDisabled={isDisabled}
        $level={level}
        onClick={handleClick}
      >
        <Tooltip
          title={isDisabled && disableReason}
          placement={TOOLTIP_PLACEMENT}
          withoutContainer={!isDisabled}
        >
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
