import Collapse from '@mui/material/Collapse';

import { ListProvider } from '../ListProvider';

import { ListProps } from './types';
import { StyledList } from './styled';

export const List = ({
  collapsed = true,
  collapsedSize,
  children,
  ...props
}: ListProps) => (
  <StyledList {...props}>
    <ListProvider isOpen={{ open: collapsed }}>
      <Collapse
        orientation="horizontal"
        in={collapsed}
        collapsedSize={collapsedSize}
      >
        {children}
      </Collapse>
    </ListProvider>
  </StyledList>
);
