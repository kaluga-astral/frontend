import { SvgIconProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type ChevronProps = { isActive?: boolean; className?: string } & Omit<
  WithoutEmotionSpecific<SvgIconProps>,
  'children' | 'classes' | 'ref'
>;
