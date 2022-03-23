import { Pagination } from '@mui/material';

import { styled } from '../../../styles';

export const PaginationStyled = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing(4)};

  .MuiButtonBase-root.Mui-selected {
    color: ${({ theme }) => theme.palette.background.element};

    background: ${({ theme }) => theme.palette.grey['900']};
  }
`;
