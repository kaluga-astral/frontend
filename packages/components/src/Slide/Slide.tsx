import { Slide as MuiSlide, SlideProps as MuiSlideProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type SlideProps = WithoutEmotionSpecific<MuiSlideProps>;

export const Slide = (props: SlideProps) => <MuiSlide {...props} />;
