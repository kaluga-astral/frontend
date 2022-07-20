import { CollapseProps } from '@mui/material';

import { StyledCollapse } from './styles';

export const Collapse = (props: CollapseProps) => {
  return <StyledCollapse {...props} />;
};

export type { CollapseProps };
