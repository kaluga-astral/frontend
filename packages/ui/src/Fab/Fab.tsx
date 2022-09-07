import { forwardRef } from 'react';

import { StyledFab } from './styled';
import { FabProps } from './types';

export const Fab = forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  return <StyledFab {...props} ref={ref} />;
});

export default Fab;
