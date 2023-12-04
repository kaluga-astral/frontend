import { styled } from '../styles';
import { Button, type ButtonProps } from '../Button';
import {
  getButtonHeight,
  getButtonHeightMobile,
} from '../theme/components/MuiButton';

export const IconButtonWrapper = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  pointer-events: ${({ loading }) => loading && 'none'};

  width: ${getButtonHeight};
  height: ${getButtonHeight};
  padding: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: ${getButtonHeightMobile};
  }
`;
