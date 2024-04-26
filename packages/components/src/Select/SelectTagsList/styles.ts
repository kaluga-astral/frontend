import { styled } from '../../styles';

export const TagsWrapper = styled.div`
  overflow: hidden;
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(1)};

  margin-bottom: -${({ theme }) => theme.spacing(1)};

  .MuiChip-root {
    background-color: ${({ theme }) => theme.palette.grey['300']};
  }

  .MuiChip-root:hover {
    background-color: ${({ theme }) => theme.palette.grey['300']};
  }
`;
