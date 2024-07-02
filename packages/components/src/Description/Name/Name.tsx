import { useContext } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { DescriptionContext } from '../DescriptionContext';

import { DashedSeparator, Wrapper } from './styles';

export type NameProps = Pick<TypographyProps, 'color' | 'variant' | 'children'>;

export const Name = ({
  children,
  color = 'textSecondary',
  ...props
}: NameProps) => {
  const { leader, separator } = useContext(DescriptionContext);

  return (
    <>
      <Wrapper $leader={leader}>
        <Typography {...props} color={color}>
          {children}
          {!leader && separator}
        </Typography>
      </Wrapper>
      {leader && <DashedSeparator />}
    </>
  );
};
