import {
  Button as UIKitButton,
  ButtonProps as UIKitButtonProps,
} from '../../../Button';
import { styled } from '../../../styles';

type ButtonProps = UIKitButtonProps & {
  collapsedIn?: boolean;
};

export const Button = styled(UIKitButton)<ButtonProps>`
  min-width: ${({ collapsedIn }) => (!collapsedIn ? '40px' : '100%')};
  max-width: ${({ collapsedIn }) => (!collapsedIn ? '40px' : '100%')};
  height: 40px;
  max-height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  white-space: nowrap;
  text-overflow: ellipsis;

  transition: ${({ theme }) => {
    return theme.transitions.create(['max-width', 'min-width'], {
      duration: theme.transitions.duration.standard,
    }) ;
  }};

  .MuiButton-startIcon {
    margin-right: ${({ theme, collapsedIn }) =>
      !collapsedIn ? theme.spacing(-2) : theme.spacing(0)} !important;

    transition: ${({ theme }) => {
      return theme.transitions.create('margin-right', {
        duration: theme.transitions.duration.standard,
      }) ;
    }};
  }

  .MuiButton-endIcon {
    margin-right: ${({ theme, collapsedIn }) =>
      !collapsedIn ? theme.spacing(2) : theme.spacing(0)} !important;

    transition: ${({ theme }) => {
      return theme.transitions.create('margin-right', {
        duration: theme.transitions.duration.standard,
      }) ;
    }};
  }
`;
