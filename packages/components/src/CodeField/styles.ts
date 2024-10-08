import { styled } from '../styles';
import { Typography } from '../Typography';
import { Skeleton } from '../Skeleton';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DigitsWrapper = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};

  margin: 0;
  padding: 0;
`;

export const DigitsItem = styled.li`
  flex-grow: 1;

  min-width: 44px;
  max-width: 60px;

  list-style-type: none;
`;

export const Digit = styled.input<{ isError?: boolean }>`
  width: 100%;
  min-width: 44px;
  max-width: 60px;
  height: 60px;
  padding: ${({ theme }) => theme.spacing(4, 1)};

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme, isError }) => {
    return isError ? theme.palette.error.dark : theme.palette.grey[900];
  }};
  text-align: center;

  background: ${({ theme }) => theme.palette.background.elementHover};
  border: unset;
  border-radius: ${({ theme }) => theme.shape.small};
  outline: none;
`;

export const FieldLabel = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const StyledSkeleton = styled(Skeleton)`
  min-width: 44px;
  max-width: 60px;
`;
