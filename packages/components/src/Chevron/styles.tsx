import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../styles';

type ChevronWrapperProps = { isActive?: boolean };

export const ChevronWrapper = styled(ChevronDOutlineMd, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ChevronWrapperProps>`
  transform: rotateZ(${({ isActive }) => (isActive ? 180 : 0)}deg);

  transition: ${({ theme }) =>
    theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    })};
`;
