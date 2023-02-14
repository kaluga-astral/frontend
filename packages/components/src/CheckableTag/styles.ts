import { styled } from '../styles';
import { Tag, TagColor, TagVariant } from '../Tag';
import { Theme } from '../theme';
import { TagVariants } from '../Tag/enums';

import { CheckableTagProps } from './CheckableTag';

type StyledTagThemeProps = CheckableTagProps & { theme: Theme };
type TagColorsKit = Omit<
  {
    [variant in TagVariant]: { [color in TagColor]: string };
  },
  'text'
>;

const getHoverBgColor = ({
  theme,
  color,
  variant,
  disabled,
  checked,
}: StyledTagThemeProps) => {
  if (disabled) {
    return 'initial';
  }

  if (checked) {
    return theme.palette.grey[700];
  }

  if (variant === TagVariants.TEXT) {
    return theme.palette.grey[200];
  }

  const hoverBgColors: TagColorsKit = {
    light: {
      primary: theme.palette.primary[200],
      error: theme.palette.red[200],
      success: theme.palette.green[200],
      warning: theme.palette.yellow[200],
      grey: theme.palette.grey[200],
      default: theme.palette.grey[200],
    },
    contained: {
      primary: theme.palette.primary[700],
      error: theme.palette.red[700],
      success: theme.palette.green[700],
      warning: theme.palette.yellow[700],
      grey: theme.palette.grey[200],
      default: theme.palette.grey[200],
    },
  };

  if (variant && color) {
    return hoverBgColors[variant][color];
  }

  return theme.palette.background.element;
};

const getActiveBgColor = ({
  theme,
  color,
  checked,
  variant,
  disabled,
}: StyledTagThemeProps) => {
  if (disabled) {
    return 'initial';
  }

  if (checked) {
    return theme.palette.grey[800];
  }

  if (variant === TagVariants.TEXT) {
    return theme.palette.primary[100];
  }

  const activeBgColor: TagColorsKit = {
    contained: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      grey: theme.palette.grey[100],
      default: theme.palette.background.element,
    },
    light: {
      primary: theme.palette.primary[100],
      error: theme.palette.red[100],
      success: theme.palette.green[100],
      warning: theme.palette.yellow[100],
      grey: theme.palette.grey[100],
      default: theme.palette.background.element,
    },
  };

  if (variant && color) {
    return activeBgColor[variant][color];
  }

  return activeBgColor.light.default;
};

const getBgColor = ({ theme, checked, disabled }: StyledTagThemeProps) => {
  if (disabled) {
    return theme.palette.grey[100];
  }

  if (checked) {
    return theme.palette.grey[900];
  }

  return null;
};

const getColor = ({ theme, checked, disabled }: StyledTagThemeProps) => {
  if (disabled) {
    return theme.palette.grey[500];
  }

  if (checked) {
    return theme.palette.primary.contrastText;
  }

  return null;
};

export const CheckableTagWrapper = styled.label`
  width: fit-content;
`;

export const CheckableTagHiddenInput = styled.input`
  display: none;
`;

export const CheckableTagStyled = styled(Tag)`
  background-color: ${getBgColor};
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};

  .MuiChip-label {
    color: ${getColor};

    &:hover,
    &:active {
      color: ${(props) =>
        props.checked ? props.theme.palette.primary.contrastText : null};
    }
  }

  &:hover {
    background-color: ${getHoverBgColor};
  }

  &:active {
    background-color: ${getActiveBgColor};
  }
`;
