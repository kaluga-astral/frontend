import { CrossOutlineSm } from '@astral/icons';

import { IconButton } from '../../IconButton';
import { styled } from '../../styles';
import { Typography } from '../../Typography';
import { type ActionsDirection, type Variant } from '../types';

import { getActionsDirection, getNotificationTemplateStyles } from './utils';

type NotificationCloseButtonProps = {
  filled: boolean;
};

type NotificationTemplateProps = {
  variant: Variant;
  filled: boolean;
};

type NotificationActionsProps = {
  actionsDirection: ActionsDirection;
};

type NotificationCloseIconProps = {
  filled: boolean;
};

export const Wrapper = styled.article<NotificationTemplateProps>`
  padding: ${({ theme }) => theme.spacing(4)};

  ${({ theme, variant, filled }) =>
    getNotificationTemplateStyles(theme, variant, filled)}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 32px;
`;

export const Content = styled.div`

`;

export const Footer = styled.footer<NotificationActionsProps>`
  display: flex;
  justify-content: ${({ actionsDirection }) =>
    getActionsDirection(actionsDirection)};

  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const IconWrapper = styled.div`
  display: flex;

  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const CloseIcon = styled(CrossOutlineSm, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationCloseIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;

export const CloseButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationCloseButtonProps>`
  align-self: center;

  margin-left: ${({ theme }) => theme.spacing(4)};
  padding: 0;

  &:hover {
    background-color: ${({ filled }) => filled && 'inherit'};
  }
`;

export const Title = styled(Typography)`
  flex: 1;

  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;
