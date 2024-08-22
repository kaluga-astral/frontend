import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { styled } from '../styles';
import { Typography } from '../Typography';

import {
  TreeAutocomplete,
  type TreeAutocompleteProps,
  type TreeAutocompleteTreeProps,
} from './TreeAutocomplete';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=29018-26806&t=KlO3eS3OpSUPrLex-0)
 * ### [Guide]()
 * TreeAutocomplete - Компонент предназначен для выбора значения из опций, имеющих древовидную структуру, с поддержкой поиска.
 */
const meta: Meta<typeof TreeAutocomplete> = {
  title: 'Components/TreeAutocomplete',
  component: TreeAutocomplete,
};

export default meta;

const FAKE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'Group 1',
    children: [
      {
        id: '11',
        label: 'Item 1.1',
      },
      {
        id: '12',
        label: 'Item 1.2',
      },
    ],
  },
  {
    id: '2',
    label: 'Group 2',
    children: [
      {
        id: '21',
        label: 'Group 2.1',
        children: [
          {
            id: '211',
            label: 'Item 2.1.1',
          },
          {
            id: '212',
            label: 'Item 2.1.2',
          },
        ],
      },
      {
        id: '22',
        label: 'Group 2.2',
        children: [
          {
            id: '221',
            label: 'Item 2.2.1',
            children: [
              {
                id: '2211',
                label: 'Item 2.2.1.1',
              },
              {
                id: '2212',
                label: 'Item 2.2.1.2',
              },
              {
                id: '2213',
                label: 'Item 2.2.1.3',
              },
            ],
          },
        ],
      },
    ],
  },
];

const FAKE_NOTE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'Организация 1',
    note: 'Руководитель',
    children: [
      {
        id: '11',
        label: 'Подразделение 1.1',
        note: 'Руководитель',
      },
      {
        id: '12',
        label: 'Подразделение 1.2',
        note: 'Руководитель',
      },
    ],
  },
  {
    id: '2',
    label: 'Организация 2',
    note: 'Руководитель',
  },
];

export const Example = () => {
  const [value, setValue] = useState<string | undefined>('3');

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeAutocomplete
      label="Название"
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onChange={setValue}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState<string | undefined>('3');

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeAutocomplete
      label="Название"
      isDisabled
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onChange={setValue}
    />
  );
};

export const Required = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeAutocomplete
      label="Название"
      required
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onChange={setValue}
    />
  );
};

export const Error = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeAutocomplete
      label="Название"
      isError
      helperText="Обязательное"
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onChange={setValue}
    />
  );
};

/**
 * filterOptions предназначен для кастомизации способа поиска введенного значения в дереве.
 * Например можно организовать поиск только по `label`
 */
export const FilterOptions = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
      note: 'Синий',
    },
  ];

  const filterOptions: TreeAutocompleteProps['filterOptions'] = (
    node,
    searchValue,
  ) => {
    if (typeof node.label !== 'string') {
      return false;
    }

    return node.label.includes(searchValue);
  };

  return (
    <TreeAutocomplete
      label="Название"
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      filterOptions={filterOptions}
      onChange={setValue}
    />
  );
};

export const DisabledItems = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    ...FAKE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Item 3',
    },
  ];

  return (
    <TreeAutocomplete
      label="Название"
      required
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      treeProps={{
        disabledItems: [
          { id: '21', disableReason: 'Элемент заблокирован' },
          '3',
        ],
      }}
      onChange={setValue}
    />
  );
};

export const RenderItem = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    ...FAKE_NOTE_TREE_LIST_DATA,
    {
      id: '3',
      label: 'Организация 3',
    },
  ];

  const CustomItem = styled.div`
    padding-left: ${({ theme }) => theme.spacing(1)};
  `;

  const renderItem: TreeAutocompleteTreeProps['renderItem'] = ({
    note,
    label,
  }) => (
    <CustomItem>
      <Typography component="div" variant="caption">
        # {label}
      </Typography>
      {note && <Typography variant="h7">{note}</Typography>}
    </CustomItem>
  );

  return (
    <TreeAutocomplete
      label="Название"
      required
      options={fakeOptions}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      treeProps={{
        renderItem,
      }}
      onChange={setValue}
    />
  );
};

export const Loading = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <TreeAutocomplete
      label="Название"
      isLoading
      options={[]}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onChange={setValue}
    />
  );
};

export const LoadingError = () => {
  const [value, setValue] = useState<string | undefined>();

  const handleRetry = () => alert('Retry');

  return (
    <TreeAutocomplete
      label="Название"
      isLoadingError
      options={[]}
      value={value}
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onRetry={handleRetry}
      onChange={setValue}
    />
  );
};
