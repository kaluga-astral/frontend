import type { ObjectWithId } from '../types';

import { type DataDisplayStrategyProps } from './types';

export const SimpleDataDisplayStrategy = <TDataItem extends ObjectWithId>(
  props: DataDisplayStrategyProps<TDataItem>,
) => {
  const { data, itemContent } = props;

  if (!data) {
    return null;
  }

  return <>{data.map((item) => itemContent(item))}</>;
};
