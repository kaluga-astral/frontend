import MuiTypography, { TypographyProps } from '@mui/material/Typography'
import { Variant } from '@mui/material/styles/createTypography'

interface ITypography extends TypographyProps {
  value: string
  variant?: Variant | 'h7' | 'h8' | 'h9' | 'ui' | 'link' | 'pointer' | 'small' | 'code'
}

export const Typography = ({ variant, value, ...args }: ITypography) => {
  return <MuiTypography variant={variant} {...args}>{value}</MuiTypography>
}

export default Typography
