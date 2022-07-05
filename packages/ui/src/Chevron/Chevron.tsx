import { SvgIconProps } from '@mui/material';

import { ChevronWrapper } from './styles';

export const Chevron = (props: IChevron): JSX.Element => (
  <ChevronWrapper {...props} />
);

export type IChevron = { isActive?: boolean; className?: string } & Omit<
  SvgIconProps,
  'children' | 'classes' | 'ref' | 'sx'
>;
