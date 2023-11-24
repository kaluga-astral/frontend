import { type Components, buttonClasses } from '@mui/material';

import { type Theme } from '../types';
import {
  type ButtonProps,
  ButtonSizes,
  type ButtonState,
  ButtonStates,
  ButtonVariants,
} from '../../Button';

type WithTheme<T extends object> = T & { theme: Theme };

type ButtonPropsWithTheme = WithTheme<ButtonProps>;

type GetButtonHeightOptions = Pick<ButtonPropsWithTheme, 'size'>;

type GetButtonPaddingOptions = Pick<ButtonPropsWithTheme, 'size' | 'theme'>;

type GetButtonPaddingMobileOptions = Pick<
  ButtonPropsWithTheme,
  'size' | 'theme' | 'variant'
>;

type GetValueOptions = {
  type?: string | undefined;
  values: Record<string, string>;
  defaultValue: string;
};

/**
 * Вспомогательная утилита для получения значения из values
 * values - содержит в себе все возможные значения
 * type - значение (ключ), который необходимо получить из values
 * defaultValue - значение по умолчанию, если значение values[type] не найдено
 */
const getValue = ({ type, values, defaultValue }: GetValueOptions) => {
  if (!type) {
    return defaultValue;
  }

  return values[type] || defaultValue;
};

/**
 * Получить значения для высоты кнопки в зависимости от size параметра
 */
export const getButtonHeight = (options: GetButtonHeightOptions): string =>
  getValue({
    type: options.size,
    values: {
      [ButtonSizes.Large]: '40px',
    },
    defaultValue: '32px',
  });

/**
 * Получить значения для высоты кнопки мобильной версии в зависимости от size параметра
 */
export const getButtonHeightMobile = (
  options: GetButtonHeightOptions,
): string =>
  getValue({
    type: options.size,
    values: {
      [ButtonSizes.Small]: '36px',
    },
    defaultValue: '48px',
  });

/**
 * Получить значения внутренних отступов кнопки (padding) в зависимости от size параметра
 */
export const getButtonPadding = (options: GetButtonPaddingOptions): string =>
  getValue({
    type: options.size,
    values: {
      [ButtonSizes.Large]: options.theme.spacing(2, 4, 2, 4),
    },
    defaultValue: options.theme.spacing(1, 3, 1, 3),
  });

/**
 * Получить значения внутренних отступов кнопки мобильной версии (padding) в зависимости от size параметра
 */
export const getButtonPaddingMobile = (
  options: GetButtonPaddingMobileOptions,
): string => {
  if (options.variant === ButtonVariants.Link) {
    return '0';
  }

  return getValue({
    type: options.size,
    values: {
      [ButtonSizes.Small]: options.theme.spacing(2, 3),
    },
    defaultValue: options.theme.spacing(4, 3),
  });
};

const getButtonColor = ({
  theme,
  variant,
  color,
  buttonState,
  selected,
}: Pick<ButtonPropsWithTheme, 'theme' | 'color' | 'variant' | 'selected'> & {
  buttonState: ButtonState;
}): string => {
  const textColorVariants = {
    selected: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['700'],
      active: theme.palette.grey['800'],
      focus: theme.palette.grey['900'],
    },
    light: {
      error: {
        default: theme.palette.red['900'],
        hover: theme.palette.red['900'],
        active: theme.palette.red['800'],
        focus: theme.palette.red['900'],
      },
      success: {
        default: theme.palette.green['900'],
        hover: theme.palette.green['900'],
        active: theme.palette.green['800'],
        focus: theme.palette.green['900'],
      },
      primary: {
        default: theme.palette.grey['900'],
        hover: theme.palette.grey['900'],
        active: theme.palette.primary['800'],
        focus: theme.palette.grey['900'],
      },
      warning: {
        default: theme.palette.yellow['900'],
        hover: theme.palette.yellow['900'],
        active: theme.palette.yellow['800'],
        focus: theme.palette.yellow['900'],
      },
    },
    contained: theme.palette.primary.contrastText,
    text: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['900'],
      active: theme.palette.primary['800'],
      focus: theme.palette.grey['900'],
    },
    link: {
      default: theme.palette.primary['800'],
      hover: theme.palette.primary['700'],
      active: theme.palette.primary['900'],
      focus: theme.palette.primary['800'],
    },
  };

  if (selected) {
    return variant !== ButtonVariants.Link
      ? theme.palette.primary.contrastText
      : textColorVariants.selected[buttonState];
  }

  if (variant === ButtonVariants.Contained) {
    return textColorVariants.contained;
  }

  if (variant === ButtonVariants.Light && color) {
    return textColorVariants.light[color][buttonState];
  }

  if (variant === ButtonVariants.Text) {
    return textColorVariants.text[buttonState];
  }

  return textColorVariants.link[buttonState];
};

export const getButtonBackgroundColor = ({
  selected,
  color,
  variant,
  buttonState,
  theme,
}: Pick<ButtonPropsWithTheme, 'selected' | 'color' | 'variant' | 'theme'> & {
  buttonState: ButtonState;
}) => {
  const bgColorVariants = {
    selected: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['700'],
      active: theme.palette.grey['800'],
      focus: theme.palette.grey['900'],
    },
    light: {
      error: {
        default: theme.palette.red['100'],
        hover: theme.palette.red['200'],
        active: theme.palette.red['100'],
        focus: theme.palette.red['100'],
      },
      success: {
        default: theme.palette.green['100'],
        hover: theme.palette.green['200'],
        active: theme.palette.green['100'],
        focus: theme.palette.green['100'],
      },
      primary: {
        default: theme.palette.grey['100'],
        hover: theme.palette.grey['200'],
        active: theme.palette.primary['100'],
        focus: theme.palette.grey['100'],
      },
      warning: {
        default: theme.palette.yellow['100'],
        hover: theme.palette.yellow['200'],
        active: theme.palette.yellow['100'],
        focus: theme.palette.yellow['100'],
      },
    },
    contained: {
      error: {
        default: theme.palette.red['800'],
        hover: theme.palette.red['700'],
        active: theme.palette.red['900'],
        focus: theme.palette.red['800'],
      },
      success: {
        default: theme.palette.green['800'],
        hover: theme.palette.green['700'],
        active: theme.palette.green['900'],
        focus: theme.palette.green['800'],
      },
      primary: {
        default: theme.palette.primary['800'],
        hover: theme.palette.primary['700'],
        active: theme.palette.primary['900'],
        focus: theme.palette.primary['800'],
      },
      warning: {
        default: theme.palette.yellow['800'],
        hover: theme.palette.yellow['700'],
        active: theme.palette.yellow['900'],
        focus: theme.palette.yellow['800'],
      },
    },
    text: {
      default: 'transparent',
      hover: theme.palette.grey['200'],
      active: theme.palette.primary['100'],
      focus: 'transparent',
    },
    link: 'transparent',
  };

  if (selected && variant !== ButtonVariants.Link) {
    return bgColorVariants.selected[buttonState];
  }

  if (variant === ButtonVariants.Light && color) {
    return bgColorVariants.light[color][buttonState];
  }

  if (variant === ButtonVariants.Contained && color) {
    return bgColorVariants.contained[color][buttonState];
  }

  if (variant === ButtonVariants.Text) {
    return bgColorVariants.text[buttonState];
  }

  return bgColorVariants.link;
};

export const getButtonDisabledBackgroundColor = ({
  theme,
  variant,
}: Pick<ButtonPropsWithTheme, 'theme' | 'variant'>): string => {
  if (ButtonVariants.Link === variant || ButtonVariants.Text === variant) {
    return 'transparent';
  }

  return theme.palette.grey['100'];
};

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const variant = ownerState.variant as ButtonProps['variant'];
      const color = ownerState.color as ButtonProps['color'];
      const selected = ownerState.selected as ButtonProps['selected'];

      const size = ownerState.size as ButtonProps['size'];

      return {
        height: getButtonHeight({ size }),
        padding: getButtonPadding({
          theme,
          size,
        }),
        [theme.breakpoints.down('sm')]: {
          height: getButtonHeightMobile({ size }),
          padding: getButtonPaddingMobile({ size, theme, variant }),
          whiteSpace: 'nowrap',
        },
        color: getButtonColor({
          selected,
          theme,
          variant,
          color,
          buttonState: ButtonStates.Default,
        }),
        fontWeight: theme.typography.button.fontWeight,
        fontSize: theme.typography.button.fontSize,
        backgroundColor: getButtonBackgroundColor({
          selected,
          theme,
          color,
          variant,
          buttonState: ButtonStates.Default,
        }),
        border: 'none',
        borderRadius: theme.shape.small,
        '&:hover': {
          color: getButtonColor({
            selected,
            theme,
            variant,
            color,
            buttonState: ButtonStates.Hover,
          }),
          backgroundColor: getButtonBackgroundColor({
            selected,
            color,
            variant,
            theme,
            buttonState: ButtonStates.Hover,
          }),
          boxShadow: 'none',
        },
        '&:active': {
          color: getButtonColor({
            selected,
            color,
            variant,
            theme,
            buttonState: ButtonStates.Active,
          }),
          backgroundColor: getButtonBackgroundColor({
            selected,
            color,
            variant,
            theme,
            buttonState: ButtonStates.Active,
          }),
          outline: 'none',
        },
        '&:focus-visible': {
          color: getButtonColor({
            selected,
            theme,
            variant,
            color,
            buttonState: ButtonStates.Focus,
          }),
          backgroundColor: getButtonBackgroundColor({
            selected,
            color,
            variant,
            theme,
            buttonState: ButtonStates.Focus,
          }),
          outline: `2px solid ${theme.palette.primary['400']}`,
          boxShadow: 'none',
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette.grey['500'],
          backgroundColor: getButtonDisabledBackgroundColor({
            theme,
            variant,
          }),
          pointerEvents: 'none',
          cursor: 'unset',
        },

        gap: theme.spacing(1),
        textTransform: 'none',
        boxShadow: 'none',
        minWidth: 'auto',

        '&.MuiButton-root .MuiButton-startIcon': {
          marginRight: theme.spacing(1),
        },
        '&.MuiButton-root .MuiButton-endIcon': {
          marginLeft: theme.spacing(1),
        },
        '&.MuiButton-root .MuiSvgIcon-root': {
          fontSize: '24px',
        },
      };
    },
  },
};
