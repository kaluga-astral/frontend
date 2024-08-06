import { menuClasses } from '@mui/material';

import { styled } from '../../styles';
import { MenuList } from '../../MenuList';

export const StyledMenuList = styled(MenuList)`
  &.${menuClasses.paper} {
    min-width: 200px;
    max-width: 300px;
  }
`;
