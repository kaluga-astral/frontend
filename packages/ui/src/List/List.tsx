import { ListProvider } from '../ListProvider';

import { ListProps } from './types';
import { StyledList } from './styled';

export const List = ({ children, collapsed, ...props }: ListProps) => {
  const open = collapsed === undefined || collapsed;

  return (
    <StyledList {...props}>
      <ListProvider value={{ open }}>{children}</ListProvider>
    </StyledList>
  );
};
