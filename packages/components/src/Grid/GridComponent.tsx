import { forwardRef } from 'react';

import { GridProps } from './Grid';

export const GridComponent = forwardRef<HTMLDivElement, GridProps>(
  ({ component: Component = 'div', ...props }, ref) => {
    return <Component ref={ref} {...props} />;
  },
);
