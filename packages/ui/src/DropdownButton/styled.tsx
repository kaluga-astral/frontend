import { styled } from '../styles';
import { Button, ButtonProps } from '../Button';

type StyledButtonProps = ButtonProps & {
  pressed: boolean;
};

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'pressed',
})<StyledButtonProps>`
  color: ${({ pressed, theme }) =>
    pressed ? theme.palette.primary.contrastText : 'default'};

  background-color: ${({ pressed, theme }) =>
    pressed ? theme.palette.grey['900'] : 'default'};

  .MuiButton-endIcon {
    transform: rotate(${({ pressed }) => (pressed ? '180deg' : '0')});

    transition: ${({ theme }) =>
      theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter,
      })};
  }
`;
