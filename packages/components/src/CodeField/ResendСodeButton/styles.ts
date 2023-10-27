import { styled } from '../../styles/styled';

export const ResendCodeButtonWrapper = styled.footer<{ isError?: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 10px;

  margin-top: ${({ theme, isError }) => {
    return isError ? theme.spacing(1) : theme.spacing(6);
  }}};
`;
