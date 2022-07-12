import { SvgIconProps } from '@mui/material';

import { ChevronWrapper } from './styles';

export const Chevron = (props: ChevronProps): JSX.Element => (
  <ChevronWrapper {...props} />
);

export type ChevronProps = { isActive?: boolean; className?: string } & Omit<
  SvgIconProps,
  'children' | 'classes' | 'ref' | 'sx'
>;
