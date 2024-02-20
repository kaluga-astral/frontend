import {
  CircleErrorFillMd,
  StepDefaultFillMd,
  SuccessFillMd,
} from '@astral/icons';

import { styled } from '../../styles';

export const ErrorIcon = styled(CircleErrorFillMd)`
  color: ${({ theme }) => theme.palette.error.dark};
`;

export const SuccessIcon = styled(SuccessFillMd)`
  color: ${({ theme }) => theme.palette.success.dark};
`;

export const SelectIcon = styled(StepDefaultFillMd)<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) =>
    $isError ? theme.palette.error.dark : theme.palette.success.dark};
`;

export const DefaultIcon = styled(StepDefaultFillMd)`
  color: ${({ theme }) => theme.palette.grey[400]};
`;
