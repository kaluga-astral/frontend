import {
  AutosaveErrorFillMd,
  AutosaveFillMd,
  AutosaveLoaderFillMd,
} from '@astral/icons';
import { tooltipClasses } from '@mui/material';

import { keyframes, styled } from '../styles';
import { Typography } from '../Typography';
import { Tooltip } from '../Tooltip';

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
`;

export const StyledTooltip = styled(Tooltip)`
  & .${tooltipClasses.tooltip} {
    max-width: none;
  }
`;

export const StyledButton = styled(Typography)`
  cursor: pointer;

  align-self: flex-end;

  padding: ${({ theme }) => theme.spacing(0, 2)};

  background: none;
  border: none;
`;
