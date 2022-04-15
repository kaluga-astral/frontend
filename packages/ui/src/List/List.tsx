import Collapse from '@mui/material/Collapse';

import { ListProvider } from '../ListProvider';

import { ListProps } from './types';
import { StyledList } from './styled';

export const List = ({
  collapsed,
  collapsedSize,
  children,
  ...props
}: ListProps) => {
  const open = collapsed === undefined || collapsed;

  return (
    <StyledList {...props}>
      <ListProvider value={{ open }}>
        <Collapse
          orientation="horizontal"
          in={open}
          collapsedSize={collapsedSize}
        >
          {children}
        </Collapse>
      </ListProvider>
    </StyledList>
  );
};
