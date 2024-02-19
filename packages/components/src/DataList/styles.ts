import { Fab } from '../Fab';
import { styled } from '../styles';

export const DataListBody = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const ScrollToStartButton = styled(Fab)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(8)};
  left: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    bottom: ${({ theme }) => theme.spacing(7)};
    left: ${({ theme }) => theme.spacing(4)};
  }
`;
