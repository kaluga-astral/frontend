import { type SelectChangeEvent } from '@mui/material';
import { Children } from 'react';

import { type SelectProps } from '../Select';

export function useLogic<Value>({
  value,
  onChange,
  children,
}: SelectProps<Value>) {
  const onClearAll = () => {
    // Очищаем значение только если оно массив
    if (!Array.isArray(value)) {
      return;
    }

    const changeEvent = {
      target: {
        value: [] as string[],
      },
    } as SelectChangeEvent<string[]>;

    type OnChangeFn = (e: SelectChangeEvent<string[]>) => void;

    (onChange as OnChangeFn)?.call({}, changeEvent);
  };

  const isShowingClearButton = Array.isArray(value) && value.length > 0;

  const isNoData = !Boolean(Children.count(children));

  return {
    isNoData,
    isShowingClearButton,
    onClearAll,
  };
}
