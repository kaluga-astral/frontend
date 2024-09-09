import {
  type ChangeEvent,
  type SyntheticEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { type ButtonProps } from '../../../Button';
import { type DialogProps } from '../../../Dialog';
import { type SearchFieldProps } from '../../../SearchField';
import { type TreeLikeListProps } from '../../../TreeLikeList';
import { type OptionsModalProps } from '../OptionsModal';
import type { TreeLikeAutocompleteValue } from '../../types';

import { findInTree } from './utils';

type UseLogicParams = OptionsModalProps;

type UseLogicResult = {
  isNoResult: boolean;
  searchFieldProps: SearchFieldProps;
  modalProps: Partial<DialogProps>;
  treeLikeListProps: TreeLikeListProps;
  cancelButtonProps: ButtonProps;
  confirmButtonProps: ButtonProps;
};

export const useLogic = ({
  isOpen,
  isLoading,
  isLoadingError,
  initialValue,
  options,
  filterOptions,
  onChange,
  onClose,
}: UseLogicParams): UseLogicResult => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(
    initialValue,
  );
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    // Очищаем поле поиска, если модальное окно закрыто
    if (!isOpen) {
      setSearchValue('');
    }
  }, [isOpen]);

  const filteredOptions = useMemo(
    () =>
      searchValue ? findInTree(options, searchValue, filterOptions) : options,
    [options, searchValue],
  );

  const handleChangeSearchField = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const handleChange = (newValue: TreeLikeAutocompleteValue | undefined) =>
    setValue(newValue);

  const handleClose = (event: SyntheticEvent<HTMLButtonElement>) => {
    setValue(initialValue);
    onClose?.(event, 'escapeKeyDown');
  };

  const handleCancel = (event: SyntheticEvent<HTMLButtonElement>) => {
    setValue(initialValue);
    onClose?.(event, 'escapeKeyDown');
  };

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onChange?.(value);
    onClose?.(event, 'escapeKeyDown');
  };

  const isNoResult = Boolean(searchValue) && !filteredOptions.length;
  const isDisabledButton = !value || !value.length || isNoResult;

  return {
    isNoResult,
    modalProps: {
      onClose: handleClose,
    },
    searchFieldProps: {
      value: searchValue,
      disabled: isLoading || isLoadingError,
      onChange: handleChangeSearchField,
    },
    treeLikeListProps: {
      value,
      isInitialExpanded: Boolean(searchValue),
      data: filteredOptions,
      onChange: handleChange,
    },
    cancelButtonProps: {
      onClick: handleCancel,
    },
    confirmButtonProps: {
      disabled: isDisabledButton,
      onClick: handleClick,
    },
  };
};