import { CollapseProps } from '@mui/material';

import { StyledCollapse } from './styled';

export const Collapse = ({ ...props }: CollapseProps) => {
  return <StyledCollapse {...props} />;
};
