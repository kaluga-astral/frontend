import { ActionsDirection } from '../../types';

export const getActionsDirection = (direction: ActionsDirection) => {
  const MAP_OF_DIRECTIONS = {
    right: 'flex-end',
    left: 'flex-start',
  };

  return MAP_OF_DIRECTIONS[direction];
};
