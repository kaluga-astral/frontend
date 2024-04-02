import { type MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { type MenuItem as MuiMenuItem } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledMenuItem } from './styles';

// нужно для избежания ошибок при проверке типов в существующем коде
type MuiMenuItemT = typeof MuiMenuItem;

export type MenuItemProps = WithoutEmotionSpecific<MuiMenuItemProps>;

export const MenuItem: MuiMenuItemT = StyledMenuItem as MuiMenuItemT;
