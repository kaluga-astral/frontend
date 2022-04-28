import { EditOutlineMd, EyeFillMd, SendOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { CellValue, DataGrid, DataGridColumns } from '../DataGrid';

import { ActionCell } from './ActionCell';
import { Action } from './types';

export default {
  title: 'Components/ActionCell',
  component: ActionCell,
};

type ColumnsType = {
  documentName: string;
  action: CellValue;
};

const ACTIONS: Action<ColumnsType>[] = [
  { Icon: <EyeFillMd />, name: 'Отправить', onClick: () => {} },
  { Icon: <EditOutlineMd />, name: 'Редактировать', onClick: () => {} },
  { Icon: <SendOutlineMd />, name: 'Удалить', onClick: () => {} },
  { Icon: <SendOutlineMd />, name: 'Удалить 2', onClick: () => {} },
];

const columns: DataGridColumns<ColumnsType>[] = [
  {
    field: 'documentName',
    label: 'Документ',
    sortable: false,
  },
  {
    field: 'action',
    label: 'Действия',
    sortable: false,
    align: 'center',
    renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
  },
];

const data = [
  {
    id: '1',
    documentName: 'Документ 1',
    action: null,
  },
  {
    id: '2',
    documentName: 'Документ 2',
    action: null,
  },
  {
    id: '3',
    documentName: 'Документ 3',
    action: null,
  },
];

const Template: Story = (args) => {
  return (
    <DataGrid
      {...args}
      rows={data}
      columns={columns}
      keyId="id"
      onSort={() => {}}
    />
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
