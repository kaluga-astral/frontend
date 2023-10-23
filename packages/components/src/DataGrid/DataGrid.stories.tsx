import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { Meta } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';

import { ActionCell, Actions } from '../ActionCell';
import { DataGridPagination } from '../DataGridPagination';
import { ConfigProvider } from '../ConfigProvider';

import { DataGrid } from './DataGrid';
import { DataGridColumns, DataGridSort } from './types';

/**
 * DataGrid — отображает информацию в удобном для просмотра виде. Может включать:
 - Соответствующую визуализацию
 - Навигацию
 - Инструменты для запроса и обработки данных
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

const noDataStubSrc = '/no-data-stub.svg';

type SortField = 'documentName' | 'direction' | 'createDate';

const ACTIONS: Actions<DataType> = {
  main: [
    {
      icon: <EyeFillMd />,
      name: 'Просмотреть',
      onClick: () => console.log('main'),
    },
    {
      icon: <SendOutlineMd />,
      nested: true,
      name: 'Отправить',
      actions: [
        { name: 'Туда', onClick: () => console.log('nested 1') },
        { name: 'Сюда', onClick: () => console.log('nested 2') },
      ],
    },
  ],
  secondary: [
    { name: 'Редактировать', onClick: () => console.log('secondary 1') },
    { name: 'Удалить', onClick: () => console.log('secondary 2') },
  ],
};

const columns: DataGridColumns<DataType>[] = [
  {
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
  },
  {
    field: 'direction',
    label: 'Направление',
    sortable: true,
  },
  {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
  },
  {
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '1%',
    renderCell: (row) => {
      return <ActionCell actions={ACTIONS} row={row} />;
    },
  },
];

const data: DataType[] = [
  {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '2',
    documentName: 'Документ 2',
    direction: 'ФСС',
    createDate: '2022-03-25T17:50:40.206Z',
  },
  {
    id: '3',
    documentName: 'Документ 3',
    direction: 'ПФР',
    createDate: '2022-03-27T17:50:40.206Z',
  },
  {
    id: '4',
    documentName: 'Документ 4',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '5',
    documentName: 'Документ 5',
    direction: 'ФНС',
    createDate: '2022-03-29T17:50:40.206Z',
  },
  {
    id: '6',
    documentName: 'Документ 6',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '7',
    documentName: 'Документ 7',
    direction: 'ПФР',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '8',
    documentName: 'Документ 8',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '9',
    documentName: 'Документ 9',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '10',
    documentName: 'Документ 10',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '11',
    documentName: 'Документ 11',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '12',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '13',
    documentName: 'Документ 13',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '14',
    documentName: 'Документ 14',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '15',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '16',
    documentName: 'Документ 16',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
];

/**
 * DataGrid без пагинации
 */
export const Example = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      onRowClick={handleRowClick}
      loading={loading}
    />
  );
};

/**
 * Постраничное отображение данных в таблице. Внизу таблицы есть область, в которой слева отображается счетчик данных на странице из общего количества данных, справа - кнопки с нумерацией страниц таблицы для переключения между ними.
 */
export const WithPagination = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleChangePage = (
    _event: ChangeEvent<unknown>,
    newPage: number,
  ): void => {
    setLoading(true);
    setPage(newPage);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      onRowClick={handleRowClick}
      loading={loading}
      Footer={
        <DataGridPagination
          totalCount={data.length}
          onChange={handleChangePage}
          page={page}
        />
      }
    />
  );
};

/**
 * DataGrid с сортировкой
 */
export const WithSorting = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSort = (newSorting: DataGridSort<SortField> | undefined) => {
    if (newSorting) {
      const sortData = (
        array: DataType[],
        field: SortField,
        sortOrder: 'asc' | 'desc',
      ) => {
        const sortedArray = [...array];

        sortedArray.sort((a, b) => {
          const valueA = a[field];
          const valueB = b[field];

          if (valueA === valueB) {
            return 0;
          }

          if (field === 'documentName') {
            // Разделение текстовой и числовой частей
            const regex = /([^\d]+)(\d+)/;
            const matchA = valueA.match(regex);
            const matchB = valueB.match(regex);

            // Проверка на null
            if (matchA === null || matchB === null) {
              return 0;
            }

            const [, textA, numberA] = matchA;
            const [, textB, numberB] = matchB;

            const comparison =
              textA.localeCompare(textB) || Number(numberA) - Number(numberB);

            // Определение порядка сортировки
            return sortOrder === 'desc' ? -1 * comparison : comparison;
          } else {
            // Если не сортируем по полю documentName, используем прежний код сортировки
            if (valueA < valueB) {
              return sortOrder === 'desc' ? 1 : -1;
            }

            if (valueA > valueB) {
              return sortOrder === 'desc' ? -1 : 1;
            }

            return 0;
          }
        });

        return sortedArray;
      };

      setSlicedData(sortData(slicedData, newSorting.fieldId, newSorting.sort));
    } else {
      setSlicedData(data.slice(0, 10));
    }

    setSorting(newSorting);
  };

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      loading={loading}
      onSort={handleSort}
      sorting={sorting}
      onRowClick={handleRowClick}
    />
  );
};

/**
 * Prop ```activeRowId``` позволяет отобразить активный ряд в таблице в зависимости от значения prop ```keyId```
 */
export const WithActiveRow = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      activeRowId={'3'}
      rows={slicedData}
      columns={columns}
      loading={loading}
      onRowClick={handleRowClick}
    />
  );
};

/**
 * В случае, когда нет данных для отображения их в таблице, необходимо показать изображение и текст “Нет данных” и убрать сортировку для столбцов, если она присутствует. Изображение можно передать через ConfigProvider.
 */
export const NoData = () => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData([]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: '',
        noDataImgSrc: noDataStubSrc,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGrid<DataType, SortField>
        keyId="id"
        activeRowId={'3'}
        rows={slicedData}
        columns={columns}
        onRowClick={handleRowClick}
        loading={loading}
      />
    </ConfigProvider>
  );
};

/**
 * В таблице может добавляться возможность выбора отдельных строк или всего списка значений посредством использования компонента checkbox. В страничном варинте таблицы при выборе checkbox в datagrid_header выбираются все значения на странице
 */
export const WithCheckbox = () => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleChangePage = (
    _event: ChangeEvent<unknown>,
    newPage: number,
  ): void => {
    setLoading(true);
    setPage(newPage);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      onRowClick={handleRowClick}
      loading={loading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      Footer={
        <DataGridPagination
          totalCount={data.length}
          onChange={handleChangePage}
          page={page}
        />
      }
    />
  );
};

/**
 * Prop ```disabled``` позволяет заблокировать контент
 */
export const WithDisabledContent = () => {
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      loading={loading}
      disabled={true}
      onRowClick={handleRowClick}
    />
  );
};

/**
 * Состояние загрузки регулируется полем ```loading``` экшенов переданных в ```<ActionCell/>```
 */
export const WithLoaderInButton = () => {
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 5));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const ACTIONS_WITH_LOADER: Actions<DataType> = {
    main: [
      {
        icon: <EyeFillMd />,
        name: 'Просмотреть',
        onClick: () => console.log('main'),
      },
      {
        icon: <SendOutlineMd />,
        loading: true,
        name: 'Отправить',
      },
    ],
    secondary: [
      { name: 'Редактировать', onClick: () => console.log('secondary 1') },
      { name: 'Удалить', onClick: () => console.log('secondary 2') },
    ],
  };

  const columnsWithLoader: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Наименование документа',
      sortable: true,
    },
    {
      field: 'direction',
      label: 'Направление',
      sortable: true,
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      sortable: true,
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
    {
      label: 'Действия',
      sortable: false,
      align: 'center',
      width: '1%',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS_WITH_LOADER} row={row} />;
      },
    },
  ];

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columnsWithLoader}
      loading={loading}
      onRowClick={handleRowClick}
    />
  );
};
