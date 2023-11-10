import type { PropsWithChildren } from 'react';

import type { ButtonProps } from '../Button';

export type ProductProps = ButtonProps & {
  logo: (props: PropsWithChildren<{}>) => JSX.Element;
  name: string;
};
