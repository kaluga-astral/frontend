import {
  AutosaveErrorFillMd,
  AutosaveFillMd,
  AutosaveLoaderFillMd,
} from '@astral/icons';

import { keyframes, styled } from '../styles';
import { Typography } from '../Typography';

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

  padding: ${({ theme }) => theme.spacing(2, 0)};
`;

export const StyledTypography = styled(Typography)`
  align-self: flex-end;

  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const LoadingIcon = styled(AutosaveLoaderFillMd)`
  animation: ${loading} 2s infinite;
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
