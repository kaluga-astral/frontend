import { styled } from '../../styles';

export const Wrapper = styled.div<{ $gridColumns: string }>`
  display: grid;
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};

  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
`;

export const CheckboxCell = styled.div`
  align-self: center;
`;
