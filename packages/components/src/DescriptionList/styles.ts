import { Description } from '../Description';
import { styled } from '../styles';

type DescriptionNameProps = {
  $maxWidth?: string;
};

export const StyledDescriptionName = styled(Description.Name, {
  shouldForwardProp: (prop) => prop !== '$maxWidth',
})<DescriptionNameProps>`
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const Wrapper = styled.dl`
  display: grid;
  row-gap: 8px;
`;
