import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles/styled';

type StyledMuiDialogContentProps = DialogContentProps & { isMobile: boolean };

export const StyledMuiDialogContent = styled(
  MuiDialogContent,
)<StyledMuiDialogContentProps>`
  padding-top: ${({ theme, isMobile }) => isMobile && theme.spacing(6)};
`;
