import { styled } from '../styles';
import { MenuItem } from '../MenuItem';
import { Tag, type TagProps } from '../Tag';

export const TagsWrapper = styled.div`
  overflow: hidden;
  display: flex;

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

type StyledTagProps = TagProps & {
  $shrinks?: boolean;
};

export const StyledTag = styled(Tag)<StyledTagProps>`
  min-width: ${({ $shrinks }) => ($shrinks ? '30px' : 'unset')};
  max-width: 246px;

  & {
    .MuiBox-root {
      display: inline;
    }
  }
`;
