import { DotsVOutlineMd } from '@astral/icons';
import { ReactNode, useCallback, useMemo } from 'react';

import { IconButton } from '../IconButton';
import { IconDropdownButton } from '../IconDropdownButton';
import { MenuItem } from '../MenuItem';
import { Tooltip } from '../Tooltip';

import { ActionCellWrapper } from './styles';

export type NestedAction<T> = {
  /**
   * Обработчик действия
   */
  onClick: (row: T) => void;
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
  onClick: (row: T) => void;
  /**
   * Название действия
   */
  name: string;
  /**
   * Флаг показа выпадающего списка при клике
   */
  nested?: false;
};

export type MultipleAction<T> = {
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

export type MainAction<T> = SingleAction<T> | MultipleAction<T>;

export type Actions<T> = {
  /**
   * Основные действия
   */
  main: MainAction<T>[];
  /**
   * Второстепенные действия
   */
  secondary?: SingleAction<T>[];
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
};

export function ActionCell<T>({
  actions: { main = [], secondary = [] },
  row,
}: ActionsCellProps<T>) {
  const handleActionClick =
    (onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick']) =>
    () => {
      onClick(row);
    };

  const renderMainAction = useCallback(
    (action: MainAction<T>) => {
      if (action.nested) {
        const { name, actions, icon } = action;

        return (
          <Tooltip key={name} title={name}>
            <IconDropdownButton icon={icon} variant="text">
              {actions.map(({ name: nestedActionName, onClick }) => (
                <MenuItem
                  key={nestedActionName}
                  onClick={handleActionClick(onClick)}
                >
                  {nestedActionName}
                </MenuItem>
              ))}
            </IconDropdownButton>
          </Tooltip>
        );
      }

      const { onClick, name, icon } = action;

      return (
        <Tooltip key={name} title={name}>
          <IconButton variant="text" onClick={handleActionClick(onClick)}>
            {icon}
          </IconButton>
        </Tooltip>
      );
    },
    [handleActionClick],
  );

  const renderSecondaryActions = useMemo(() => {
    if (!Boolean(secondary.length)) {
      return null;
    }

    return (
      <IconDropdownButton icon={<DotsVOutlineMd />} variant="text">
        {secondary.map(({ name, onClick }) => (
          <MenuItem key={name} onClick={handleActionClick(onClick)}>
            {name}
          </MenuItem>
        ))}
      </IconDropdownButton>
    );
  }, [secondary, handleActionClick]);

  return (
    <ActionCellWrapper onClick={(event) => event.stopPropagation()}>
      {main.map((action) => renderMainAction(action))}
      {renderSecondaryActions}
    </ActionCellWrapper>
  );
}
