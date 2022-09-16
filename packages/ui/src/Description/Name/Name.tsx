import { Typography, TypographyProps } from '../../Typography';

export type NameProps = Pick<TypographyProps, 'color' | 'variant' | 'children'>;

export const Name = ({
  children,
  color = 'textSecondary',
  ...props
}: NameProps) => (
  <Typography {...props} color={color}>
    {children}:&nbsp;
  </Typography>
);
