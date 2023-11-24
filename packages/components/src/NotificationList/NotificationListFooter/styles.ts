import { styled } from '../../styles';

export const Footer = styled('div')`
  display: flex;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing(4, 6)};
`;
