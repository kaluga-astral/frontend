import { Story } from '@storybook/react';
import { useState } from 'react';

import { DataGrid } from './DataGrid';
import { DataGridColumns } from './types';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
};

type ColumnsType = {
  documentName: string;
  direction: string;
  createDate: string;
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
  },
];

const data = [
  {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
  {
    id: '2',
    documentName: 'Документ 2',
    direction: 'ФСС',
    createDate: '01.12.22',
  },
  {
    id: '3',
    documentName: 'Документ 3',
    direction: 'ПФР',
    createDate: '13.12.22',
  },
  {
    id: '4',
    documentName: 'Документ 4',
    direction: 'РПН',
    createDate: '22.12.22',
  },
  {
    id: '5',
    documentName: 'Документ 5',
    direction: 'ФНС',
    createDate: '10.12.22',
  },
  {
    id: '6',
    documentName: 'Документ 6',
    direction: 'РПН',
    createDate: '09.12.22',
  },
  {
    id: '7',
    documentName: 'Документ 7',
    direction: 'ПФР',
    createDate: '11.12.22',
  },
  {
    id: '8',
    documentName: 'Документ 8',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
  {
    id: '9',
    documentName: 'Документ 9',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
  {
    id: '10',
    documentName: 'Документ 10',
    direction: 'ФСС',
    createDate: '11.12.22',
  },
  {
    id: '11',
    documentName: 'Документ 11',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
  {
    id: '12',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '11.12.22',
  },
  {
    id: '13',
    documentName: 'Документ 13',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
  {
    id: '15',
    documentName: 'Документ 14',
    direction: 'ФСС',
    createDate: '11.12.22',
  },
  {
    id: '14',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '11.12.22',
  },
];

const Template: Story = (args) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (ids: string[]) => setSelected(ids);

  return (
    <DataGrid
      {...args}
      data={data}
      columns={columns}
      keyId="id"
      rowsPerPage={10}
      selected={selected}
      onSelect={handleSelect}
    />
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
