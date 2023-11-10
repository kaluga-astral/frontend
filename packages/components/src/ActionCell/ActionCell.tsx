import { DotsVOutlineMd } from '@astral/icons';
import type { ReactNode } from 'react';
import { useCallback, useMemo } from 'react';

import type { IconButtonProps } from '../IconButton';
import { IconButton } from '../IconButton';
import { IconDropdownButton } from '../IconDropdownButton';
import type { MenuItemProps } from '../MenuItem';
import { MenuItem } from '../MenuItem';
import type { TooltipProps } from '../Tooltip';
import { Tooltip } from '../Tooltip';

import { ActionCellWrapper } from './styles';

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

export type MainAction<T> =
  | (IconButtonProps & SingleAction<T>)
  | MultipleAction<T>;

export type SecondaryAction<T> = MenuItemProps & SingleAction<T>;

export type Actions<T> = {
  /**
   * Основные действия
   */
  main: MainAction<T>[];
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

  const renderMainAction = useCallback(
    (action: MainAction<T>) => {
      if (action.nested) {
        const { name, actions, icon, disabled } = action;

        return (
          <Tooltip
            key={name}
            title={name}
            placement={tooltipPlacement}
            withoutContainer={!disabled}
          >
            <IconDropdownButton icon={icon} variant="text" disabled={disabled}>
              {actions.map(({ name: nestedActionName, onClick, ...props }) => (
                <MenuItem
                  key={nestedActionName}
                  onClick={handleActionClick(onClick)}
                  {...props}
                >
                  {nestedActionName}
                </MenuItem>
              ))}
            </IconDropdownButton>
          </Tooltip>
        );
      }

      const { onClick, name, icon, nested, ...props } = action;

      return (
        <Tooltip
          key={name}
          title={name}
          placement={tooltipPlacement}
          withoutContainer={!props.disabled}
        >
          <IconButton
            variant="text"
            onClick={handleActionClick(onClick)}
            {...props}
          >
            {icon}
          </IconButton>
        </Tooltip>
      );
    },
    [handleActionClick, tooltipPlacement],
  );

  const renderSecondaryActions = useMemo(() => {
    if (!Boolean(secondary.length)) {
      return null;
    }

    return (
      <IconDropdownButton icon={<DotsVOutlineMd />} variant="text">
        {secondary.map(({ name, onClick, nested, ...props }) => (
          <MenuItem key={name} onClick={handleActionClick(onClick)} {...props}>
            {name}
          </MenuItem>
        ))}
      </IconDropdownButton>
    );
  }, [secondary, handleActionClick]);

  return (
    <ActionCellWrapper onClick={(event) => event.stopPropagation()}>
      {main.map(renderMainAction)}
      {renderSecondaryActions}
    </ActionCellWrapper>
  );
}
