import { type HintIconProps } from '../HintIcon';
import { Tooltip } from '../../Tooltip';

import { IconWrapper } from './styles';
import { useLogic } from './useLogic';

export type IconProps = Pick<
  HintIconProps,
  'variant' | 'iconOption' | 'note'
> & {
  onClick: () => void;
};

export const Icon = (props: IconProps) => {
  const { getIcon, iconColor } = useLogic(props);

  const { onClick, note } = props;

  return (
    <Tooltip title={note} placement="bottom">
      <IconWrapper onClick={onClick} $color={iconColor}>
        {getIcon()}
      </IconWrapper>
    </Tooltip>
  );
};
