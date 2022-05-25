import { EditOutlineMd, EyeFillMd, SendOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { CellValue, DataGrid, DataGridColumns } from '../DataGrid';

import { ActionCell, Actions } from './ActionCell';

export default {
  title: 'Components/ActionCell',
  component: ActionCell,
};

type ColumnsType = {
  documentName: string;
  action: CellValue;
};

const ACTIONS: Actions<ColumnsType> = {
  main: [
    { icon: <EyeFillMd />, name: 'Просмотреть', onClick: () => {} },
    {
      icon: <SendOutlineMd />,
      nested: true,
      name: 'Отправить',
      actions: [
        { name: 'Туда', onClick: () => {} },
        { name: 'Сюда', onClick: () => {} },
      ],
    },
  ],
  secondary: [
    { icon: <EditOutlineMd />, name: 'Редактировать', onClick: () => {} },
    { icon: <SendOutlineMd />, name: 'Удалить', onClick: () => {} },
  ],
};

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
