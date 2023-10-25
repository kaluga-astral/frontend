import { styled } from '../../styles';
import { Grid } from '../../Grid';

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

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderSection = styled(Grid)`
  grid-auto-flow: column;
`;
