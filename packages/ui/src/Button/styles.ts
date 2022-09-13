import { LoadingButton } from '@mui/lab';

import { styled } from '../styles';
import {
  getBreakPoint,
  getButtonHeightMobile,
  getButtonPaddingMobile,
} from '../ButtonBase/styles';

import { ButtonProps } from './types';

export const StyledLoadingButton = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<ButtonProps>`
  @media screen and (max-width: ${getBreakPoint}) {
    height: ${getButtonHeightMobile};
    padding: ${getButtonPaddingMobile};

    font-size: 16px;
    white-space: nowrap;
  }
`;
