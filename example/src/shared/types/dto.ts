export type PaginationInputDTO = {
  /**
   * @description Количество записей на странице.
   * */
  pageSize?: number;
  /**
   * @description Номер текущей выбранной страницы.
   * */
  pageIndex?: number;
};

export type FiltersInputDTO = {
  /**
   * @description Дата начала запрашиваемого периода.
   * */
  startDate?: string;
  /**
   * @description Дата окончания запрашиваемого периода.
   * */
  endDate?: string;
  /**
   * @description Строка поиска.
   * */
  filter?: string;
};

export type SortingInputDTO = {
  /**
   * @description Наименование сортируемого поля.
   * */
  sortBy?: string;
  /**
   * @description Тип сортировки.
   * */
  sortType?: string;
};

export type PaginationMetaDTO = {
  /**
   * @description Номер страницы.
   * */
  pageIndex: number;
  /**
   * @description Количество элементов на странице.
   * */
  pageSize: number;
  /**
   * @description Общие число страниц.
   * */
  totalPages: number;
  /**
   * @description Наличие предыдущей страницы.
   * */
  hasPreviousPage: boolean;
  /**
   * @description Наличие следующей страницы.
   * */
  hasNextPage: boolean;
  indexFrom: number;
  firstActiveItem: number;
  lastActiveItem: number;
};

export type FiltersMetaDTO = {
  /**
   * @description Дата начала запрашиваемого периода.
   * */
  startDate?: string;
  /**
   * @description Дата окончания запрашиваемого периода.
   * */
  endDate?: string;
  /**
   * @description Строка поиска.
   * */
  filter?: string;
};

export type SortingMetaDTO = {
  /**
   * @description Наименование сортируемого поля.
   * */
  sortBy?: string;
  /**
   * @description Тип сортировки.
   * */
  sortType?: string;
};

export type MetaDTO = {
  /**
   * @description Общие число элементов.
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
