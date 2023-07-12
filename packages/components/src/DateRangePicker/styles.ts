import { styled } from '../styles';

export const DateRangePickerSplitter = styled.div`
  margin: ${({ theme }) => theme.spacing(-4, 4)};

  border-left: ${({ theme }) => theme.spacing(1)} solid
    ${({ theme }) => theme.palette.grey[300]};
`;
