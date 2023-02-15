import { ReactElement } from 'react';

import { TagAddonProps } from '../Tag';

export type CheckableTagAddonProps = {
  checked?: boolean;
  disabled?: boolean;
} & TagAddonProps;

export type CheckableTagAddon = (
  props: CheckableTagAddonProps,
) => ReactElement | null;
