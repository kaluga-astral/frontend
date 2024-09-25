import { DataList } from '../../DataList';
import type { ObjectWithId } from '../types';

import { type DataDisplayStrategyProps } from './types';

export const VirtualDataDisplayStrategy = <TDataItem extends ObjectWithId>(
  props: DataDisplayStrategyProps<TDataItem>,
) => {
  const { data, keyId, itemContent } = props;

  if (!data) {
    return null;
  }

  return (
    <DataList
      keyId={keyId}
      data={data}
      itemContent={itemContent}
      onRetry={() => undefined}
    />
  );
};
