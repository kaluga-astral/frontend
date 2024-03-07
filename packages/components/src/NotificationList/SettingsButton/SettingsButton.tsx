import { SettingsOutlineMd } from '@astral/icons';

import { IconButton } from '../../IconButton';
import { Divider } from '../../Divider';

type Props = {
  onClick?: () => void;
};

export const SettingsButton = ({ onClick }: Props) => {
  return (
    <>
      <IconButton variant="text" onClick={onClick}>
        <SettingsOutlineMd />
      </IconButton>
      <Divider orientation="vertical" />
    </>
  );
};
