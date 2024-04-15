import { Radio } from '../Radio';
import { styled } from '../styles';

export const Wrapper = styled.div<{ $disabled?: boolean }>`
  position: relative;

  margin-top: -1px;

  & .Mui-checked ~ label {
    z-index: 1;

    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  & .Mui-disabled ~ label {
    cursor: default;

    background-color: ${({ theme }) => theme.palette.background.element};
  }

  &:first-of-type {
    margin-top: 0;

    label {
      border-top-left-radius: ${({ theme }) => theme.shape.small};
      border-top-right-radius: ${({ theme }) => theme.shape.small};
    }
  }

  &:last-of-type {
    label {
      border-bottom-right-radius: ${({ theme }) => theme.shape.small};
      border-bottom-left-radius: ${({ theme }) => theme.shape.small};
    }
  }
`;

export const StyledRadio = styled(Radio)`
  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Label = styled.label`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  padding: ${({ theme }) => theme.spacing(5)};

  background-color: ${({ theme }) => theme.palette.background.default};
  border: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};

  transition: ${({ theme }) => {
    return theme.transitions.create(['background-color', 'border-color'], {
      duration: theme.transitions.duration.standard,
    });
  }};

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.elementHover};
  }
`;
