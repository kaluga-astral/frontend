import { AutosaveErrorFillMd } from '@astral/icons';

import { styled } from '../../styles';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const ErrorIcon = styled(AutosaveErrorFillMd)`
  color: ${({ theme }) => theme.palette.red[800]};
`;

export const StyledTypography = styled(Typography)`
  align-self: flex-end;

  padding-right: ${({ theme }) => theme.spacing(2)};
`;
