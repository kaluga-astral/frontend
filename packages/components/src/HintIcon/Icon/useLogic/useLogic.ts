import { type IconProps } from '../Icon';
import { type IconColor } from '../../enums';
import { ICONS } from '../../constants';

import { useIconColor } from './hooks';

type UseLogicParams = IconProps;

export const useLogic = ({ iconOption, variant }: UseLogicParams) => {
  const iconColor = useIconColor({ color: iconOption?.color as IconColor });

  const { variant: iconOptionVariant = 'fill' } = iconOption || {};

  const getIcon = () => {
    const icon = ICONS[variant][iconOptionVariant];

    if (icon) {
      return icon;
    }

    return ICONS.info.fill;
  };

  return { getIcon, iconColor };
};
