import { Typography, TypographyProps } from '../../Typography';

export type NameProps = Pick<TypographyProps, 'color' | 'variant' | 'children'>;

export const Name = ({ children, ...props }: NameProps) => (
  <Typography {...props}>{children}:&nbsp;</Typography>
);
