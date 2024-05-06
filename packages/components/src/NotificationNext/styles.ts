import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';

import { styled } from '../styles';

interface NotificationIconProps {
  $filled: boolean;
}

export const InfoNotificationIcon = styled(InfoFillMd, {
  shouldForwardProp: (prop) => prop !== '$filled',
})<NotificationIconProps>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.palette.background.default : theme.palette.primary[800]};
`;

export const SuccessNotificationIcon = styled(SuccessFillMd, {
  shouldForwardProp: (prop) => prop !== '$filled',
})<NotificationIconProps>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.palette.background.default : theme.palette.green[800]};
`;

export const WarningNotificationIcon = styled(WarningFillMd, {
  shouldForwardProp: (prop) => prop !== '$filled',
})<NotificationIconProps>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.palette.background.default : theme.palette.yellow[800]};
`;

export const ErrorNotificationIcon = styled(ErrorFillMd, {
  shouldForwardProp: (prop) => prop !== '$filled',
})<NotificationIconProps>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.palette.background.default : theme.palette.red[800]};
`;
