import { styled } from '../styles';
import { MenuItem } from '../MenuItem';

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 64px;

  .MuiCircularProgress-root {
    margin-top: ${({ theme }) => theme.spacing(5)};

    color: ${({ theme }) => theme.palette.grey['900']};
  }
`;

export const Placeholder = styled(MenuItem)`
  display: none;
`;
