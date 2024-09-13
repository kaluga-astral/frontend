import { type HintIconProps } from '../HintIcon';
import { ICONS } from '../constants';
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
  const { iconOptionVariant, iconColor } = useLogic(props);

  const { variant, onClick, note } = props;

  return (
    <Tooltip title={note} placement="bottom">
      <IconWrapper onClick={onClick} $color={iconColor}>
        {ICONS[variant][iconOptionVariant]}
      </IconWrapper>
    </Tooltip>
  );
};
