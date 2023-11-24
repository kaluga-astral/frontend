import {
  Button as UIKitButton,
  type ButtonProps as UIKitButtonProps,
} from '../../../Button';
import { styled } from '../../../styles';

type ButtonProps = UIKitButtonProps & {
  isOpen?: boolean;
};

export const SidebarButton = styled(UIKitButton)<ButtonProps>`
  min-width: ${({ isOpen }) => (!isOpen ? '40px' : '100%')};
  max-width: ${({ isOpen }) => (!isOpen ? '40px' : '100%')};
  height: 40px;
  max-height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  text-overflow: ellipsis;
  white-space: nowrap;

  transition: ${({ theme }) => {
    return theme.transitions.create(['max-width', 'min-width'], {
      duration: theme.transitions.duration.standard,
    });
  }};

  && > .MuiButton-startIcon {
    margin-right: ${({ theme, isOpen }) =>
      !isOpen ? theme.spacing(-2) : theme.spacing(0)};

    transition: ${({ theme }) => {
      return theme.transitions.create('margin-right', {
        duration: theme.transitions.duration.standard,
      });
    }};
  }

  && > .MuiButton-endIcon {
    margin-right: ${({ theme, isOpen }) =>
      !isOpen ? theme.spacing(2) : theme.spacing(0)};

    transition: ${({ theme }) => {
      return theme.transitions.create('margin-right', {
        duration: theme.transitions.duration.standard,
      });
    }};
  }
`;
