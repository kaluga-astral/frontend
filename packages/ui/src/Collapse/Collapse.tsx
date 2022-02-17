import { CollapseProps, Collapse as MuiCollapse } from '@mui/material';

export const Collapse = ({ children, ...props }: CollapseProps) => {
  return <MuiCollapse {...props}>{children}</MuiCollapse>;
};
