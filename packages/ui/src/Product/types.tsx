import { PropsWithChildren } from 'react';

import { ButtonProps } from '../Button';

export type ProductProps = ButtonProps & {
  logo: (props: PropsWithChildren<{}>) => JSX.Element;
  name: string;
};
