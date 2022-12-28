import { Grid } from '../../Grid';
import { styled } from '../../styles';

export const HeaderRoot = styled.header`
  z-index: ${({ theme }) => theme.zIndex.appBar};

  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 3)};

  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.elevation[200]};
`;

export const HeaderNav = styled(Grid)`
  column-gap: ${({ theme }) => theme.spacing(1)};
`;
