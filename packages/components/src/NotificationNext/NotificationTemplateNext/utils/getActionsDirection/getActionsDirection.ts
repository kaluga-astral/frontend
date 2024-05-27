import { type ActionsDirection } from '../../../types';

export const getActionsDirection = (direction: ActionsDirection) => {
  const DIRECTIONS_MAP = {
    right: 'flex-end',
    left: 'flex-start',
  };

  return DIRECTIONS_MAP[direction];
};
