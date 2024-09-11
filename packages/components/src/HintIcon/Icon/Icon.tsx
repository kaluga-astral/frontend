import { type HintIconProps } from '../HintIcon';
import { useIconColor } from '../hooks';

import { InfoFill, InfoOutline, QuestionFill, QuestionOutline } from './styles';

type IconProps = Pick<HintIconProps, 'variant' | 'iconOption'>;

export const Icon = ({ variant, iconOption }: IconProps) => {
  const iconColor = useIconColor({ color: iconOption?.color });
  const getIcon = () => {
    switch (variant) {
      case 'info':
        return iconOption?.variant === 'fill' ? (
          <InfoFill $color={iconColor} />
        ) : (
          <InfoOutline $color={iconColor} />
        );
      case 'question':
        return iconOption?.variant === 'fill' ? (
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
