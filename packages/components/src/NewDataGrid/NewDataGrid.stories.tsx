import { BinOutlineMd, EyeFillMd, SendOutlineMd } from '@astral/icons';
import { type Meta } from '@storybook/react';
import { type ChangeEvent, useEffect, useState } from 'react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import { ActionCell, type Actions } from '../ActionCell';
import { DataGridPagination } from '../DataGridPagination';
import { ConfigProvider } from '../ConfigProvider';

import { NewDataGrid } from './NewDataGrid';
import type {
  CellValue,
  DataGridColumns,
  DataGridRowOptions,
  DataGridRowWithOptions,
  DataGridSort,
} from './types';

/**
 * NewDataGrid — отображает информацию в удобном для просмотра виде. Может включать:
 - Соответствующую визуализацию
 - Навигацию
 - Инструменты для запроса и обработки данных
 *
 * **Важно! NewDataGrid построен на css grid**
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 */
const meta: Meta<typeof NewDataGrid> = {
  title: 'Components/NewDataGrid',
  component: NewDataGrid,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  recipient: string;
  createDate: string;
  actions?: object;
};

type DataRowType<TData extends Record<string, CellValue>> =
  DataGridRowWithOptions<TData>;

type SortField = 'documentName' | 'recipient' | 'createDate';

const FAKE_DATA_OBJECT_TEMPLATE: DataType = {
  id: '1',
  documentName: 'Договор №1',
  recipient: 'ИП Иванов О.В.',
  createDate: '2022-03-24T17:50:40.206Z',
};

const FAKE_ACTIONS: Actions<DataType> = {
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

const FAKE_COLUMNS: DataGridColumns<DataType>[] = [
  {
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
  },
  {
    field: 'recipient',
    label: 'Получатель',
    sortable: true,
  },
  {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
  },
  {
    field: 'actions',
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '120px',
    renderCell: (row) => {
      return <ActionCell actions={FAKE_ACTIONS} row={row} />;
    },
  },
];

const generateRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString();
};

const generateColumns = (
  columnsTemplate: DataGridColumns<DataType>[],
  mergedColumns: DataGridColumns<DataType>[] = [],
): DataGridColumns<DataType>[] => {
  const mergedColumnsMap = mergedColumns.reduce(
    (acc, { field, ...columnsOptions }) => {
      if (field) {
        return {
          ...acc,
          [field]: columnsOptions,
        };
      }

      return acc;
    },
    {},
  );

  return columnsTemplate.map((column) => ({
    ...column,
    // @ts-ignore
    ...(mergedColumnsMap[column?.field] || {}),
  }));
};

const generateData = <TData extends Record<string, CellValue>>(
  dataObjTemplate: TData,
  options?: DataGridRowOptions<TData>,
): DataRowType<TData>[] => {
  const RECIPIENTS = [
    'ИП Иванов О.В.',
    'ООО "Новая организация"',
    'ООО "Волшебные документы"',
  ];

  const DATA_ARRAY_LENGTH = 16;

  return Array.from({ length: DATA_ARRAY_LENGTH })
    .fill(dataObjTemplate)
    .map((_, i) => ({
      id: String(i + 1),
      documentName: `Договор №${i + 1}`,
      recipient: RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)],
      createDate: generateRandomDate(),
      options: Math.random() < 0.5 ? options : {},
    })) as unknown as DataRowType<TData>[];
};

/**
 * DataGrid без пагинации
 */
export const Example = () => {
  const columns = FAKE_COLUMNS;
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Постраничное отображение данных в таблице.
 * Внизу таблицы есть область, в которой слева отображается счетчик данных на странице из общего количества данных, справа - кнопки с нумерацией страниц таблицы для переключения между ними.
 */
export const WithPagination = () => {
  const columns = FAKE_COLUMNS;
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * 10, page * 10));
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
      setSlicedData(fakeData.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      footer={
        <DataGridPagination
          rowsPerPage={10}
          totalCount={fakeData.length}
          onChange={handleChangePage}
          page={page}
        />
      }
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * DataGrid с сортировкой
 */
export const WithSorting = () => {
  const columns = FAKE_COLUMNS;
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
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
      setSlicedData(fakeData.slice(0, 10));
    }

    setSorting(newSorting);
  };

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      onSort={handleSort}
      sorting={sorting}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Prop `activeRowId` позволяет отобразить активный ряд в таблице в зависимости от значения prop `keyId`
 */
export const WithActiveRow = () => {
  const columns = FAKE_COLUMNS;
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      activeRowId={'3'}
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * В таблице может добавляться возможность выбора отдельных строк или всего списка значений посредством использования компонента checkbox.
 * В страничном варинте таблицы при выборе checkbox в datagrid_header выбираются все значения на странице
 */
export const WithCheckbox = () => {
  const columns = generateColumns(FAKE_COLUMNS, []);
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * В качестве значения параметра width должны указываться явные единицы: `px`, `%`, `fr`.
 * При использовании таких значений, как auto, max-content, min-content, которые автоматически подстраиваются под ширину содержимого, сетка может сломаться.
 * Если значение не указано, то автоматически задается `1fr`
 */
export const WidthOptions = () => {
  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'documentName',
      width: '2fr',
    },
    {
      field: 'recipient',
      width: '1fr',
    },
    {
      field: 'createDate',
      width: '15%',
    },
  ]);

  console.log('columns', columns);

  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Prop `disabled` позволяет заблокировать контент
 */
export const WithDisabledContent = () => {
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Наименование документа',
      sortable: true,
    },
    {
      field: 'recipient',
      label: 'Получатель',
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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      isDisabled={true}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

export const WithDisabledRow = () => {
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE, {
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
      field: 'recipient',
      label: 'Получатель',
    },
    {
      field: 'createDate',
      label: 'Дата создания',
      format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
    },
    {
      label: 'Действия',
      align: 'center',
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * `isDisabledLastCell` позволяет не блокировать последнюю ячейку
 */
export const DisabledLastCell = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE, {
    isDisabled: true,
    isDisabledLastCell: false,
    disabledReason: 'Нет доступа',
  });

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Таблица можем работать с вложенными структурами
 */
export const Tree = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '32',
          documentName: 'Договор №45678',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
          children: [
            {
              id: '321',
              documentName: 'Пункт договора Договор №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
            {
              id: '322',
              documentName: 'Дополнение к договору №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
          ],
        },
        {
          id: '33',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid
      keyId="id"
      rows={fakeData}
      columns={columns}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 *  Используя пропс `isInitialExpanded` можно раскрыть вложенные структуру при первичном отображении
 */
export const TreeWithInitialExpanded = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '32',
          documentName: 'Договор №45678',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
          children: [
            {
              id: '321',
              documentName: 'Пункт договора Договор №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
            {
              id: '322',
              documentName: 'Дополнение к договору №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
          ],
        },
        {
          id: '33',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid
      keyId="id"
      rows={fakeData}
      columns={columns}
      isInitialExpanded
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 *  Используя пропс `expandedLevel` можно настраивать глубину раскрытия дерева при первичном отображении, если `isInitialExpanded=true`
 */
export const TreeWithExpandedLevel = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '32',
          documentName: 'Договор №45678',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
          children: [
            {
              id: '321',
              documentName: 'Пункт договора Договор №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
            {
              id: '322',
              documentName: 'Дополнение к договору №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
          ],
        },
        {
          id: '33',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid
      keyId="id"
      rows={fakeData}
      columns={columns}
      isInitialExpanded
      expandedLevel={3}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 *  Пропс `initialVisibleChildrenCount` позволяет настраивать количество отображаемых элементов при раскрытии корневого элемента.
 *  Элементы, сверх этого значения, будут скрыты под кнопку "Показать все"
 */
export const TreeWithInitialVisibleChildrenCount = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '32',
          documentName: 'Договор №45678',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '33',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '34',
          documentName: 'Договор №123',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '35',
          documentName: 'Договор №569-4',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '36',
          documentName: 'Договор №00056789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '37',
          documentName: 'Договор №00022889',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid
      keyId="id"
      rows={fakeData}
      columns={columns}
      isInitialExpanded
      initialVisibleChildrenCount={5}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Таблица с древовидной структурой так же работает в варианте с множественным выбором (чекбоксы)
 */
export const TreeWithCheckbox = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
          options: {
            isDisabled: true,
            disabledReason: 'Нет доступа',
          },
        },
        {
          id: '32',
          documentName: 'Договор №45678',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
          children: [
            {
              id: '321',
              documentName: 'Пункт договора Договор №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
            {
              id: '322',
              documentName: 'Дополнение к договору №56789',
              recipient: 'ООО "Волшебные документы"',
              createDate: generateRandomDate(),
            },
          ],
        },
        {
          id: '33',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * `options` и `childrenColumns` на уровне строки, позволяет настраивать отображение дочерних элементов,
 *  например указать кастомный список действий для вложенных элементов
 */
export const TreeWithOverrideColumns = () => {
  const ACTIONS: Actions<DataType> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => console.log('delete'),
      },
    ],
  };

  const columns = generateColumns(FAKE_COLUMNS, [
    {
      field: 'actions',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS} row={row} />;
      },
    },
  ]);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '1',
      documentName: 'Договор на поставку',
      recipient: 'ИП Иванов О.В.',
      createDate: generateRandomDate(),
    },
    {
      id: '2',
      documentName: 'Пакет документов',
      recipient: 'ООО "Новая организация"',
      createDate: generateRandomDate(),
      options: {
        childrenColumns: [
          {
            field: 'actions',
            renderCell: (row) => {
              return (
                <ActionCell
                  actions={{
                    main: [
                      {
                        icon: <EyeFillMd />,
                        name: 'Просмотреть',
                        onClick: () => console.log('main'),
                      },
                    ],
                  }}
                  row={row}
                />
              );
            },
          },
        ],
      },
      children: [
        {
          id: '21',
          documentName: 'Договор №123',
          recipient: 'ООО "Новая организация"',
          createDate: generateRandomDate(),
        },
      ],
    },
    {
      id: '3',
      documentName: 'Пакет документов',
      recipient: 'ООО "Волшебные документы"',
      createDate: generateRandomDate(),
      options: {
        childrenColumns: [
          {
            field: 'actions',
            renderCell: (row) => {
              return (
                <ActionCell
                  actions={{
                    main: [
                      {
                        icon: <EyeFillMd />,
                        name: 'Просмотреть',
                        onClick: () => console.log('main'),
                      },
                    ],
                  }}
                  row={row}
                />
              );
            },
          },
        ],
      },
      children: [
        {
          id: '31',
          documentName: 'Договор №34567',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
        {
          id: '32',
          documentName: 'Договор №56789',
          recipient: 'ООО "Волшебные документы"',
          createDate: generateRandomDate(),
        },
      ],
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columns}
      isLoading={isLoading}
      selectedRows={selected}
      onSelectRow={handleSelect}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`
 */
export const WithLoaderInButton = () => {
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);

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
      field: 'recipient',
      label: 'Получатель',
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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={ACTIONS_WITH_LOADER} row={row} />;
      },
    },
  ];

  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 5));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <NewDataGrid<DataType, SortField>
      keyId="id"
      rows={slicedData}
      columns={columnsWithLoader}
      isLoading={isLoading}
      onRowClick={handleRowClick}
      onRetry={() => {}}
    />
  );
};

/**
 * В случае, когда нет данных для отображения их в таблице, необходимо показать изображение и текст “Нет данных” и убрать сортировку для столбцов, если она присутствует.
 * Изображение можно передать через ConfigProvider.
 */
export const NoData = () => {
  const noDataStubSrc = '/no-data-stub.svg';
  const columns = FAKE_COLUMNS;

  const [isLoading, setLoading] = useState(true);
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
      <NewDataGrid<DataType, SortField>
        keyId="id"
        activeRowId={'3'}
        rows={slicedData}
        columns={columns}
        isLoading={isLoading}
        onRowClick={handleRowClick}
        onRetry={() => {}}
      />
    </ConfigProvider>
  );
};

export const Loading = () => {
  const noDataStubSrc = '/no-data-stub.svg';

  const columns = FAKE_COLUMNS;

  const handleRetry = () => console.log('retry request');
  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataStubSrc,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <NewDataGrid<DataType, SortField>
        keyId="id"
        isLoading
        rows={[]}
        columns={columns}
        onRowClick={handleRowClick}
        onRetry={handleRetry}
      />
    </ConfigProvider>
  );
};

export const Error = () => {
  const noDataStubSrc = '/no-data-stub.svg';
  const columns = FAKE_COLUMNS;

  const handleRetry = () => console.log('retry request');
  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataStubSrc,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <NewDataGrid<DataType, SortField>
        keyId="id"
        isError
        errorMsg="Ошибка 500"
        rows={[]}
        columns={columns}
        onRowClick={handleRowClick}
        onRetry={handleRetry}
      />
    </ConfigProvider>
  );
};
