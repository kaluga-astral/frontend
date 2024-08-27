import {
  Dialog as MuiDialog,
  backdropClasses,
  dialogClasses,
} from '@mui/material';

import { styled } from '../styles';

const sizes = {
  xs: { minWidth: '300px', maxWidth: '399px' },
  sm: { minWidth: '400px', maxWidth: '499px' },
  md: { minWidth: '500px', maxWidth: '599px' },
  lg: { minWidth: '600px', maxWidth: '699px' },
  xl: { minWidth: '700px', maxWidth: '980px' },
};

export const StyledDialog = styled(MuiDialog, {
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})<{ $size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  &.${dialogClasses.root} .${backdropClasses.root} {
    background-color: ${({ theme }) => theme.palette.background.modalShadow};
  }
  .${dialogClasses.paper} {
    min-width: ${({ $size }) => sizes[$size].minWidth};
    max-width: ${({ $size }) => sizes[$size].maxWidth}
    }
  }
`;
