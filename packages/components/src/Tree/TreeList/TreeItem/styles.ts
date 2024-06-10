import { Typography } from '../../../Typography';
import { styled } from '../../../styles';

export const Label = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
