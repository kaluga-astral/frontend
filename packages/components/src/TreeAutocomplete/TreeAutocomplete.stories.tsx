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
    label: 'ООО "Новая организация"',
    children: [
      {
        id: '11',
        label: 'Отдел продаж',
      },
      {
        id: '12',
        label: 'Отдел закупок',
      },
    ],
  },
  {
    id: '2',
    label: 'ООО "Волшебные документы"',
  },
  {
    id: '3',
    label: 'ПАО "Завод №1"',
    children: [
      {
        id: '31',
        label: 'Отдел продаж',
      },
      {
        id: '32',
        label: 'Отдел снабжения',
      },
      {
        id: '33',
        label: 'Бухгалтерия',
      },
    ],
  },
  {
    id: '4',
    label: 'ИП Золотой С.И."',
  },
  {
    id: '5',
    label: 'ЗАО "ТехноИнновации"',
    children: [
      {
        id: '51',
        label: 'Департамент финансов',
        children: [
          {
            id: '511',
            label: 'Отдел бухгалтерии',
          },
          {
            id: '512',
            label: 'Отдел бюджетирования',
          },
        ],
      },
      {
        id: '52',
        label: 'ЗАО "ТехноИнновации"',
        children: [
          {
            id: '521',
            label: 'Отдел маркетинговых коммуникаций',
          },
          {
            id: '522',
            label: 'Отдел исследований и анализа',
          },
          {
            id: '523',
            label: 'Отдел продаж',
          },
        ],
      },
      {
        id: '53',
        label: 'Департамент информационных технологий',
      },
    ],
  },
];

const FAKE_NOTE_TREE_LIST_DATA = [
  {
    id: '1',
    label: 'ООО "Новая организация"',
    note: '',
    children: [
      {
        id: '11',
        label: 'Отдел продаж',
        note: 'sale@new-org.ru',
      },
      {
        id: '12',
        label: 'Отдел закупок',
        /* cSpell:ignore zakupki */
        note: 'zakupki@new-org.ru',
      },
    ],
  },
  {
    id: '2',
    label: 'ООО "Волшебные документы"',
    note: 'magicdocuments@mail.ru',
  },
  {
    id: '3',
    label: 'ПАО "Завод №1"',
    note: '',
    children: [
      {
        id: '31',
        label: 'Отдел продаж',
        note: 'sale@zavod1.ru',
      },
      {
        id: '32',
        label: 'Отдел снабжения',
        /* cSpell:ignore zakupki */
        note: 'zakupki@zavod1.ru',
      },
      {
        id: '33',
        label: 'Бухгалтерия',
        note: 'buh@zavod1.ru',
      },
    ],
  },
  {
    id: '4',
    label: 'ИП Золотой С.И."',
    note: 'zolotoy@mail.ru',
  },
];

export const Example = () => {
  const [value, setValue] = useState<string | undefined>('3');

  const fakeOptions = [
    {
      id: '10',
      label: 'ИП Иванов О.В.',
      note: 'ip_ivanov@gmail.com',
    },
    ...FAKE_NOTE_TREE_LIST_DATA,
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
    {
      id: '10',
      label: 'ИП Иванов О.В.',
    },
    ...FAKE_TREE_LIST_DATA,
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
    {
      id: '10',
      label: 'ИП Иванов О.В.',
      note: 'ip_ivanov@gmail.com',
    },
    ...FAKE_TREE_LIST_DATA,
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
    {
      id: '10',
      label: 'ИП Иванов О.В.',
      note: 'ip_ivanov@gmail.com',
    },
    ...FAKE_TREE_LIST_DATA,
  ];

  return (
    <TreeAutocomplete
      label="Название"
      isError
      helperText="Обязательно"
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
    {
      id: '10',
      label: 'ИП Иванов О.В.',
      note: 'ip_ivanov@gmail.com',
    },
    ...FAKE_NOTE_TREE_LIST_DATA,
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

/**
 * Используя `treeProps` можно сконфигурировать дерево опций, например указать список недоступных для выбора элементов
 */
export const DisabledItems = () => {
  const [value, setValue] = useState<string | undefined>();

  const fakeOptions = [
    {
      id: '10',
      label: 'ИП Иванов О.В.',
    },
    ...FAKE_TREE_LIST_DATA,
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
    {
      id: '10',
      label: 'ИП Иванов О.В.',
      note: 'ip_ivanov@gmail.com',
    },
    ...FAKE_NOTE_TREE_LIST_DATA,
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

/**
 * `loadingErrorMsg` позволяет указать кастомный текст ошибки при загрузке данных
 */
export const LoadingError = () => {
  const [value, setValue] = useState<string | undefined>();

  const handleRetry = () => alert('Retry');

  return (
    <TreeAutocomplete
      label="Название"
      isLoadingError
      options={[]}
      value={value}
      loadingErrorMsg="Ошибка загрузки списка опций"
      dialogProps={{
        title: 'Выбор элемента',
      }}
      onRetry={handleRetry}
      onChange={setValue}
    />
  );
};
