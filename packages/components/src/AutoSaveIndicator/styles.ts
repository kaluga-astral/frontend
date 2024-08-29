import {
  AutosaveErrorFillMd,
  AutosaveFillMd,
  AutosaveLoaderFillMd,
} from '@astral/icons';
import { tooltipClasses } from '@mui/material';

import { keyframes, styled } from '../styles';
import { Typography } from '../Typography';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

const loading = keyframes`
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: 0.2;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const StyledTypography = styled(Typography)`
  align-self: flex-end;

  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const LoadingIcon = styled(AutosaveLoaderFillMd)`
  animation: ${loading} 1.5s infinite;
`;

export const ErrorIcon = styled(AutosaveErrorFillMd)`
  color: ${({ theme }) => theme.palette.red[800]};
`;

export const SuccessIcon = styled(AutosaveFillMd)`
  color: ${({ theme }) => theme.palette.green[800]};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopoverContent = styled.div`
  display: flex;
  align-items: center;

  margin: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTooltip = styled(Tooltip)`
  & .${tooltipClasses.tooltip} {
    max-width: none;
  }
`;

export const StyledButton = styled(Button)`
  cursor: pointer;

  align-self: flex-end;

  height: 16px;
  padding: ${({ theme }) => theme.spacing(0, 2)};

  font-size: 12px;
  line-height: 16px;

  background: none;
  border: none;
`;

export const PopoverTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
