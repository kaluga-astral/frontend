import { type ReactNode } from 'react';

import type { RequiredKeys } from '../../types';

export type DataDisplayStrategyProps<
  TDataItem extends Record<string, unknown>,
> = {
  keyId: RequiredKeys<TDataItem>;
  data?: Array<TDataItem>;
  itemContent: (item: TDataItem) => ReactNode;
};
