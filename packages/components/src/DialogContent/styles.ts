import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles/styled';

type MuiDialogContentStyledProps = DialogContentProps & { isMobile: boolean };

export const MuiDialogContentStyled = styled(
  MuiDialogContent,
)<MuiDialogContentStyledProps>`
  padding-top: ${({ theme, isMobile }) => isMobile && theme.spacing(6)};
`;
