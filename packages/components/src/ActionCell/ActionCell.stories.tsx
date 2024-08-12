import {
  BinOutlineMd,
  EyeFillMd,
  SaveOutlineMd,
  SendOutlineMd,
} from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { DataGrid, type DataGridColumns } from '../DataGrid';

import { ActionCell, type Actions } from './ActionCell';

/**
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof ActionCell> = {
  title: 'Components/ActionCell',
  component: ActionCell,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
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

const ACTIONS: Actions<DataType> = {
  main: MAIN_ACTIONS,
  secondary: SECONDARY_ACTIONS,
};

const INTERACTION_ACTIONS: Actions<unknown> = {
  main: MAIN_ACTIONS,
  secondary: SECONDARY_ACTIONS,
};

const ACTIONS_WITHOUT_SECONDARY: Actions<DataType> = {
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

type Story = StoryObj<typeof ActionCell>;

export const Interaction: Story = {
  args: {
    actions: INTERACTION_ACTIONS,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Документ',
      sortable: false,
    },
    {
      label: 'Действия',
      sortable: false,
      width: '10%',
      align: 'right',
      renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
    },
  ];

  return (
    <DataGrid rows={data} columns={columns} keyId="id" onSort={() => {}} />
  );
};

export const OnlyMainActions = () => {
  const columns: DataGridColumns<DataType>[] = [
    {
      field: 'documentName',
      label: 'Документ',
      sortable: false,
    },
    {
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
    <DataGrid rows={data} columns={columns} keyId="id" onSort={() => {}} />
  );
};

export const LoaderActions = () => {
  type DataTypeActions = {
    id: string;
    actions?: object;
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  const FAKE_ACTIONS: Actions<DataTypeActions> = {
    isBlockingOperation: loading,
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        loading: loading,
        onClick: () => setLoading((prevState) => !prevState),
      },
      {
        icon: <SaveOutlineMd />,
        name: 'Сохранить',
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

  const fakeData: DataTypeActions = {
    id: '123456789',
  };

  return <ActionCell actions={FAKE_ACTIONS} row={fakeData} />;
};
