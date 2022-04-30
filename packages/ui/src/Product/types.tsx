import { FC } from 'react';

import { ButtonProps } from '../Button';

export type ProductProps = ButtonProps & {
  logo: FC;
  name: string;
};
