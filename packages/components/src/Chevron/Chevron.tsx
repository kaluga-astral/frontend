import { type SvgIconProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { ChevronIcon } from './styles';

export type ChevronProps = { isActive?: boolean; className?: string } & Omit<
  WithoutEmotionSpecific<SvgIconProps>,
  'children' | 'classes' | 'ref'
>;

export const Chevron = (props: ChevronProps): JSX.Element => (
  <ChevronIcon {...props} />
);
