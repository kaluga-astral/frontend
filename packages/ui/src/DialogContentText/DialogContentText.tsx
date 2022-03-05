import {
  DialogContentTextProps,
  DialogContentText as MuiDialogContentText,
} from '@mui/material';

export const DialogContentText = ({
  children,
  ...props
}: DialogContentTextProps) => {
  return <MuiDialogContentText {...props}>{children}</MuiDialogContentText>;
};
