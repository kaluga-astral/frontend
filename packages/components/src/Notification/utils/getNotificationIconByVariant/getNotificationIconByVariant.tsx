import { DEFAULT_NOTIFICATION_PROPS } from '../../constants';
import {
  ErrorNotificationIcon,
  InfoNotificationIcon,
  SuccessNotificationIcon,
  WarningNotificationIcon,
} from '../../styled';
import { Variant } from '../../types';

export const getNotificationIconByVariant = (
  variant: Variant,
  filled = DEFAULT_NOTIFICATION_PROPS.filled,
): JSX.Element => {
  const mapOfNotificationIcons = {
    info: <InfoNotificationIcon filled={filled} />,
    success: <SuccessNotificationIcon filled={filled} />,
    warning: <WarningNotificationIcon filled={filled} />,
    error: <ErrorNotificationIcon filled={filled} />,
  };

  return mapOfNotificationIcons[variant];
};
