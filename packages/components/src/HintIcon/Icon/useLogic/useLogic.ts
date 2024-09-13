import { type IconProps } from '../Icon';
import { useIconColor } from '../hooks';
import { type IconColor } from '../../enums';

type UseLogicParams = IconProps;

export const useLogic = ({ iconOption }: UseLogicParams) => {
  const iconColor = useIconColor({ color: iconOption?.color as IconColor });

  const { variant: iconOptionVariant = 'fill' } = iconOption || {};

  return { iconOptionVariant, iconColor };
};
