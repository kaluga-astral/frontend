import { AutosaveErrorFillMd } from '@astral/icons';

import { styled } from '../../styles';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;

  height: 16px;
  padding: ${({ theme }) => theme.spacing(0, 2)};

  font-size: ${({ theme }) => theme.typography.h7.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  line-height: ${({ theme }) => theme.typography.h8.lineHeight};
`;

export const ErrorIcon = styled(AutosaveErrorFillMd)`
  color: ${({ theme }) => theme.palette.red[800]};
`;

export const StyledTypography = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
