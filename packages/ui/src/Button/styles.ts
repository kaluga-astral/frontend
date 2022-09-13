import { LoadingButton } from '@mui/lab';

import { styled } from '../styles';
import {
  getButtonHeightMobile,
  getButtonPaddingMobile,
} from '../ButtonBase/styles';

import { ButtonProps } from './types';

export const StyledLoadingButton = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<ButtonProps>`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: ${getButtonHeightMobile};
    padding: ${getButtonPaddingMobile};

    font-size: ${({ theme }) => theme.typography.h5.fontSize};

    white-space: nowrap;
  }
`;
