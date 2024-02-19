import React, {
  type Key,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { type ListRange, Virtuoso, type VirtuosoHandle } from 'react-virtuoso';
import { ArrowUpOutlineMd } from '@astral/icons';

import { useToggle } from '../hooks';
import { useViewportType } from '../hooks/useViewportType';
import { ConfigContext } from '../ConfigProvider';
import { ContentState } from '../ContentState';

import { OVERSCAN_COUNT } from './constants';
import { DataListEndDate } from './DataListEndData';
import { DataListError } from './DataListError';
import { DataListLoader } from './DataListLoader';
import { DataListNoData } from './DataListNoData';
import { ScrollToStartButton } from './styles';

export type DataListProps<T> = {
  data?: Array<T>;

  /**
   * Поле, используемое в качестве ключа списка
   */
  keyId: T[keyof T] extends Key ? keyof T : never;

  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: React.ReactNode;

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
   * Компонент карточки
   */
  listItem: (props: T) => ReactNode;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry: () => void;

  /**
   * Обработчик подгрузки данных
   */
  onEndReached?: () => void;
};

export const DataList = <T extends Record<string, unknown>>({
  data,
  keyId,
  className,
  listItem: ListItem,
  noDataPlaceholder,
  endOfScrollMsg,
  errorMsg,
  isLoading,
  isError,
  isEndReached,
  onRetry,
  onEndReached,
}: DataListProps<T>) => {
  const virtuoso = useRef<VirtuosoHandle>(null);

  const { imagesMap } = useContext(ConfigContext);

  const { isMobile } = useViewportType();

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

  const handleScrollToStart = useCallback(
    () =>
      virtuoso.current?.scrollToIndex({
        index: 0,
        align: 'start',
        behavior: 'smooth',
      }),
    [virtuoso],
  );

  const isDataExist = Boolean(data?.length);

  if (!isDataExist && !isLoading && !isError) {
    return noDataPlaceholder || <DataListNoData />;
  }

  return (
    <ContentState
      isLoading={isLoading && !isDataExist}
      isError={isError && !isDataExist}
      errorState={{
        imgAlt: 'Что-то пошло не тиак',
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
        endReached={onEndReached}
        rangeChanged={handleRangeChanged}
        itemContent={(_, item) => (
          <ListItem key={item[keyId] as Key} {...item} />
        )}
        components={{
          Footer: () => (
            <>
              {isLoading && <DataListLoader />}
              {isError && <DataListError onRetry={onRetry} />}

              {isEndReached && (
                <DataListEndDate endOfScrollMsg={endOfScrollMsg} />
              )}
            </>
          ),
        }}
      />

      {isStickyButtonActive && (
        <ScrollToStartButton
          color="default"
          size={isMobile ? 'medium' : 'small'}
          onClick={handleScrollToStart}
        >
          <ArrowUpOutlineMd />
        </ScrollToStartButton>
      )}
    </ContentState>
  );
};
