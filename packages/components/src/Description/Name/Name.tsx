import { useContext } from 'react';

import { Typography, TypographyProps } from '../../Typography';
import { DescriptionDashedSeparator } from '../styles';
import { DescriptionContext } from '../DescriptionProvider';

export type NameProps = Pick<TypographyProps, 'color' | 'variant' | 'children'>;

export const Name = ({
  children,
  color = 'textSecondary',
  ...props
}: NameProps) => {
  const { leader } = useContext(DescriptionContext);

  return (
    <>
      <Typography {...props} color={color}>
        {children}:&nbsp;
      </Typography>
      {leader && <DescriptionDashedSeparator />}
    </>
  );
};
