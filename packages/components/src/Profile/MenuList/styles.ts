import { menuClasses } from '@mui/material';

import { styled } from '../../styles';
import { Menu } from '../../Menu';

export const StyledMenu = styled(Menu)`
  & .${menuClasses.paper} {
    min-width: 200px;
    max-width: 300px;
  }
`;
