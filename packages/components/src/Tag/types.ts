import { ReactElement } from 'react';

import { BadgeColor } from '../Badge';

import { TagColors, TagStates, TagVariants } from './enums';

export type TagColor = `${TagColors}`;

export type TagVariant = `${TagVariants}`;

export type TagSize = 'small' | 'medium' | 'large';

export type TagState = `${TagStates}`;

export type TagAddonProps = {
  color?: BadgeColor;
};

export type TagAddon = (props: TagAddonProps) => ReactElement | null;
