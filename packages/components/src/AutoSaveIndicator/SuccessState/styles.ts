import { AutosaveFillMd } from '@astral/icons';

import { styled } from '../../styles/styled';
import { Typography } from '../../Typography';

export const StyledTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const SuccessIcon = styled(AutosaveFillMd)`
  color: ${({ theme }) => theme.palette.green[800]};
`;
