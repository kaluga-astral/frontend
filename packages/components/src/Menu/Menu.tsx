import { Menu as MuiMenu, type MenuProps as MuiMenuProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type MenuProps = WithoutEmotionSpecific<MuiMenuProps>;

export const Menu = (props: MenuProps) => <MuiMenu {...props} />;
