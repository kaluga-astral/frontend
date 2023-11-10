import type { SlideProps as MuiSlideProps } from '@mui/material';
import { Slide as MuiSlide } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type SlideProps = WithoutEmotionSpecific<MuiSlideProps>;

export const Slide = (props: SlideProps) => <MuiSlide {...props} />;
