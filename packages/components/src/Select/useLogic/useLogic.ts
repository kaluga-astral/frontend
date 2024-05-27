import { type SelectChangeEvent } from '@mui/material';
import { Children, useRef, useState } from 'react';

import { type SelectProps } from '../Select';

export function useLogic<Value>({
  value,
  onChange,
  children,
  open: externalIsOpened,
  defaultOpen,
}: SelectProps<Value>) {
  const [isOpened, setOpened] = useState(
    defaultOpen || externalIsOpened || false,
  );
  const resetButtonRef = useRef<HTMLButtonElement>(null);

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
    resetButtonRef,
    openSelect,
    closeSelect,
    onClearAll,
  };
}
