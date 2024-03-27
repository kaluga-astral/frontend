import {
  MenuItem as MuiMenuItem,
  type MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { type TooltipProps } from '../Tooltip';

import { Link, MenuItemTooltip } from './styles';

export type MenuItemProps = WithoutEmotionSpecific<MuiMenuItemProps> & {
  withoutContainer?: boolean;
  /**
     Сообщение об ошибке в тултипе
     **/
  disabledReason?: TooltipProps['title'];
  tooltipPlacement?: TooltipProps['placement'];
  /**
     При передачи этого пропа, MenuItem оборачивается в Link
     **/
  href?: string;
};

export const MenuItem = (props: MenuItemProps) => {
  const {
    withoutContainer,
    disabled,
    disabledReason,
    tooltipPlacement,
    href,
    ...rest
  } = props;

  if (disabled && disabledReason) {
    return (
      <MenuItemTooltip
        arrow
        title={disabledReason}
        placement={tooltipPlacement}
        withoutContainer={withoutContainer}
        children={<MuiMenuItem disabled={disabled} {...rest} />}
      />
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <MuiMenuItem disabled={disabled} {...rest} />
      </Link>
    );
  }

  return <MuiMenuItem disabled={disabled} {...rest} />;
};
