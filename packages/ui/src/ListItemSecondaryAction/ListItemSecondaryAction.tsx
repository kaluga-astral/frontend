import {
  ListItemSecondaryActionProps,
  ListItemSecondaryAction as MuiListItemSecondaryAction,
} from '@mui/material';

export const ListItemSecondaryAction = ({
  children,
  ...props
}: ListItemSecondaryActionProps) => {
  return (
    <MuiListItemSecondaryAction {...props}>
      {children}
    </MuiListItemSecondaryAction>
  );
};
