import { EyeFillMd, SendOutlineMd } from '@astral/icons';
import { type StoryFn } from '@storybook/react';

import { type CellValue, DataGrid, type DataGridColumns } from '../DataGrid';

import { ActionCell, type Actions } from './ActionCell';

export default {
  title: 'Components/ActionCell',
  component: ActionCell,
};

type ColumnsType = {
  documentName: string;
  action: CellValue;
};

const MAIN_ACTIONS = [
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
        disabledReason: 'Не работает',
        disabled: true,
      },
      { name: 'Сюда', onClick: () => console.log('nested 2') },
    ],
  },
];

const SECONDARY_ACTIONS = [
  {
    name: 'Редактировать',
    onClick: () => console.log('secondary 1'),
    disabled: true,
    disabledReason:
      'Текущий документ не прошел согласование/подписание. Загрузите документ повторно',
  },
  { name: 'Удалить', onClick: () => console.log('secondary 2') },
];

const ACTIONS: Actions<ColumnsType> = {
  main: MAIN_ACTIONS,
  secondary: SECONDARY_ACTIONS,
};

const ACTIONS_WITHOUT_SECONDARY: Actions<ColumnsType> = {
  main: MAIN_ACTIONS,
};

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

const Template: StoryFn = (args) => {
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
      renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
    },
  ];

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

export const OnlyMainActions: StoryFn = (args) => {
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
        <ActionCell actions={ACTIONS_WITHOUT_SECONDARY} row={row} />
      ),
    },
  ];

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
