import { styled } from '../../styles/styled';

export const ResendCodeButtonWrapper = styled.footer<{ isError?: boolean }>`
  display: flex;
  gap: 10px;
  align-items: baseline;

  margin-top: ${({ theme, isError }) => {
    return isError ? theme.spacing(1) : theme.spacing(6) ;
  }};
`;
