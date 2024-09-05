import { paperClasses } from '@mui/material';

import { Popover } from '../../Popover';
import { styled } from '../../styles';

export const StyledPopover = styled(Popover)`
  .${paperClasses.root} {
    margin-top: -${({ theme }) => theme.spacing(3)};
  }
`;

export const InnerContainer = styled.div`
  display: flex;

  padding: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: unset;
  }
`;
