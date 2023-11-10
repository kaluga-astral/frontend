import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import type { Story } from '@storybook/react';

import type { CellValue, DataGridColumns } from '../DataGrid';
import { DataGrid } from '../DataGrid';

import type { Actions } from './ActionCell';
import { ActionCell } from './ActionCell';

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
    {
      icon: <EyeFillMd />,
      name: 'Просмотреть нельзя',
      disabled: true,
      onClick: () => console.log('main'),
    },
    {
      icon: <SendOutlineMd />,
      nested: true,
      name: 'Отправить',
      actions: [
        {
          name: 'Туда',
          onClick: () => console.log('nested 1'),
          disabled: true,
        },
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
    label: 'Документ',
    sortable: false,
  },
  {
    field: 'action',
    label: 'Действия',
    sortable: false,
    width: '10%',
    align: 'right',
    renderCell: (row) => (
      <ActionCell tooltipPlacement="left" actions={ACTIONS} row={row} />
    ),
  },
];

const data = [
  {
    id: '1',
    documentName: 'Документ 1',
    action: () => {},
  },
  {
    id: '2',
    documentName: 'Документ 2',
    action: () => {},
  },
  {
    id: '3',
    documentName: 'Документ 3',
    action: () => {},
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
