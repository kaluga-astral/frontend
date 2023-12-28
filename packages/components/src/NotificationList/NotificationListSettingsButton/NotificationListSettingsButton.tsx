import { SettingsOutlineMd } from '@astral/icons';

import { IconButton } from '../../IconButton';
import { Divider } from '../../Divider';

type NotificationListSettingsButtonProps = {
  onClick?: () => void;
};

export const NotificationListSettingsButton = ({
  onClick,
}: NotificationListSettingsButtonProps) => {
  return (
    <>
      <IconButton variant="text" onClick={onClick}>
        <SettingsOutlineMd />
      </IconButton>
      <Divider orientation="vertical" />
    </>
  );
};
