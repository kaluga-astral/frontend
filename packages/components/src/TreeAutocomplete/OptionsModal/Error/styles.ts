import { styled } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  justify-content: center;

  height: 100%;
`;
