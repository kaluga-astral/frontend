import { styled } from '../styles';

export const DateRangePickerSplitter = styled.div`
  border-left: ${({ theme }) => theme.spacing(1)} solid
    ${({ theme }) => theme.palette.grey[300]};
  margin: ${({ theme }) => theme.spacing(-4, 4)};
`;
