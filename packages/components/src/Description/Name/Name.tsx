import { useContext } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { DescriptionDashedSeparator } from '../styles';
import { DescriptionContext } from '../DescriptionProvider';

export type NameProps = Pick<TypographyProps, 'color' | 'variant' | 'children'>;

export const Name = ({
  children,
  color = 'textSecondary',
  ...props
}: NameProps) => {
  const { leader, separator } = useContext(DescriptionContext);

  return (
    <>
      <Typography {...props} color={color}>
        {children}
        {separator}
      </Typography>
      {leader && <DescriptionDashedSeparator />}
    </>
  );
};
