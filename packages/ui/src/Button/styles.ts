import { LoadingButton } from '@mui/lab';

import { styled } from '../styles';
import {
  getButtonHeightMobile,
  getButtonPaddingMobile,
} from '../ButtonBase/styles';
import { ButtonVariants } from '../ButtonBase';

import { ButtonProps } from './types';

export const LoadingButtonWrapper = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<ButtonProps>`
  min-width: ${({ variant }) =>
    variant === ButtonVariants.Link ? 'auto' : ''};
  padding: ${({ variant }) => (variant === ButtonVariants.Link ? 0 : '')};

  :active {
    box-shadow: none;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: ${getButtonHeightMobile};
    padding: ${getButtonPaddingMobile};

    white-space: nowrap;
  }
`;
