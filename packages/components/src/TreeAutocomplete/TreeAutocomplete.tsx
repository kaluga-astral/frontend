import { type DialogProps } from '../Dialog';
import { type TextFieldProps } from '../TextField';
import { type TreeListData, type TreeListProps } from '../Tree';

import { useLogic } from './useLogic';
import { Input } from './Input';
import { OptionsModal } from './OptionsModal';
import type { TreeAutocompleteValue } from './types';

export type TreeAutocompleteTreeProps = Pick<
  TreeListProps,
  'disabledItems' | 'renderItem'
>;

export type TreeAutocompleteProps = {
  /**
   * Выбранное значения
   */
  value?: TreeAutocompleteValue;

  /**
   * Опции, которые необходимо отобразить в виде дерева.
   */
  options: Array<TreeListData>;

  /**
   * Если true, поля будут недоступны для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Если true, поля будут подсвечены, как содержащие ошибку
   */
  isError?: boolean;

  /**
   * Флаг загрузки options
   * Если true, вместо дерева options будет отображен лоадер
   */
  isLoading?: boolean;

  /**
   * Флаг ошибки загрузки options
   * Если true, вместо дерева options будет отображен плейсхолдер с ошибкой
   */
  isLoadingError?: boolean;

  /**
   * Текст ошибки при загрузке данных
   */
  loadingErrorMsg?: string;

  /**
   * Предназначен для конфигурации всплывающего окна
   */
  dialogProps: Omit<DialogProps, 'open' | 'onClose'>;

  /**
   * Предназначен для конфигурации дерева опций
   */
  treeProps?: TreeAutocompleteTreeProps;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry?: () => void;

  /**
   * Функция для поиска элементов по дереву, если не определено, то будет использован встроенный поиск
   */
  filterOptions?: (node: TreeListData, searchValue: string) => boolean;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange?: (newValue: TreeAutocompleteValue | undefined) => void;
} & Omit<
  TextFieldProps,
  | 'autoComplete'
  | 'defaultValue'
  | 'select'
  | 'error'
  | 'disabled'
  | 'multiline'
  | 'rows'
  | 'maxRows'
  | 'minRows'
  | 'SelectProps'
  | 'endAdornment'
  | 'onChange'
>;

export const TreeAutocomplete = (props: TreeAutocompleteProps) => {
  const { inputProps, optionsModalProps } = useLogic(props);

  const {
    value,
    options,
    isDisabled,
    isError,
    isLoading,
    isLoadingError,
    loadingErrorMsg,
    filterOptions,
    dialogProps,
    treeProps,
    onRetry,
    onChange,
    ...externalInputProps
  } = props;

  return (
    <>
      <Input
        disabled={isDisabled}
        error={isError}
        {...externalInputProps}
        {...inputProps}
        onChange={onChange}
      />

      <OptionsModal
        initialValue={value}
        options={options}
        isLoading={isLoading}
        isLoadingError={isLoadingError}
        loadingErrorMsg={loadingErrorMsg}
        filterOptions={filterOptions}
        treeProps={treeProps}
        {...dialogProps}
        {...optionsModalProps}
        onRetry={onRetry}
        onChange={onChange}
      />
    </>
  );
};
