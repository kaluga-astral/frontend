import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type MenuProps = WithoutEmotionSpecific<MuiMenuProps>;

export const Menu = (props: MenuProps) => <MuiMenu {...props} />;
