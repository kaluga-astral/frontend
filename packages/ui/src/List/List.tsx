import MuiList, { ListProps as MuiListProps } from '@mui/material/List';

export type ListProps = MuiListProps & {};

export const List = (props: ListProps) => {
  return <MuiList {...props} />;
};
