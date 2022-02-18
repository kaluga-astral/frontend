import { Grid } from '../Grid';
import { styled } from '../styles';

export const StyledDashboard = styled(Grid)`
  height: 100vh;
  position: relative;
  > header {
    z-index: 1000;
  }
  > .sidebar {
    z-index: 999;
  }
`;
