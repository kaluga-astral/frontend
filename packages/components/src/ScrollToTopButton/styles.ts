import { styled } from '../styles';
import { Fab } from '../Fab';

export const StyledFab = styled(Fab)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(3)};
  bottom: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    right: ${({ theme }) => theme.spacing(9)};
  }
`;
