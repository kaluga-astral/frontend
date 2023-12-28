import { type AvatarProps as MuiAvatarProps } from '@mui/material';
import { forwardRef } from 'react';

import { type WithoutEmotionSpecific } from '../types';

import { AvatarRoot } from './styles';

export type AvatarProps = WithoutEmotionSpecific<MuiAvatarProps>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return <AvatarRoot {...props} ref={ref} />;
});
