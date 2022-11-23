import { styled } from '../../styles';

export const ButtonGroupWrapper = styled.div`
  display: flex;
  grid-area: actions;
  gap: ${({ theme }) => theme.spacing(1)};
`;
