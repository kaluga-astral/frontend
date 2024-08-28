import {
  Dialog as MuiDialog,
  backdropClasses,
  dialogClasses,
} from '@mui/material';

import { styled } from '../styles';

import { SIZES } from './constants';

type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const getSize = (size: DialogSize) => {
  return SIZES[size] || SIZES.md;
};

export const StyledDialog = styled(MuiDialog, {
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})<{ $size: DialogSize }>`
  &.${dialogClasses.root} .${backdropClasses.root} {
    background-color: ${({ theme }) => theme.palette.background.modalShadow};
  }
  .${dialogClasses.paper} {
    min-width: ${({ $size }) => getSize($size).minWidth};
    max-width: ${({ $size }) => getSize($size).maxWidth}
    }
  }
`;
