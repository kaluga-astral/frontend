import { styled } from '../styles';
import { Typography } from '../Typography';
import { Select } from '../Select';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const Range = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
`;

export const RangeSelector = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['900']};
`;

export const RangeWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  top: 10px;

  width: 80px;
  height: 32px;

  border: 2px solid ${({ theme }) => theme.palette.grey['300']};
  border-radius: 3px;
`;
