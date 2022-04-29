import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';

import { styled } from '../styles';

interface NotificationIconProps {
  filled: boolean;
}

export const InfoNotificationIcon = styled(InfoFillMd, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;

export const SuccessNotificationIcon = styled(SuccessFillMd, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;

export const WarningNotificationIcon = styled(WarningFillMd, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;

export const ErrorNotificationIcon = styled(ErrorFillMd, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;
