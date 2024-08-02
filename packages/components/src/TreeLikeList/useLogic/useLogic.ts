import { useMemo } from 'react';

import { getFormatDisabledItems } from '../../Tree/utils';
import { type DisabledItemValue } from '../types';

type UseLogicParams = {
  disabledItems?: Array<DisabledItemValue>;
};

export const useLogic = ({ disabledItems }: UseLogicParams) => {
  const formattedDisabledItems = useMemo(
    () => getFormatDisabledItems(disabledItems),
    [disabledItems],
  );

  return { formattedDisabledItems };
};
