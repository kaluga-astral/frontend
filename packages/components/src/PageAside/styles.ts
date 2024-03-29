import { styled } from '../styles';

export const Wrapper = styled.aside`
  overflow: auto;
  grid-area: aside;

  width: 320px;
  padding: ${({ theme }) => theme.spacing(6)};

  border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    overflow: unset;

    width: 100%;

    border-left: 0;
  }
`;
