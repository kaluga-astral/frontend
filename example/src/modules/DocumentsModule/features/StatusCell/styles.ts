import { styled } from '@example/shared';

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: ${({ theme }) => theme.spacing(1, 2)};
  align-items: center;

  & > *:last-child {
    grid-column: 2;
  }
`;
