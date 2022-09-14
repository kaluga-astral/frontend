import { Typography as MuiTypography } from '@mui/material';
import React, { forwardRef, useMemo } from 'react';

import { TypographyColors } from './enums';
import { TypographyProps } from './types';

export const Typography: React.FC<TypographyProps> = forwardRef<
  HTMLElement,
  TypographyProps
>(({ children, color, ...props }, ref) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    return (color && TypographyColors[color]) || color;
  }, [color]);

  return (
    <MuiTypography ref={ref} {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
