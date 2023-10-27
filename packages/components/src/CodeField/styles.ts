import { styled } from '../styles';
import { Typography } from '../Typography';

export const CodeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeFieldDigitsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Digit = styled.input<{ isError?: boolean }>`
  width: 62px;
  height: 60px;

  border: unset;
  border-radius: ${({ theme }) => theme.shape.small};
  padding: 18px 25px;
  outline: none;

  font-size: 20px;

  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  background: ${({ theme }) => theme.palette.background.elementHover};

  color: ${({ theme, isError }) => {
    return isError ? theme.palette.error.dark : theme.palette.grey[900];
  }}};
`;

export const CodeFieldLabel = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
