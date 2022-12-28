import { styled } from '../styles';

export const PageLayoutContainerWrapper = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.spacing(4)};
  grid-template:
    'header header' auto
    'content aside' 1fr
    / 1fr min-content;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)};

  background-color: ${({ theme }) => theme.palette.common.white};
`;
