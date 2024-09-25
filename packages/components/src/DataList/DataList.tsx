import {
  type Key,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { type ListRange, Virtuoso, type VirtuosoHandle } from 'react-virtuoso';

import { useToggle } from '../hooks';
import { ConfigContext } from '../ConfigProvider';
import { ContentState } from '../ContentState';
import { ScrollToTopButton } from '../ScrollToTopButton';
import type { RequiredKeys } from '../types';

import { ITEM_CLASSNAME, OVERSCAN_COUNT } from './constants';
import { EndData } from './EndData';
import { Error } from './Error';
import { Loader } from './Loader';
import { NoData } from './NoData';
import { Item } from './styles';

export type DataListProps<TDataItem extends Record<string, unknown>> = {
  data?: Array<TDataItem>;

  /**
   * Поле, используемое в качестве ключа списка
   */
  keyId: RequiredKeys<TDataItem>;

  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: ReactNode;

  /**
   *  Сообщение, отображаемое при достижении конца списка
   */
  endOfScrollMsg?: string;

  /**
   * Текст ошибки
   */
  errorMsg?: string;

  /**
   * Если true, показывается анимация загрузки
   */
  isLoading?: boolean;

  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;

  /**
   * Флаг достижения конца списка
   */
  isEndReached?: boolean;

  /**
   * Содержание карточки
   */
  itemContent: (
    dataItem: TDataItem,
    { index, className }: { index: number; className: string },
  ) => ReactNode;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry: () => void;

  /**
   * Обработчик подгрузки данных
   */
  onEndReached?: () => void;
};

export const DataList = <TDataItem extends Record<string, unknown>>({
  data,
  keyId,
  className,
  itemContent,
  noDataPlaceholder,
  endOfScrollMsg,
  errorMsg,
  isLoading,
  isError,
  isEndReached,
  onRetry,
  onEndReached,
}: DataListProps<TDataItem>) => {
  const virtuoso = useRef<VirtuosoHandle>(null);

  const { imagesMap } = useContext(ConfigContext);

  const [isStickyButtonActive, showStickyButton, hideStickyButton] =
    useToggle();

  const handleRangeChanged = useCallback(
    (range: ListRange) => {
      if (range.startIndex > 2) {
        showStickyButton();
      } else {
        hideStickyButton();
      }
    },
    [hideStickyButton, showStickyButton],
  );

  const handleScrollToTop = useCallback(
    () =>
      virtuoso.current?.scrollToIndex({
        index: 0,
        align: 'start',
        behavior: 'smooth',
      }),
    [virtuoso],
  );

  const handleEndReach = useCallback(() => {
    if (!isEndReached && onEndReached) {
      onEndReached();
    }
  }, [isEndReached, onEndReached]);

  const isDataExist = Boolean(data?.length);

  if (!isDataExist && !isLoading && !isError) {
    return noDataPlaceholder || <NoData />;
  }

  return (
    <ContentState
      isLoading={isLoading && !isDataExist}
      isError={isError && !isDataExist}
      errorState={{
        imgAlt: 'Что-то пошло не так',
        errorList: [errorMsg || ''],
        imgSrc: imagesMap.defaultErrorImgSrc,
        onRetry,
      }}
    >
      <Virtuoso
        className={className}
        style={{ height: '100%' }}
        data={data}
        ref={virtuoso}
        overscan={OVERSCAN_COUNT}
        endReached={handleEndReach}
        rangeChanged={handleRangeChanged}
        itemContent={(index, item) => (
          <Item key={item[keyId] as Key}>
            {itemContent &&
              itemContent(item, { index, className: ITEM_CLASSNAME })}
          </Item>
        )}
        components={{
          Footer: () => (
            <>
              {isLoading && <Loader />}
              {isError && <Error onRetry={onRetry} />}

              {isEndReached && <EndData endOfScrollMsg={endOfScrollMsg} />}
            </>
          ),
        }}
      />

      {isStickyButtonActive && (
        <ScrollToTopButton onClick={handleScrollToTop} />
      )}
    </ContentState>
  );
};
