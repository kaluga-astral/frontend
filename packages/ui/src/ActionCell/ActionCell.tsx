import { DotsVOutlineMd } from '@astral/icons';
import { ReactNode, useMemo } from 'react';

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
  icon: ReactNode;
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

  const renderMainActions = useMemo(() => {
    return main.map(({ nested, icon, name, ...rest }) => {
      if (nested) {
        const { actions: nestedActions } = rest as MultipleAction<T>;

        return (
          <Tooltip key={name} title={name}>
            <IconDropdownButton icon={icon} variant="text">
              {nestedActions.map(({ name: nestedActionName }) => (
                <MenuItem key={nestedActionName}>{nestedActionName}</MenuItem>
              ))}
            </IconDropdownButton>
          </Tooltip>
        );
      }

      const { onClick } = rest as SingleAction<T>;

      return (
        <Tooltip key={name} title={name}>
          <IconButton variant="text" onClick={handleActionClick(onClick)}>
            {icon}
          </IconButton>
        </Tooltip>
      );
    });
  }, [main, handleActionClick]);

  const renderMenuActions = useMemo(() => {
    return secondary.map(({ name, onClick }) => (
      <MenuItem key={name} onClick={handleActionClick(onClick)}>
        {name}
      </MenuItem>
    ));
  }, [secondary, handleActionClick]);

  const renderAdditionalActions = useMemo(() => {
    if (!Boolean(secondary.length)) return null;

    return (
      <IconDropdownButton icon={<DotsVOutlineMd />} variant="text">
        {renderMenuActions}
      </IconDropdownButton>
    );
  }, [renderMenuActions, handleActionClick]);

  return (
    <ActionCellWrapper>
      {renderMainActions}
      {renderAdditionalActions}
    </ActionCellWrapper>
  );
}
