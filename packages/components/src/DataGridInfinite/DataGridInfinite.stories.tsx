import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { type Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { ActionCell, type Actions } from '../ActionCell';
import { type DataGridColumns } from '../DataGrid';
import { styled } from '../styles';

import { DataGridInfinite } from './DataGridInfinite';
import { makeDataList } from './faker';

/**
 * Таблица с бесконечным скроллом.
 *
 * **❗️❗️❗️ Компонент устарел и больше не будет поддерживаться.**
 * **Используйте [NewDataGridInfinite](/docs/components-newdatagridinfinite--docs), который построен на css grid.**
 * Причина отказа от поддержки: DataGrid построен на неконтролируемой табличной верстке, которая не поддерживает вложенность
 *
 * DataGridInfinite обладает тем же функционалом  что и [DataGrid](/docs/components-datagrid--docs)
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=12407-146186&mode=design&t=sBor9IJ3F3TqLcos-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DataGridInfinite> = {
  title: 'Components/Data Display/DataGridInfinite',
  component: DataGridInfinite,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};
type SortField = 'documentName' | 'direction' | 'createDate';

const DataGridInfiniteWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const Example = () => {
  const data = makeDataList(10);

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

  const [loading, setLoading] = useState(true);
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
    <DataGridInfiniteWrapper>
      <DataGridInfinite<DataType, SortField>
        keyId="id"
        rows={slicedData}
        onEndReached={incrementData}
        isEndReached={isEndReached}
        columns={columns}
        onRowClick={handleRowClick}
        loading={loading}
      />
    </DataGridInfiniteWrapper>
  );
};
