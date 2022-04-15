import { useContext } from 'react';
import { ListItemTextProps } from '@mui/material';

import { ListContext } from '../ListProvider';

import { StyledListItemText } from './styled';

export const ListItemText = ({ ...props }: ListItemTextProps) => {
  const { open } = useContext(ListContext);

  return <StyledListItemText {...props} open={open} />;
};
