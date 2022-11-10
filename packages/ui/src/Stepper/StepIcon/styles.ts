import {
  CircleErrorFillMd,
  StepDefaultFillMd,
  SuccessFillMd,
} from '@astral/icons';

import { styled } from '../../styles';

export const StepErrorIcon = styled(CircleErrorFillMd)`
  color: ${({ theme }) => theme.palette.error.dark};
`;

export const StepSuccessIcon = styled(SuccessFillMd)`
  color: ${({ theme }) => theme.palette.success.dark};
`;

export const StepDefaultIcon = styled(StepDefaultFillMd)`
  color: ${({ theme }) => theme.palette.grey[400]};
`;
