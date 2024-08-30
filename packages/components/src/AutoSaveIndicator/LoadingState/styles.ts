import { AutosaveLoaderFillMd } from '@astral/icons';

import { keyframes } from '../../styles';
import { styled } from '../../styles/styled';
import { Typography } from '../../Typography';

const loading = keyframes`
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: 0.2;
  }
`;

export const LoadingIcon = styled(AutosaveLoaderFillMd)`
  animation: ${loading} 1.5s infinite;
`;

export const StyledTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
