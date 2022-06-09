import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';

import { ActionCell, Actions } from '../ActionCell';
import { DataGridPagination } from '../DataGridPagination';

import { DataGrid } from './DataGrid';
import { CellValue, DataGridColumns, DataGridSort } from './types';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
};

type ColumnsType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
  action: CellValue;
};

const ACTIONS: Actions<ColumnsType> = {
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

const columns: DataGridColumns<ColumnsType>[] = [
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
    field: 'action',
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '1%',
    renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
  },
];

const data = [
  {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '2',
    documentName: 'Документ 2',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '3',
    documentName: 'Документ 3',
    direction: 'ПФР',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '4',
    documentName: 'Документ 4',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '5',
    documentName: 'Документ 5',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '6',
    documentName: 'Документ 6',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '7',
    documentName: 'Документ 7',
    direction: 'ПФР',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '8',
    documentName: 'Документ 8',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '9',
    documentName: 'Документ 9',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '10',
    documentName: 'Документ 10',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '11',
    documentName: 'Документ 11',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '12',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '13',
    documentName: 'Документ 13',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '15',
    documentName: 'Документ 14',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '14',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '16',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '17',
    documentName: 'Документ 13',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '18',
    documentName: 'Документ 14',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '19',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
  {
    id: '20',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
    action: null,
  },
];

const Template: Story = (args) => {
  const [selected, setSelected] = useState<ColumnsType[]>([]);
  const [sorting, setSorting] = useState<DataGridSort<ColumnsType>[]>([]);
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<ColumnsType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);

  const handleChangePage = (
    _event: ChangeEvent<unknown>,
    newPage: number
  ): void => {
    setLoading(true);
    setPage(newPage);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };

  const handleSelect = (rows: ColumnsType[]) => setSelected(rows);

  const handleSort = (newSorting: DataGridSort<ColumnsType>[]) =>
    setSorting(newSorting);

  return (
    <DataGrid
      {...args}
      keyId="id"
      rows={slicedData}
      columns={columns}
      selectedRows={selected}
      onSelectRow={handleSelect}
      minDisplayRows={10}
      loading={loading}
      onSort={handleSort}
      sorting={sorting}
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
