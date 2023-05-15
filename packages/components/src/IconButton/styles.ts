import { styled } from '../styles';
import { Button, ButtonProps } from '../Button';
import {
  getButtonHeight,
  getButtonHeightMobile,
} from '../theme/components/MuiButton';

export const IconButtonWrapper = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  width: ${getButtonHeight};
  height: ${getButtonHeight};
  padding: ${({ theme }) => theme.spacing(1)};

  pointer-events: ${({ loading }) => loading && 'none'};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: ${getButtonHeightMobile};
  }
`;
