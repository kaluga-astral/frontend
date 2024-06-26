import { Description } from '../Description';
import { styled } from '../styles';

type DescriptionNameProps = {
  $nameMaxWidth?: string;
};

export const StyledDescriptionName = styled(Description.Name, {
  shouldForwardProp: (prop) => prop !== '$maxWidth',
})<DescriptionNameProps>`
  max-width: ${({ $nameMaxWidth }) => ($nameMaxWidth ? $nameMaxWidth : 'none')};
`;

export const Wrapper = styled.dl`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(1)};

  margin: 0;
`;
