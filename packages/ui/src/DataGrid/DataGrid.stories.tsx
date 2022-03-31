import { Story } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { Button } from '../Button';

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
    renderCell: () => <Button>Отправить</Button>,
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
  const [selected, setSelected] = useState<string[]>([]);
  const [sorting, setSorting] = useState<DataGridSort<ColumnsType>[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleSelect = (ids: string[]) => setSelected(ids);

  const handleSort = (newSorting: DataGridSort<ColumnsType>[]) =>
    setSorting(newSorting);

  const handleChangePage = (
    _event: ChangeEvent<unknown>,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  const slicedData = data.slice((page - 1) * 10, page * 10);

  return (
    <DataGrid
      {...args}
      keyId="id"
      rows={slicedData}
      columns={columns}
      totalCount={data.length}
      selectedRows={selected}
      onPageChange={handleChangePage}
      onSelectRow={handleSelect}
      onSort={handleSort}
      sorting={sorting}
      page={page}
    />
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: false },
  controls: { expanded: true },
};
