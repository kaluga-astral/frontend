import { SvgIconProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import { ChevronWrapper } from './styles';

export const Chevron = (props: ChevronProps): JSX.Element => (
  <ChevronWrapper {...props} />
);

export type ChevronProps = { isActive?: boolean; className?: string } & Omit<
  WithoutEmotionSpecific<SvgIconProps>,
  'children' | 'classes' | 'ref'
>;
