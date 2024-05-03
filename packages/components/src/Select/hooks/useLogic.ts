import { type SelectChangeEvent } from '@mui/material';
import { Children, useState } from 'react';

import { type SelectProps } from '../Select';

export function useLogic<Value>({
  value,
  onChange,
  children,
  open: externalIsOpened,
}: SelectProps<Value>) {
  const [isOpened, setOpened] = useState(externalIsOpened || false);

  const openSelect = () => setOpened(true);
  const closeSelect = () => setOpened(false);

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
    isOpened,
    isNoData,
    isShowingClearButton,
    openSelect,
    closeSelect,
    onClearAll,
  };
}
