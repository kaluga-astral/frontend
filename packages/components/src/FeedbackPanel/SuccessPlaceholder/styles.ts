import { Placeholder } from '../../Placeholder';
import { styled } from '../../styles';

export const StyledPlaceholder = styled(Placeholder)`
  padding: ${({ theme }) => theme.spacing(0, 4, 6, 4)};
`;
