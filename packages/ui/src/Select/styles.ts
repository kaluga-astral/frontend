import { styled } from '../styles';
import { MenuItem } from '../MenuItem';

export const SelectTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -${({ theme }) => theme.spacing(1)};

  .MuiChip-root {
    margin-bottom: ${({ theme }) => theme.spacing(1)};

    background-color: ${({ theme }) => theme.palette.grey['300']};
  }

  .MuiChip-root:hover {
    background-color: ${({ theme }) => theme.palette.grey['300']};
  }

  .MuiChip-root:not(:last-of-type) {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`;

export const SelectProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 64px;

  .MuiCircularProgress-root {
    margin-top: ${({ theme }) => theme.spacing(5)};

    color: ${({ theme }) => theme.palette.grey['900']};
  }
`;

export const SelectPlaceholder = styled(MenuItem)`
  display: none;
`;
