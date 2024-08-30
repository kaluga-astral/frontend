import { tooltipClasses } from '@mui/material';

import { styled } from '../../styles/styled';
import { Tooltip } from '../../Tooltip';
import { Typography } from '../../Typography';

export const StyledTooltip = styled(Tooltip)`
  & .${tooltipClasses.tooltip} {
    max-width: none;
  }
`;

export const StyledTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
