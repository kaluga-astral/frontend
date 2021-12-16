import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

export type TypographyProps = MuiTypographyProps & {
  variant?:
    | Variant
    | 'h7'
    | 'h8'
    | 'h9'
    | 'ui'
    | 'link'
    | 'pointer'
    | 'small'
    | 'code';
};

export const Typography = ({
  variant,
  children,
  ...props
}: TypographyProps) => {
  return (
    <MuiTypography variant={variant} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
