import { styled } from '../styles';
import { Button } from '../Button';

export const DropdownButtonWrapper = styled(Button)`
  .MuiButton-endIcon {
    transform: rotate(${({ selected }) => (selected ? '180deg' : '0')});

    transition: ${({ theme }) =>
      theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter,
      })};
  }
`;
