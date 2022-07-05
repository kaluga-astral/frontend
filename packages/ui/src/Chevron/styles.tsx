import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../styles';

import { IChevron } from './Chevron';
import { getChevronTransformValue } from './getChevronTransformValue';

export const ChevronWrapper = styled(ChevronDOutlineMd)<
  Pick<IChevron, 'isActive'>
>`
  transform: ${getChevronTransformValue};

  transition: ${({ theme }) =>
    theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    })};
`;
