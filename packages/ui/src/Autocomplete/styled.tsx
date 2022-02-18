import { FormControl, Stack } from '@mui/material';

import { styled } from '../styles';

type InputWrapperProps = {
  focused: boolean;
  popupOpen: boolean;
  success?: boolean;
  error?: boolean;
  size: string;
};

export const StyledFormControl = styled(FormControl)`
  min-width: 300px;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  cursor: text;
  display: flex;
  align-items: center;
  border: 2px solid
    ${({ theme, focused }) => {
      if (focused) return theme.palette.primary['700'];
      return theme.palette.grey['300'];
    }};
  border-radius: ${({ theme }) => theme.shape.small};
  padding-right: ${({ theme }) => theme.spacing(2)};
  min-height: ${({ size }) => (size === 'small' ? '32px' : '40px')};

  .MuiInputAdornment-positionEnd {
    > svg:last-of-type {
      color: ${({ theme }) => theme.palette.grey['900']};
      transform: rotate(${({ popupOpen }) => (popupOpen ? 180 : 0)}deg);
      transition: ${({ theme }) =>
        theme.transitions.create('transform', {
          duration: theme.transitions.duration.short,
        })};
    }
  }

  input {
    width: 0;
    min-height: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    min-width: 30px;
    flex-grow: 1;
    border: none;
    outline: none;
    line-height: ${({ theme }) => theme.typography.pxToRem(20)};
    padding: 0;
  }
`;

export const TagsWrapper = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1, 0)};
  flex: 1;

  > div:first-of-type {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
