import { useEffect, useMemo, useState } from 'react';
import {
  BinOutlineMd,
  EditOutlineMd,
  EyeFillMd,
  SendOutlineMd,
} from '@astral/icons';
import { type Meta } from '@storybook/react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import noDataIllustration from '../../../ui/illustrations/no-data.svg';
import { ConfigProvider } from '../ConfigProvider';
import {
  DataGridActionCell,
  type DataGridActionCellProps,
  type DataGridActions,
} from '../DataGridActionCell';
import type { DataGridColumns, DataGridRowWithOptions } from '../NewDataGrid';
import { styled } from '../styles';
import { makeColumns } from '../NewDataGrid/faker';

import { NewDataGridInfinite } from './NewDataGridInfinite';
import { makeDataList, makeDataListWithTree, makeRandomDate } from './faker';

/**
 * Таблица с бесконечным скроллом построенная на css grid
 *
 * NewDataGridInfinite обладает тем же функционалом  что и [NewDataGrid](/docs/components-data-display-newdatagrid--docs)
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 */
const meta: Meta<typeof NewDataGridInfinite> = {
  title: 'Components/Data Display/NewDataGridInfinite',
  component: NewDataGridInfinite,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  recipient: string;
  createDate: string;
  actions?: object;
};

type SortField = 'documentName' | 'recipient' | 'createDate';

const FAKE_ACTIONS: DataGridActions<DataType> = {
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
      return <DataGridActionCell actions={FAKE_ACTIONS} row={row} />;
    },
  },
];

type FakeActionCellProps<TRow> = Pick<DataGridActionCellProps<TRow>, 'row'>;

const DataGridInfiniteWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const Example = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
    },
    ...makeDataList(9),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const WithDisabledRow = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isDisabled: true,
        disabledReason: 'Нет доступа',
      },
    },
    ...makeDataList(9, { isDisabled: true, disabledReason: 'Нет доступа' }),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

/**
 * `isDisabledLastCell` позволяет не блокировать последнюю ячейку
 */
export const DisabledLastCell = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isDisabled: true,
        isDisabledLastCell: false,
        disabledReason: 'Нет доступа',
      },
    },
    ...makeDataList(9, {
      isDisabled: true,
      isDisabledLastCell: false,
      disabledReason: 'Нет доступа',
    }),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

/**
 * При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`
 */
export const ActionsDataGrid = () => {
  const FakeActionCell = <TRow,>({ row }: FakeActionCellProps<TRow>) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isSigning, setIsSigning] = useState(false);

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleDelete = () => {
      setIsDeleting(true);
    };

    const handleSign = () => {
      setIsSigning(true);
    };

    useEffect(() => {
      if (isEditing) {
        setTimeout(() => setIsEditing(false), 1500);
      }

      if (isDeleting) {
        setTimeout(() => setIsDeleting(false), 1500);
      }

      if (isSigning) {
        setTimeout(() => setIsSigning(false), 1500);
      }
    }, [isEditing, isDeleting, isSigning]);

    const fakeActions = useMemo(
      () => ({
        main: [
          {
            icon: <EditOutlineMd />,
            name: 'Редактировать',
            loading: isEditing,
            onClick: handleEdit,
          },
          {
            icon: <BinOutlineMd />,
            name: 'Удалить',
            loading: isDeleting,
            loadingNote: 'Происходит удаление',
            isBlockingOperation: true,
            onClick: handleDelete,
          },
        ],
        secondary: [
          {
            name: 'Подписать',
            loading: isSigning,
            loadingNote: 'Происходит подписание',
            isBlockingOperation: true,
            onClick: handleSign,
          },
        ],
      }),
      [isEditing, isDeleting, isSigning],
    );

    return <DataGridActionCell actions={fakeActions} row={row} />;
  };

  const fakeColumns: DataGridColumns<DataType>[] = [
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
        return <FakeActionCell row={row} />;
      },
    },
  ];

  const columns = makeColumns(fakeColumns);

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
    },
    ...makeDataList(9),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const WithTree = () => {
  const columns = FAKE_COLUMNS;
  const fakeData = [
    {
      id: '123456789',
      documentName: 'Пакет документов',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      children: [
        {
          id: '1234567890',
          documentName: 'Договор №12345678',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
        },
      ],
    },
    ...makeDataListWithTree(9),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleSelect = (rows: DataType[]) => setSelected(rows);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          selectedRows={selected}
          onSelectRow={handleSelect}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

/**
 * Указав значение `isNotSelectable` в `options` можно сделать строку не доступной для выбора
 */
export const TreeWithOptionIsNotSelectable = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Пакет документов',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true,
      },
      children: [
        {
          id: '1234567890',
          documentName: 'Договор №12345678',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
        },
      ],
    },
    {
      id: '1234544545',
      documentName: 'Пакет документов',
      recipient: 'ООО "Купи Продай"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true,
      },
      children: [
        {
          id: '1234567891',
          documentName: 'Договор 1234567891',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
        },
      ],
    },
    ...makeDataList(8),
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
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          columns={columns}
          isLoading={isLoading}
          selectedRows={selected}
          onSelectRow={handleSelect}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

/**
 * `options` и `childrenColumns` на уровне строки, позволяет настраивать отображение дочерних элементов,
 *  например указать кастомный список действий для вложенных элементов
 */
export const TreeWithOverrideColumns = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        childrenColumns: [
          {
            field: 'actions',
            renderCell: (row) => {
              return (
                <DataGridActionCell
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
    },
    ...makeDataListWithTree(9, {
      childrenColumns: [
        {
          field: 'actions',
          renderCell: (row) => {
            return (
              <DataGridActionCell
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
    }),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          selectedRows={selected}
          onSelectRow={handleSelect}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

/**
 * Возможно отображение дочерних элементов в виде вложенных строк. Для этого необходимо указать `variant="subrows"`
 * В таком варианте отображения вложенные элементы отображаются сразу и только часть из них прячется под кнопку "Показать все"
 */
export const Subrows = () => {
  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'recipient',
      label: 'Получатель',
      sortable: true,
    },
    {
      field: 'documentName',
      label: 'Наименование документа',
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
        return <DataGridActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
  ];

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'УКД № 47',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        childrenColumns: [
          {
            field: 'recipient',
            renderCell: () => null,
          },
          {
            field: 'actions',
            renderCell: () => null,
          },
        ],
      },
      children: [
        {
          id: '1234567890',
          documentName: 'Акт № УТ000006319',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
          options: {
            isNotSelectable: true,
          },
        },
        {
          id: '1234567891',
          documentName: 'Торг-12 № 1446',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
          options: {
            isNotSelectable: true,
          },
        },
        {
          id: '1234567892',
          documentName: 'Счет-фактура №1237',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
          options: {
            isNotSelectable: true,
          },
        },
      ],
    },
    {
      id: '1234544545',
      documentName: 'УКД № 46',
      recipient: 'ООО "Купи Продай"',
      createDate: makeRandomDate(),
      options: {
        childrenColumns: [
          {
            field: 'recipient',
            renderCell: () => null,
          },
          {
            field: 'actions',
            renderCell: () => null,
          },
        ],
      },
      children: [
        {
          id: '1234567890',
          documentName: 'Счет-фактура №1231',
          recipient: 'ПАО "Первый завод"',
          createDate: makeRandomDate(),
          options: {
            isNotSelectable: true,
          },
        },
      ],
    },
    ...makeDataList(8),
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleSelect = (rows: DataType[]) => setSelected(rows);

  const incrementData = () => {
    setLoading(true);

    setTimeout(() => {
      setSlicedData((prevData) => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={slicedData}
          isLoading={isLoading}
          isEndReached={isEndReached}
          columns={columns}
          variant="subrows"
          subrows={{
            moreButtonColumnPosition: 2,
          }}
          selectedRows={selected}
          onSelectRow={handleSelect}
          onEndReached={incrementData}
          onRowClick={handleRowClick}
          onRetry={() => {}}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const NoData = () => {
  const columns = FAKE_COLUMNS;

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={[]}
          columns={columns}
          onRowClick={handleRowClick}
          onRetry={handleRetry}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const LoadingWithData = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
    },
    ...makeDataList(9),
  ];
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={fakeData}
          isLoading
          columns={columns}
          onRowClick={handleRowClick}
          onRetry={handleRetry}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const ErrorWithData = () => {
  const columns = FAKE_COLUMNS;

  const fakeData: DataGridRowWithOptions<DataType>[] = [
    {
      id: '123456789',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
    },
    ...makeDataList(9),
  ];

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={fakeData}
          isError
          columns={columns}
          onRowClick={handleRowClick}
          onRetry={handleRetry}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const Loading = () => {
  const columns = FAKE_COLUMNS;

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={[]}
          isLoading
          columns={columns}
          onRowClick={handleRowClick}
          onRetry={handleRetry}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};

export const Error = () => {
  const columns = FAKE_COLUMNS;

  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');

  return (
    <ConfigProvider
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: noDataIllustration,
        outdatedReleaseErrorImgSrc: '',
      }}
    >
      <DataGridInfiniteWrapper>
        <NewDataGridInfinite<DataType, SortField>
          keyId="id"
          rows={[]}
          isError
          errorMsg="Ошибка 500"
          columns={columns}
          onRowClick={handleRowClick}
          onRetry={handleRetry}
        />
      </DataGridInfiniteWrapper>
    </ConfigProvider>
  );
};
