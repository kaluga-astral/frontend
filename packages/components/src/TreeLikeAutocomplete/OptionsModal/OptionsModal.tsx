import { Button } from '../../Button';
import { Dialog, type DialogProps } from '../../Dialog';
import { DialogActions } from '../../DialogActions';
import { SearchField } from '../../SearchField';
import { type TreeListData } from '../../Tree';
import { TreeLikeList, type TreeLikeListProps } from '../../TreeLikeList';
import type { TreeLikeAutocompleteValue } from '../types';

import { useLogic } from './useLogic';
import { NoData } from './NoData';
import { Loader } from './Loader';
import { Error } from './Error';
import { StyledDialogContent, TreeListWrapper } from './styles';

export type OptionsModalProps = Omit<DialogProps, 'open' | 'onChange'> & {
  /**
   * Если true, модальное окно будет открыто
   */
  isOpen: boolean;

  /**
   * Выбранное значения
   */
  initialValue?: TreeLikeAutocompleteValue;

  /**
   * Опции, которые необходимо отобразить в виде дерева.
   */
  options: Array<TreeListData>;

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
   * Функция для поиска элементов по дереву, если не определено, то будет использован встроенный поиск
   */
  filterOptions?: (node: TreeListData, searchValue: string) => boolean;

  /**
   * Предназначен для конфигурации всплывающего окна
   */
  treeProps?: Pick<TreeLikeListProps, 'disabledItems' | 'renderItem'>;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry?: () => void;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange?: (newValue?: TreeLikeAutocompleteValue) => void;
};

export const OptionsModal = (props: OptionsModalProps) => {
  const {
    isNoResult,
    searchFieldProps,
    modalProps,
    treeLikeListProps,
    cancelButtonProps,
    confirmButtonProps,
  } = useLogic(props);

  const {
    isOpen,
    initialValue,
    options,
    isLoading,
    isLoadingError,
    loadingErrorMsg,
    treeProps,
    filterOptions,
    onChange,
    onRetry,
    onClose,
    ...externalDialogProps
  } = props;

  const renderComponent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (isLoadingError) {
      return <Error loadingErrorMsg={loadingErrorMsg} onRetry={onRetry} />;
    }

    if (isNoResult) {
      return <NoData />;
    }

    return <TreeLikeList {...treeProps} {...treeLikeListProps} />;
  };

  return (
    <Dialog
      {...externalDialogProps}
      disableRestoreFocus
      open={isOpen}
      {...modalProps}
    >
      <StyledDialogContent>
        <SearchField fullWidth {...searchFieldProps} />

        <TreeListWrapper>{renderComponent()}</TreeListWrapper>
      </StyledDialogContent>

      <DialogActions>
        <Button variant="text" {...cancelButtonProps}>
          Отмена
        </Button>

        <Button {...confirmButtonProps}>Выбрать</Button>
      </DialogActions>
    </Dialog>
  );
};
