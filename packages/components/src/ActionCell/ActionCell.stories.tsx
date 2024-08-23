import {
  BinOutlineMd,
  EyeFillMd,
  SaveOutlineMd,
  SendOutlineMd,
} from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { type DataGridColumns, NewDataGrid } from '../NewDataGrid';

import { ActionCell, type Actions } from './ActionCell';

/**
 * Компонент ActionCell не предназначен для использования в NewDataGrid. Используйте [NewActionCell](/docs/components-newactioncell--docs)
 *
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
      width: '120px',
      align: 'right',
      renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
    },
  ];

  return (
    <NewDataGrid rows={data} columns={columns} keyId="id" onRetry={() => {}} />
  );
};

export const OnlyMainActions = () => {
  return <ActionCell actions={ACTIONS_WITHOUT_SECONDARY} row={data[1]} />;
};

export const LoaderActions = () => {
  type DataTypeActions = {
    id: string;
    actions?: object;
  };

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (deleteLoading) {
      setTimeout(() => {
        setDeleteLoading(false);
      }, 1500);
    }

    if (saveLoading) {
      setTimeout(() => {
        setSaveLoading(false);
      }, 1500);
    }
  }, [deleteLoading, saveLoading]);

  const FAKE_ACTIONS: Actions<DataTypeActions> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => setDeleteLoading((prevState) => !prevState),
        loading: deleteLoading,
      },
      {
        icon: <SaveOutlineMd />,
        name: 'Сохранить',
        loading: saveLoading,
        onClick: () => setSaveLoading((prevState) => !prevState),
      },
    ],
  };

  const fakeData: DataTypeActions = {
    id: '123456789',
  };

  return <ActionCell actions={FAKE_ACTIONS} row={fakeData} />;
};

export const BlockingOperations = () => {
  type DataTypeActions = {
    id: string;
    actions?: object;
  };

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (deleteLoading) {
      setTimeout(() => {
        setDeleteLoading(false);
      }, 1500);
    }

    if (saveLoading) {
      setTimeout(() => {
        setSaveLoading(false);
      }, 1500);
    }
  }, [deleteLoading, saveLoading]);

  const FAKE_ACTIONS: Actions<DataTypeActions> = {
    main: [
      {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => setDeleteLoading((prevState) => !prevState),
        loading: deleteLoading,
        isBlockingOperation: true,
      },
      {
        icon: <SaveOutlineMd />,
        name: 'Сохранить',
        onClick: () => setSaveLoading((prevState) => !prevState),
        loading: saveLoading,
      },
    ],
    secondary: [
      { name: 'Редактировать', onClick: () => console.log('secondary 1') },
    ],
  };

  const fakeData: DataTypeActions = {
    id: '123456789',
  };

  return <ActionCell actions={FAKE_ACTIONS} row={fakeData} />;
};
