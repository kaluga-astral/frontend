import {
  DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

export const DialogContent = ({ children, ...props }: DialogContentProps) => {
  return <MuiDialogContent {...props}>{children}</MuiDialogContent>;
};
