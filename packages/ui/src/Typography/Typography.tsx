import MuiTypography from '@mui/material/Typography';

import { OverridableFC, TypographyPropsMap } from './types';

export const Typography: OverridableFC<TypographyPropsMap, 'span'> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <MuiTypography variant={variant as any} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
