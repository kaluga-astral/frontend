import { Tag, type TagProps } from '../../../Tag';
import { styled } from '../../../styles';

type StyledTagProps = TagProps & {
  $shrinks?: boolean;
};

export const StyledTag = styled(Tag, {
  shouldForwardProp: (prop) => prop !== '$shrinks',
})<StyledTagProps>`
  min-width: ${({ $shrinks }) => ($shrinks ? '30px' : 'unset')};
  max-width: 246px;

  & {
    .MuiBox-root {
      display: inline;
    }
  }
`;
