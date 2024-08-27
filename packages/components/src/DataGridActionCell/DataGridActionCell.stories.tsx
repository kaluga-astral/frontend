import { type Meta, type StoryObj } from '@storybook/react';
import { BinOutlineMd, EditOutlineMd, SaveOutlineMd } from '@astral/icons';
import { useEffect, useMemo, useState } from 'react';

import { type DataGridColumns, NewDataGrid } from '../NewDataGrid';

import {
  DataGridActionCell,
  type DataGridActionCellProps,
  type DataGridActions,
} from './DataGridActionCell';

/**
 * DataGridActionCell предназначен для использования в компонентах NewDataGrid и NewDataGridInfinite.
 * Работает с контекстом NewDataGrid и позволяет управлять состояниями строки при взаимодействии с действиями
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof DataGridActionCell> = {
  title: 'Components/DataGridActionCell',
  component: DataGridActionCell,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
};

const FAKE_ACTIONS = {
  main: [
    {
      icon: <EditOutlineMd />,
      name: 'Редактировать',
      onClick: () => {
        console.log('Редактировать');
      },
    },
    {
      icon: <BinOutlineMd />,
      name: 'Удалить',
      onClick: () => {
        console.log('Удалить');
      },
    },
  ],
  secondary: [
    {
      name: 'Подписать',
      onClick: () => {
        console.log('Подписать');
      },
    },
  ],
};

const FAKE_DATA = [
  {
    id: '1',
    documentName: 'Документ 1',
  },
  {
    id: '2',
    documentName: 'Документ 2',
  },
  {
    id: '3',
    documentName: 'Документ 3',
  },
];

type Story = StoryObj<typeof DataGridActionCell>;

export const Interaction: Story = {
  args: {
    actions: FAKE_ACTIONS,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  type FakeActionCellProps<TRow> = Pick<DataGridActionCellProps<TRow>, 'row'>;

  const FakeActionCell = <TRow,>({ row }: FakeActionCellProps<TRow>) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isSigning, setIsSigning] = useState(false);

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleDelete = () => {
      setIsDeleting(true);
    };

    const handleSign = () => {
      setIsSigning(true);
    };

    useEffect(() => {
      if (isEditing) {
        setTimeout(() => setIsEditing(false), 1500);
      }

      if (isDeleting) {
        setTimeout(() => setIsDeleting(false), 1500);
      }

      if (isSigning) {
        setTimeout(() => setIsSigning(false), 1500);
      }
    }, [isEditing, isDeleting, isSigning]);

    const fakeActions = useMemo(
      () => ({
        main: [
          {
            icon: <EditOutlineMd />,
            name: 'Редактировать',
            loading: isEditing,
            onClick: handleEdit,
          },
          {
            icon: <BinOutlineMd />,
            name: 'Удалить',
            loading: isDeleting,
            loadingNote: 'Происходит удаление',
            isBlockingOperation: true,
            onClick: handleDelete,
          },
        ],
        secondary: [
          {
            name: 'Подписать',
            loading: isSigning,
            loadingNote: 'Происходит подписание',
            isBlockingOperation: true,
            onClick: handleSign,
          },
        ],
      }),
      [isEditing, isDeleting, isSigning],
    );

    return <DataGridActionCell actions={fakeActions} row={row} />;
  };

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
      renderCell: (row) => <FakeActionCell row={row} />,
    },
  ];

  return (
    <NewDataGrid
      rows={FAKE_DATA}
      columns={columns}
      keyId="id"
      onRetry={() => {}}
    />
  );
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

  const fakeActions: DataGridActions<DataTypeActions> = {
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

  return <DataGridActionCell actions={fakeActions} row={fakeData} />;
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

  const fakeActions: DataGridActions<DataTypeActions> = {
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

  return <DataGridActionCell actions={fakeActions} row={fakeData} />;
};
