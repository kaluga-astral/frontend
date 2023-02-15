import { styled } from '../styles';

export const PageAsideWrapper = styled.aside`
  grid-area: aside;
  width: 320px;
  padding: ${({ theme }) => theme.spacing(6)};
  overflow: auto;

  border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;
