import { styled } from '../styles';
import { Fab } from '../Fab';

export const StyledFab = styled(Fab)(
  ({ theme }) => `
  position: absolute;
  bottom: 30px;

  right: ${theme.spacing(3)};

  ${theme.breakpoints.down('sm')} {
    right: ${theme.spacing(9)};
  }
`,
);
