import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles/styled';

type DialogContentRootProps = DialogContentProps & { isMobile: boolean };

export const DialogContentRoot = styled(
  MuiDialogContent,
)<DialogContentRootProps>`
  padding-top: ${({ theme, isMobile }) => isMobile && theme.spacing(6)};
`;
