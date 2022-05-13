import { styled } from '../styles';
import { Button, ButtonProps } from '../Button';

type DropdownButtonWrapperProps = ButtonProps & {
  selected: boolean;
};

export const DropdownButtonWrapper = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<DropdownButtonWrapperProps>`
  color: ${({ selected, theme }) =>
    selected ? theme.palette.primary.contrastText : 'default'};

  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.grey['900'] : 'default'};

  .MuiButton-endIcon {
    transform: rotate(${({ selected }) => (selected ? '180deg' : '0')});

    transition: ${({ theme }) =>
      theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter,
      })};
  }
`;
