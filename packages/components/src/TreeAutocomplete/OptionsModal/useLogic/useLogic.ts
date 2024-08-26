import {
  type ChangeEvent,
  type SyntheticEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { type ButtonProps } from '../../../Button';
import { type SearchFieldProps } from '../../../SearchField';
import { type TreeListProps } from '../../../Tree';
import { type OptionsModalProps } from '../OptionsModal';
import type { TreeAutocompleteValue } from '../../types';

import { findInTree } from './utils';

type UseLogicParams = OptionsModalProps;

type UseLogicResult = {
  isNoResult: boolean;
  searchFieldProps: SearchFieldProps;
  treeListProps: TreeListProps;
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
  const [value, setValue] = useState<TreeAutocompleteValue | undefined>(
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

  const handleChange = (newValue: TreeAutocompleteValue | undefined) =>
    setValue(newValue);

  const handleClose = (event: SyntheticEvent<HTMLButtonElement>) =>
    onClose?.(event, 'escapeKeyDown');

  const handleCancel = (event: SyntheticEvent<HTMLButtonElement>) => {
    onChange?.(undefined);
    handleClose(event);
  };

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onChange?.(value);
    handleClose(event);
  };

  const isNoResult = Boolean(searchValue) && !filteredOptions.length;
  const isDisabledButton = !value || isNoResult;

  return {
    isNoResult,
    searchFieldProps: {
      value: searchValue,
      disabled: isLoading || isLoadingError,
      onChange: handleChangeSearchField,
    },
    treeListProps: {
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
