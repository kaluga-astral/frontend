import {
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

import { ITEM_CLASSNAME, OVERSCAN_COUNT } from './constants';
import { EndData } from './EndData';
import { Error } from './Error';
import { Loader } from './Loader';
import { NoData } from './NoData';
import { Item, ScrollToStartButton, Wrapper } from './styles';

// TODO Вынести этот дженерик в отдельный пакет
// Дженерик получает из типа только обязательные поля и возвращает их как union
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

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
        imgAlt: 'Что-то пошло не тиак',
        errorList: [errorMsg || ''],
        imgSrc: imagesMap.defaultErrorImgSrc,
        onRetry,
      }}
    >
      <Wrapper>
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
          <ScrollToStartButton
            color="default"
            size={isMobile ? 'medium' : 'small'}
            onClick={handleScrollToStart}
          >
            <ArrowUpOutlineMd />
          </ScrollToStartButton>
        )}
      </Wrapper>
    </ContentState>
  );
};
