import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

export type TypographyProps = Omit<MuiTypographyProps, 'variant'> & {
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
    <MuiTypography variant={variant as any} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
