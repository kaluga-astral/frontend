import { styled } from '../../styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(8)};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Image = styled('img')`
  max-width: ${({ theme }) => theme.spacing(63)};
`;
