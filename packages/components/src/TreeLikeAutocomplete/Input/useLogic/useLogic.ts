import {
  type ForwardedRef,
  type SyntheticEvent,
  useEffect,
  useRef,
} from 'react';

import { useForwardedRef } from '../../../hooks';
import type { TreeLikeAutocompleteValue } from '../../types';
import { type InputProps } from '../Input';

type UseLogicParams = InputProps;

export const useLogic = ({
  value,
  disabled,
  inputRef: externalInputRef,
  onChange,
}: UseLogicParams) => {
  const inputRef = useForwardedRef<HTMLInputElement>(
    externalInputRef as ForwardedRef<HTMLInputElement>,
  );

  const prevValue = useRef<TreeLikeAutocompleteValue | undefined>(undefined);

  useEffect(() => {
    if (value && !prevValue.current) {
      prevValue.current = value;
    }

    if (!value && prevValue.current) {
      inputRef.current?.focus();
      prevValue.current = undefined;
    }
  }, [value]);

  const handleClearAll = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange?.(undefined);
    inputRef.current?.focus();
  };

  const isVisibleClearButton = !disabled && Boolean(value);

  return {
    inputRef,
    isVisibleClearButton,
    handleClearAll,
  };
};
