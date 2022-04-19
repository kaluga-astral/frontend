import { styled } from '../../styles';

export const Root = styled.header`
  z-index: ${({ theme }) => theme.zIndex.appBar};

  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.elevation[200]};
`;
