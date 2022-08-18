import { Typography as MuiTypography } from '@mui/material';
import { useMemo } from 'react';

import { TypographyColors } from './constants';
import { TypographyProps } from './types';

export const Typography = ({ children, color, ...props }: TypographyProps) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    return (color && TypographyColors[color]) || color;
  }, [color]);

  return (
    <MuiTypography {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
