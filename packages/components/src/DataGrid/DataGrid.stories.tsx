import { BinOutlineMd, EyeFillMd, SendOutlineMd } from '@astral/icons';
import { type Meta } from '@storybook/react';
import { type ChangeEvent, useEffect, useState } from 'react';

import { ActionCell, type Actions } from '../ActionCell';
import { DataGridPagination } from '../DataGridPagination';
import { ConfigProvider } from '../ConfigProvider';

import { DataGrid } from './DataGrid';
import type {
  DataGridColumns,
  DataGridRowOptions,
  DataGridSort,
} from './types';

/**
 * DataGrid — отображает информацию в удобном для просмотра виде. Может включать:
 - Соответствующую визуализацию
 - Навигацию
 - Инструменты для запроса и обработки данных
 *
 * **❗️❗️❗️ Компонент устарел и больше не будет поддерживаться.**
 * **Используйте [NewDataGrid](/story/components-newdatagrid--docs), который построен на css grid.**
 * Причина отказа от поддержки: DataGrid построен на неконтролируемой табличной верстке, которая не поддерживает вложенность
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 *
 */
const meta: Meta<typeof DataGrid> = {
  title: 'Components/Deprecated/DataGrid',
  component: DataGrid,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

type SortField = 'documentName' | 'direction' | 'createDate';

const generateRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString();
};

const generateData = (
  dataObjTemplate: DataType,
  options?: DataGridRowOptions,
): DataType[] => {
  const DIRECTIONS = ['ФНС', 'ФСС', 'ПФР', 'РПН'];
  const DATA_ARRAY_LENGTH = 36;

  return Array.from({ length: DATA_ARRAY_LENGTH })
    .fill(dataObjTemplate)
    .map((_, i) => ({
      id: String(i + 1),
      documentName: `Документ ${i + 1}`,
      direction: DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
      createDate: generateRandomDate(),
      options: Math.random() < 0.5 ? options : undefined,
    }));
};

/**
 * DataGrid без пагинации
 */

export const Example = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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
          rowsPerPage={10}
          onChange={handleChangePage}
          page={page}
        />
      }
    />
  );
};

/**
 * Prop ```onSetCountPerPage``` Позволяет управлять постраничным отображением данных в таблице
 */
export const WithDefaultSelectOptionPerPage = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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

  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
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

      setSlicedData(
        data.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage),
      );
    }, 1500);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setLoading(true);
    setRowsPerPage(newRowsPerPage);
    setPage(1);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice(0, newRowsPerPage));
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
          rowsPerPage={rowsPerPage}
          onSetCountPerPage={handleChangeRowsPerPage}
          page={page}
        />
      }
    />
  );
};

/**
 * Prop ```rowsPerPageOptions``` позволяет задать собственные значения постраничного отображения элементов
 */
export const WithCustomSelectOptionPerPage = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };
  const CUSTOM_OPTION = [10, 15, 20, 30];

  const data = generateData(DATA_OBJECT_TEMPLATE);

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

  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
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

      setSlicedData(
        data.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage),
      );
    }, 1500);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setLoading(true);
    setRowsPerPage(newRowsPerPage);
    setPage(1);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice(0, newRowsPerPage));
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
          rowsPerPage={rowsPerPage}
          onSetCountPerPage={handleChangeRowsPerPage}
          rowsPerPageOptions={CUSTOM_OPTION}
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
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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
  const noDataStubSrc = '/no-data-stub.svg';

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
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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
          rowsPerPage={10}
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
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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

export const WithDisabledRow = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE, {
    isDisabled: true,
    disabledReason: 'Нет доступа',
  });

  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Наименование документа',
    },
    {
      field: 'direction',
      label: 'Направление',
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
    {
      label: 'Действия',
      align: 'center',
      width: '1%',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      loading={loading}
      selectedRows={selected}
      onRowClick={handleRowClick}
      onSelectRow={handleSelect}
    />
  );
};

/**
 * `isDisabledLastCell` позволяет не блокировать последнюю ячейку
 */
export const DisabledLastCell = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE, {
    isDisabled: true,
    isDisabledLastCell: false,
    disabledReason: 'Нет доступа',
  });

  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Наименование документа',
    },
    {
      field: 'direction',
      label: 'Направление',
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
    {
      label: 'Действия',
      align: 'center',
      width: '1%',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <DataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      loading={loading}
      selectedRows={selected}
      onRowClick={handleRowClick}
      onSelectRow={handleSelect}
    />
  );
};

/**
 * Состояние загрузки регулируется полем ```loading``` экшенов переданных в ```<ActionCell/>```
 */
export const WithLoaderInButton = () => {
  const DATA_OBJECT_TEMPLATE = {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  };

  const data = generateData(DATA_OBJECT_TEMPLATE);

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

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 5));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

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
