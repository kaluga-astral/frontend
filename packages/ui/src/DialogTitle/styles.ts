import { DialogTitle } from '@mui/material';

import { styled } from '../styles';

export const DialogTitleStyled = styled(DialogTitle)`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;
