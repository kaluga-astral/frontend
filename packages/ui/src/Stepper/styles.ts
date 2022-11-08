import { NextOutlineMd } from '@astral/icons';

import { styled } from '../styles';

import { StepConnector } from './StepConnector';

export const NextStepperConnector = styled(NextOutlineMd)`
  color: ${({ theme }) => theme.palette.grey[400]};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;

export const LineStepperConnector = styled(StepConnector)`
  .MuiStepConnector-lineHorizontal {
    border-color: ${({ theme }) => theme.palette.grey[300]};
    border-width: 2px;
  }
`;
