import { DotsVOutlineMd } from '@astral/icons';
import { type MouseEventHandler, type ReactNode, useCallback } from 'react';

import { IconButton, type IconButtonProps } from '../IconButton';
import { IconDropdownButton } from '../IconDropdownButton';
import { MenuItem, type MenuItemProps } from '../MenuItem';
import { type TooltipProps } from '../Tooltip';

import { ActionTooltip, Wrapper } from './styles';

export type NestedAction<T> = MenuItemProps & {
  /**
   * Обработчик действия
   */
  onClick?: (row: T) => void;
  /**
   * Название действия
   */
  name: string;
};

export type SingleAction<T> = {
  /**
   * Иконка действия
   */
  icon?: ReactNode;
  /**
   * Обработчик действия
   */
  onClick?: (row: T) => void;
  /**
   * Название действия
   */
  name: string;
  /**
   * Флаг показа выпадающего списка при клике
   */
  nested?: false;
};

export type MultipleAction<T> = MenuItemProps & {
  /**
   * Иконка действия
   */
  icon: ReactNode;
  /**
   * Список действий для выпадающего списка
   */
  actions: Array<NestedAction<T>>;
  /**
   * Флаг показа выпадающего списка при клике
   */
  nested: true;
  /**
   * Название действия
   */
  name: string;
};

type MainActionKind<T> =
  | (IconButtonProps & SingleAction<T>)
  | MultipleAction<T>;

export type SecondaryAction<T> = MenuItemProps &
  SingleAction<T> & {
    /**
     * Причина дизейбла
     */
    disabledReason?: TooltipProps['title'];
    /**
     * Если действие - ссылка, то будет поведение, свойственное для тега a
     */
    href?: string;
  };

type MainActionWithDisableReason<T> = MainActionKind<T> & {
  disabledReason?: TooltipProps['title'];
};

export type Actions<T> = {
  /**
   * Основные действия
   */
  main: MainActionWithDisableReason<T>[];
  /**
   * Второстепенные действия
   */
  secondary?: SecondaryAction<T>[];
};

export type ActionsCellProps<T> = {
  /**
   * Действия
   */
  actions: Actions<T>;
  /**
   * Данные строки из DataGrid
   */
  row: T;
  /**
   * Позиция тултипа
   */
  tooltipPlacement?: TooltipProps['placement'];
};

type ActionHandler<T> = (
  onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick'],
) =>
  | MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | HTMLLIElement>
  | undefined;

type MainActionProps<T> = {
  action: MainActionWithDisableReason<T>;
  disabledReason?: string;
  tooltipPlacement?: TooltipProps['placement'];
  onActionClick: ActionHandler<T>;
};

type SecondaryActionsProps<T> = {
  secondaryActions: SecondaryAction<T>[];
  onActionClick: ActionHandler<T>;
  tooltipPlacement: TooltipProps['placement'];
};

const MainAction = <T,>(properties: MainActionProps<T>) => {
  const { action, tooltipPlacement, onActionClick } = properties;

  if ('actions' in action) {
    const {
      name,
      icon,
      disabled: mainActionDisabled,
      disabledReason,
      actions,
    } = action;

    return (
      <ActionTooltip
        key={name}
        title={disabledReason || name}
        placement={tooltipPlacement}
        withoutContainer={!mainActionDisabled}
      >
        <IconDropdownButton
          icon={icon}
          variant="text"
          disabled={mainActionDisabled}
        >
          {actions.map(
            ({ name: nestedActionName, onClick: onClickNested, ...props }) => (
              <MenuItem
                key={nestedActionName}
                onClick={onActionClick(onClickNested)}
                {...props}
              >
                {nestedActionName}
              </MenuItem>
            ),
          )}
        </IconDropdownButton>
      </ActionTooltip>
    );
  }

  const { onClick, name, icon, nested, disabledReason, ...props } = action;

  return (
    <ActionTooltip
      key={name}
      title={disabledReason || name}
      placement={tooltipPlacement}
      withoutContainer={!props.disabled}
    >
      <IconButton variant="text" onClick={onActionClick(onClick)} {...props}>
        {icon}
      </IconButton>
    </ActionTooltip>
  );
};

const SecondaryActions = <T,>(props: SecondaryActionsProps<T>) => {
  const { secondaryActions, onActionClick, tooltipPlacement } = props;

  if (!secondaryActions.length) {
    return null;
  }

  return (
    <IconDropdownButton icon={<DotsVOutlineMd />} variant="text">
      {secondaryActions.map(
        ({
          name,
          nested,
          disabledReason,
          href,
          onClick,
          ...secondaryActionProps
        }) => {
          const { disabled } = secondaryActionProps;

          return (
            <MenuItem
              key={name}
              onClick={onActionClick(onClick)}
              disabledReason={disabledReason}
              disabled={disabled}
              href={href}
              withoutContainer={!disabled}
              tooltipPlacement={tooltipPlacement}
              {...secondaryActionProps}
            >
              {name}
            </MenuItem>
          );
        },
      )}
    </IconDropdownButton>
  );
};

export function ActionCell<T>({
  actions: { main = [], secondary = [] },
  row,
  tooltipPlacement,
}: ActionsCellProps<T>) {
  const handleActionClick = useCallback(
    (onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick']) =>
      () => {
        onClick?.(row);
      },
    [row],
  );

  const handleActionCellClick: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={handleActionCellClick}>
      {main.map((action) => (
        <MainAction<T>
          action={action}
          key={action.name}
          tooltipPlacement={tooltipPlacement}
          onActionClick={handleActionClick}
        />
      ))}
      <SecondaryActions<T>
        secondaryActions={secondary}
        onActionClick={handleActionClick}
        tooltipPlacement={tooltipPlacement}
      />
    </Wrapper>
  );
}
