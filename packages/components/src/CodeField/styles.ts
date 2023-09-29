import { styled } from '../styles';

export const CodeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeFieldDigitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 432px;
`;

export const Digit = styled.input`
  width: 62px;
  height: 60px;

  border: unset;
  border-radius: ${({ theme }) => theme.shape.small};
  padding: 18px 25px;
  outline: none;

  font-size: 20px;
  color: ${({ theme }) => theme.palette.grey[900]};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

  background: ${({ theme }) => theme.palette.background.elementHover};
`;
