import Collapse from '@mui/material/Collapse';

import { ListProvider } from '../ListProvider';

import { ListProps } from './types';
import { StyledList } from './styled';

const COLLAPSED_SIZE = 60;

export const List = ({ collapsed, children, ...props }: ListProps) => {
  const open = collapsed === undefined || collapsed;

  return (
    <StyledList {...props}>
      <ListProvider value={{ open }}>
        <Collapse
          orientation="horizontal"
          in={open}
          collapsedSize={COLLAPSED_SIZE}
        >
          {children}
        </Collapse>
      </ListProvider>
    </StyledList>
  );
};
