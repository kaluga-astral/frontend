export type PaginationInputDTO = {
  /**
   * Количество записей на странице.
   * */
  pageSize?: number;
  /**
   * Номер текущей выбранной страницы.
   * */
  pageIndex?: number;
};

export type FiltersInputDTO = {
  /**
   * Дата начала запрашиваемого периода.
   * */
  startDate?: string;
  /**
   * Дата окончания запрашиваемого периода.
   * */
  endDate?: string;
  /**
   * Строка поиска.
   * */
  filter?: string;
};

export type SortingInputDTO = {
  /**
   * Наименование сортируемого поля.
   * */
  sortBy?: string;
  /**
   * Тип сортировки.
   * */
  sortType?: string;
};

export type PaginationMetaDTO = {
  /**
   * Номер страницы.
   * */
  pageIndex: number;
  /**
   * Количество элементов на странице.
   * */
  pageSize: number;
  /**
   * Общие число страниц.
   * */
  totalPages: number;
  /**
   * Наличие предыдущей страницы.
   * */
  hasPreviousPage: boolean;
  /**
   * Наличие следующей страницы.
   * */
  hasNextPage: boolean;
  indexFrom: number;
  firstActiveItem: number;
  lastActiveItem: number;
};

export type FiltersMetaDTO = {
  /**
   * Дата начала запрашиваемого периода.
   * */
  startDate?: string;
  /**
   * Дата окончания запрашиваемого периода.
   * */
  endDate?: string;
  /**
   * Строка поиска.
   * */
  filter?: string;
};

export type SortingMetaDTO = {
  /**
   * Наименование сортируемого поля.
   * */
  sortBy?: string;
  /**
   * Тип сортировки.
   * */
  sortType?: string;
};

export type MetaDTO = {
  /**
   * Общие число элементов.
   * */
  totalCount: number;
};

export type TableInputDTO = PaginationInputDTO &
  FiltersInputDTO &
  SortingInputDTO;

export type TableMetaDTO = PaginationMetaDTO &
  FiltersMetaDTO &
  SortingMetaDTO &
  MetaDTO;
