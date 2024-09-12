import { type HintIconProps } from '../HintIcon';
import { useIconColor } from '../hooks';

import { InfoFill, InfoOutline, QuestionFill, QuestionOutline } from './styles';

type IconProps = Pick<HintIconProps, 'variant' | 'iconOption'>;

export const Icon = ({ variant, iconOption }: IconProps) => {
  const iconColor = useIconColor({ color: iconOption?.color });

  const { variant: iconOptionVariant = 'fill' } = iconOption || {};
  const getIcon = () => {
    switch (variant) {
      case 'info':
        return iconOptionVariant === 'fill' ? (
          <InfoFill $color={iconColor} />
        ) : (
          <InfoOutline $color={iconColor} />
        );
      case 'question':
        return iconOptionVariant === 'fill' ? (
          <QuestionFill $color={iconColor} />
        ) : (
          <QuestionOutline $color={iconColor} />
        );
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};
