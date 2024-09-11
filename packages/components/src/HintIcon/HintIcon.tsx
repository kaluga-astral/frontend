import { Tooltip } from '../Tooltip';

import { getIcon } from './utils';

export type HintIconProps = {
  variant: 'question' | 'info';
  iconOption?: {
    variant?: 'fill' | 'outline';
    color?: 'warning' | 'grey' | 'lightGrey';
  };
  title: string;
  note: string;
};

export const HintIcon = (props: HintIconProps) => {
  const { variant, title, note, iconOption } = props;

  const { variant: iconOptionVariant = 'fill' } = iconOption || {};

  return (
    <Tooltip title={note}>
      <div>{getIcon(variant, iconOptionVariant)}</div>
    </Tooltip>
  );
};
