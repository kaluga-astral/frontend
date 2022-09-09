import { styled } from '../../../../styles';

export const DatePickerPopoverInner = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: ${({ theme }) => theme.elevation[200]};
  border-radius: ${({ theme }) => theme.shape.small};
`;
