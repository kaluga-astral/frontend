import { styled } from '../styles';

export const TagsWrapper = styled.div`
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

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 64px;
  align-items: center;

  .MuiCircularProgress-root {
    margin-top: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.palette.grey['900']};
  }
`;
