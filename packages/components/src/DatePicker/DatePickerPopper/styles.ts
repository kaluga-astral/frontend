import { Popper } from '@mui/material';

import { styled } from '../../styles';

export const DatePickerPopoverInner = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};

  background: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.small};
  box-shadow: ${({ theme }) => theme.elevation[200]};
`;

export const PopperWrapper = styled(Popper)`
  z-index: ${({ theme }) => theme.zIndex.tooltip};
`;
