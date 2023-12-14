import { styled } from '../styles';
import { Typography } from '../Typography';

export const CodeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeFieldDigitsWrapper = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const CodeFieldDigitsItem = styled.li`
  list-style-type: none;
`;

export const CodeFieldDigit = styled.input<{ isError?: boolean }>`
  width: 62px;
  height: 60px;
  padding: ${({ theme }) => theme.spacing(4, 6)};

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme, isError }) => {
    return isError ? theme.palette.error.dark : theme.palette.grey[900];
  }};

  background: ${({ theme }) => theme.palette.background.elementHover};
  border: unset;
  border-radius: ${({ theme }) => theme.shape.small};
  outline: none;
`;

export const CodeFieldLabel = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
