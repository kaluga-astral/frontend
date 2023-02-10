import { Chip } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { TagColors, TagStates } from './enums';
import { TagColor, TagProps, TagState, TagVariant } from './types';

type StyledTagProps = Omit<TagProps, 'color'> & {
  customColor?: TagColor;
  customVariant?: TagVariant;
  rounded?: boolean;
};

type StyledTagThemeProps = StyledTagProps & { theme: Theme };

const getShape = ({ theme, rounded }: StyledTagThemeProps): string => {
  if (rounded) {
    return '100px';
  }

  return theme.shape.small;
};
const getDeleteIconBorderRadius = ({
  theme,
  rounded,
}: StyledTagThemeProps): string => {
  if (rounded) {
    return '100px';
  }

  return `0  ${theme.shape.small}  ${theme.shape.small} 0`;
};

const getHoverBgColor = (props: StyledTagThemeProps) => {
  const { theme, customColor, customVariant } = props;

  const backgroundHoverColorVariants = {
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

  if (!customVariant) {
    return backgroundHoverColorVariants.contained.primary;
  }

  if (customVariant && customColor) {
    return backgroundHoverColorVariants[customVariant][customColor];
  }

  return theme.palette.background.element;
};

const getBgColor = ({
  theme,
  customColor,
  customVariant,
  onDelete,
}: StyledTagThemeProps): string => {
  if (onDelete) {
    return theme.palette.grey[100];
  }

  if (customColor === TagColors.GREY) {
    return theme.palette.grey[100];
  }

  const backgroundColorVariants = {
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

  if (!customVariant) {
    return backgroundColorVariants.contained.primary;
  }

  if (customVariant && customColor) {
    return backgroundColorVariants[customVariant][customColor];
  }

  return theme.palette.background.element;
};

const getColor = ({
  theme,
  customColor,
  customVariant,
  onDelete,
}: StyledTagThemeProps): string => {
  if (onDelete) {
    return theme.palette.grey[900];
  }

  const textColorVariants = {
    contained: {
      primary: theme.palette.primary.contrastText,
      error: theme.palette.error.contrastText,
      success: theme.palette.warning.contrastText,
      warning: theme.palette.success.contrastText,
      default: theme.palette.text.primary,
    },
    light: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      default: theme.palette.text.primary,
    },
  };

  if (!customColor) {
    return textColorVariants.contained.default;
  }

  if (customVariant && customColor) {
    return textColorVariants[customVariant][customColor];
  }

  return theme.palette.text.primary;
};

const getTagLabelPadding = ({
  theme,
  rounded,
}: StyledTagThemeProps): string => {
  if (rounded) {
    return theme.spacing(0, 2);
  }

  return theme.spacing(0, 1);
};

const getDeleteIconBgColor = ({
  theme,
  iconState,
}: StyledTagThemeProps & { iconState: TagState }): string => {
  const bgColorDeleteIcon = {
    default: 'transparent',
    hover: theme.palette.red[100],
    active: theme.palette.red[200],
  };

  if (iconState) {
    return bgColorDeleteIcon[iconState];
  }

  return 'transparent';
};

export const StyledTag = styled(Chip, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant' && prop !== 'rounded',
})<StyledTagProps>`
  height: 20px;

  font-size: 14px;

  background-color: ${(props) => getBgColor({ ...props })};
  border-radius: ${(props) => getShape({ ...props })};

  user-select: none;

  &:hover {
    color: ${(props) => getColor({ ...props })};

    background-color: ${(props) => getBgColor({ ...props })};
  }

  &:active {
    color: ${(props) => getColor({ ...props })};

    background-color: ${(props) => getBgColor({ ...props })};
  }

  .MuiChip-label {
    padding: ${(props) => getTagLabelPadding({ ...props })};

    color: ${(props) => getColor({ ...props })};

    &:hover {
      color: ${(props) => getColor({ ...props })};
    }

    &:active {
      color: ${(props) => getColor({ ...props })};
    }
  }

  .MuiChip-deleteIcon {
    width: 20px;
    height: 20px;
    margin: 0;

    color: ${({ theme }) => theme.palette.grey[800]};

    background: ${(props) =>
      getDeleteIconBgColor({ ...props, iconState: TagStates.DEFAULT })};
    border-radius: ${(props) => getDeleteIconBorderRadius({ ...props })};

    &:hover {
      color: ${({ theme }) => theme.palette.grey[800]};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.HOVER })};
    }

    &:active {
      color: ${({ theme }) => theme.palette.grey[800]};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.ACTIVE })};
    }
  }

  .MuiChip-avatar {
    width: 16px;
    height: 16px;
    margin: 2px;
  }

  .MuiChip-icon {
    width: 16px;
    height: 16px;
  }
`;

export const CheckableStyledTag = styled(StyledTag)`

  background-color: ${({
    checked,
    theme,
    customColor,
    customVariant,
    onDelete,
  }) =>
    checked
      ? theme.palette.grey[900]
      : getBgColor({ theme, customColor, customVariant, onDelete })};
  cursor: pointer;

  .MuiChip-label {
    color: ${({ theme, customColor, customVariant, onDelete, checked }) =>
      checked
        ? theme.palette.primary.contrastText
        : getColor({ theme, customColor, customVariant, onDelete })};

    &:hover {
      color: ${(props) =>
        props.checked
          ? props.theme.palette.primary.contrastText
          : getColor({ ...props })};
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.checked ? props.theme.palette.grey[700] : getHoverBgColor(props)};
  }

  &:active {
    background-color: ${(props) =>
      props.checked ? props.theme.palette.grey[800] : getBgColor(props)};
  }
`;
