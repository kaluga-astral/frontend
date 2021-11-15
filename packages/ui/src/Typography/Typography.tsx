import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import { Variant } from '@mui/material/styles/createTypography'

export interface TypographyProps extends MuiTypographyProps {
  variant?: Variant | 'h7' | 'h8' | 'h9' | 'ui' | 'link' | 'pointer' | 'small' | 'code'
}

export const Typography = ({ variant, children, ...args }: TypographyProps) => {
  return <MuiTypography variant={variant} {...args}>{children}</MuiTypography>
}

export default Typography
