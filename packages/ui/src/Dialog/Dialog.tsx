import { DialogProps, Dialog as MuiDialog } from '@mui/material';

export const Dialog = ({ children, ...props }: DialogProps) => {
  return <MuiDialog {...props}>{children}</MuiDialog>;
};
