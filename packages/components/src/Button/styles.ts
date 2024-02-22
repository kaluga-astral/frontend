import { LoadingButton } from '@mui/lab';

import { styled } from '../styles';

import { ButtonVariants } from './enums';

export const StyledLoadingButton = styled(LoadingButton)`
  min-width: ${({ variant }) =>
    variant === ButtonVariants.Link ? 'auto' : ''};
  padding: ${({ variant }) => (variant === ButtonVariants.Link ? 0 : '')};

  :active {
    box-shadow: none;
  }
`;
