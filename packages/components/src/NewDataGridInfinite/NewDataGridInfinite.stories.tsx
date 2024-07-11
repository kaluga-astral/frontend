import { useEffect, useState } from 'react';
import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { type Meta } from '@storybook/react';

import errorIllustration from '../../../ui/illustrations/error.svg';
import noDataIllustration from '../../../ui/illustrations/no-data.svg';
import { ConfigProvider } from '../ConfigProvider';
import { ActionCell, type Actions } from '../ActionCell';
import type { DataGridColumns } from '../NewDataGrid';
import { styled } from '../styles';

import { NewDataGridInfinite } from './NewDataGridInfinite';
import { makeDataList } from './faker';

/**
 * Таблица с бесконечным скроллом построенная на css grid
 *
 * NewDataGridInfinite обладает тем же функционалом  что и [NewDataGrid](/docs/components-newdatagrid--docs)
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 */
const meta: Meta<typeof NewDataGridInfinite> = {
  title: 'Components/NewDataGridInfinite',
  component: NewDataGridInfinite,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};
type SortField = 'documentName' | 'direction' | 'createDate';

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

const DataGridInfiniteWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const Example = () => {
  const data = makeDataList(10);

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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
  ];

  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
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

export const NoData = () => {
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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
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
  const data = makeDataList(10);

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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
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
          rows={data}
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
  const data = makeDataList(10);

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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
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
          rows={data}
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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
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
      width: '120px',
      renderCell: (row) => {
        return <ActionCell actions={FAKE_ACTIONS} row={row} />;
      },
    },
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
