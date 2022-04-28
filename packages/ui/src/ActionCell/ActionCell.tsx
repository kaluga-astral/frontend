import { DotsVOutlineMd } from '@astral/icons';
import React, { useMemo, useState } from 'react';

import { IconButton } from '../IconButton';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { Tooltip } from '../Tooltip';

import { ActionCellWrapper } from './styled';
import { Action, ActionCellProps } from './types';

const MAX_MAIN_ACTIONS = 2;
const MAX_ACTIONS_IN_CELL = 3;

export function ActionCell<T>({ actions = [], row }: ActionCellProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const actionsCount = actions.length;

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleActionClick = (onClick: Action<T>['onClick']) => () => {
    if (anchorEl) handleCloseMenu();

    onClick(row);
  };

  const renderMainActions = useMemo(() => {
    return actions.slice(0, MAX_MAIN_ACTIONS).map(({ name, onClick, Icon }) => (
      <Tooltip key={name} title={name}>
        <IconButton variant="text" onClick={handleActionClick(onClick)}>
          {Icon}
        </IconButton>
      </Tooltip>
    ));
  }, [actions, handleActionClick]);

  const renderAdditionalActions = useMemo(() => {
    if (actionsCount < MAX_ACTIONS_IN_CELL) return null;

    if (actionsCount === MAX_ACTIONS_IN_CELL) {
      const { onClick, Icon } = actions[MAX_ACTIONS_IN_CELL - 1];

      return (
        <IconButton variant="text" onClick={handleActionClick(onClick)}>
          {Icon}
        </IconButton>
      );
    }

    return (
      <IconButton variant="text" onClick={handleOpenMenu}>
        <DotsVOutlineMd />
      </IconButton>
    );
  }, [actions, handleActionClick]);

  const renderMenuActions = useMemo(() => {
    return actions
      .slice(MAX_MAIN_ACTIONS, actionsCount)
      .map(({ name, onClick }) => (
        <MenuItem key={name} onClick={handleActionClick(onClick)}>
          {name}
        </MenuItem>
      ));
  }, [actions, handleActionClick]);

  return (
    <>
      <ActionCellWrapper>
        {renderMainActions}
        {renderAdditionalActions}
      </ActionCellWrapper>
      <Menu open={open} anchorEl={anchorEl} onClose={handleCloseMenu}>
        {renderMenuActions}
      </Menu>
    </>
  );
}
