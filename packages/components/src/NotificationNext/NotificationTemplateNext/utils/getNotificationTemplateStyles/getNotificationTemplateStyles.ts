import { type Variant } from '../../../types';
import { type Theme } from '../../../../theme';

export const getNotificationTemplateStyles = (
  theme: Theme,
  variant: Variant,
  filled: boolean,
) => {
  const defaultColors = {
    color: theme.palette.grey[900],
    background: theme.palette.background.default,
  };

  if (!filled) {
    return defaultColors;
  }

  const stylesMap = {
    info: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.grey[600],
    },
    success: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.green[600],
    },
    warning: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.yellow[600],
    },
    error: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.red[600],
    },
    progress: defaultColors,
  };

  return stylesMap[variant];
};
