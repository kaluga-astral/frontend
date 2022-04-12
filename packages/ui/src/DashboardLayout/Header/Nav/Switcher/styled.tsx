import { styled } from '../../../../styles';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  color: ${({ theme }) => theme.palette.grey[900]};
`;
