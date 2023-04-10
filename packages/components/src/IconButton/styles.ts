import { styled } from '../styles';
import { ButtonBase, ButtonSizes } from '../ButtonBase';
import { Theme } from '../theme';
import { ButtonProps } from '../Button';

type IconButtonWrapperThemeProps = ButtonProps & {
  theme: Theme;
};

export const getButtonSize = ({
  size,
}: IconButtonWrapperThemeProps): string => {
  if (size === ButtonSizes.Large) {
    return '40px';
  }

  return '32px';
};

export const getButtonSizeMobile = ({
  size,
}: IconButtonWrapperThemeProps): string => {
  if (size === ButtonSizes.Small) {
    return '36px';
  }

  return '48px';
};

export const IconButtonWrapper = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  width: ${getButtonSize};
  height: ${getButtonSize};
  padding: ${({ theme }) => theme.spacing(1)};

  pointer-events: ${({ loading }) => loading && 'none'};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: ${getButtonSizeMobile};
    height: ${getButtonSizeMobile};
  }
`;
