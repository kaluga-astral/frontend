import {
  AddOutlineMd,
  EyeFillMd,
  SearchOutlineMd,
  SendOutlineMd,
} from '@astral/icons';
import { Stack } from '@mui/material';
import { type Meta } from '@storybook/react';
import { type ChangeEvent, Fragment, useState } from 'react';

import { ActionCell, type Actions } from '../ActionCell';
import { DataGrid, type DataGridColumns } from '../DataGrid';
import { DataGridPagination } from '../DataGridPagination';
import { ExampleTemplate } from '../docs';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Select } from '../Select';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { Grid } from '../Grid';

import { PageLayout } from './PageLayout';

/**
 *__Layouts__ — это варианты наполнения страниц под разные сценарии.
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=1097-40660)
 * ### [Guide]()
 */
const meta: Meta<typeof PageLayout> = {
  title: 'Components/Layout/PageLayout',
  component: PageLayout,
};

export default meta;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

const ACTIONS: Actions<DataType> = {
  main: [
    {
      icon: <EyeFillMd />,
      name: 'Просмотреть',
      onClick: () => console.log('main'),
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

const data: DataType[] = [
  {
    id: '1',
    documentName: 'Документ 1',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '2',
    documentName: 'Документ 2',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '3',
    documentName: 'Документ 3',
    direction: 'ПФР',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '4',
    documentName: 'Документ 4',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '5',
    documentName: 'Документ 5',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '6',
    documentName: 'Документ 6',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '7',
    documentName: 'Документ 7',
    direction: 'ПФР',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '8',
    documentName: 'Документ 8',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '9',
    documentName: 'Документ 9',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '10',
    documentName: 'Документ 10',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '11',
    documentName: 'Документ 11',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '12',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '13',
    documentName: 'Документ 13',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '15',
    documentName: 'Документ 14',
    direction: 'ФСС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '14',
    documentName: 'Документ 15',
    direction: 'ФНС',
    createDate: '2022-03-24T17:50:40.206Z',
  },
  {
    id: '16',
    documentName: 'Документ 12',
    direction: 'РПН',
    createDate: '2022-03-24T17:50:40.206Z',
  },
];

const columns: DataGridColumns<DataType>[] = [
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
    format: ({ createDate }) => new Date(createDate).toLocaleDateString(),
  },
  {
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '1%',
    renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
  },
];

/**
 * Типы компонента
 */

export const Types = () => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [slicedData, setSlicedData] = useState<DataType[]>(data.slice(0, 10));
  const [page, setPage] = useState<number>(1);

  const handleChangePage = (
    _event: ChangeEvent<unknown>,
    newPage: number,
  ): void => {
    setLoading(true);
    setPage(newPage);

    setTimeout(() => {
      setLoading(false);
      setSlicedData(data.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };

  const handleSelect = (rows: DataType[]) => setSelected(rows);

  const handleRowClick = (row: DataType) => console.log('row clicked', row);

  return (
    <ExampleTemplate>
      <ExampleTemplate.Case
        title="Table"
        fullWidth
        descriptionList={[
          'Используется, когда необходимо отобразить массив данных на странице в виде таблицы.',
        ]}
      >
        <PageLayout
          header={{
            title: 'Черновики',
            breadcrumbs: [
              <Fragment key="1">Первый текст</Fragment>,
              <Fragment key="2">Текст с разделителем</Fragment>,
              <Fragment key="3">Текст с разделителем</Fragment>,
            ],
            actions: {
              main: [
                {
                  text: 'Основное действие',
                  startIcon: <AddOutlineMd />,
                },
              ],
              secondary: [
                {
                  text: 'Кнопка',
                },
              ],
            },
            subheader: (
              <Grid container columns="240px repeat(2, 192px)" spacing={2}>
                <TextField
                  placeholder="Поиск на странице..."
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: <SearchOutlineMd />,
                  }}
                />
                <Select value="" placeholder="Выберите вариант" size="small" />
                <Select value="" placeholder="Выберите вариант" size="small" />
              </Grid>
            ),
          }}
          content={{
            children: (
              <DataGrid
                keyId="id"
                rows={slicedData}
                columns={columns}
                selectedRows={selected}
                onSelectRow={handleSelect}
                onRowClick={handleRowClick}
                minDisplayRows={10}
                loading={loading}
                Footer={
                  <DataGridPagination
                    totalCount={data.length}
                    onChange={handleChangePage}
                    page={page}
                  />
                }
              />
            ),
            isPaddingDisabled: false,
          }}
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Editor"
        fullWidth
        descriptionList={[
          'Используется, когда необходимо создать заявление/отчет или заполнить какую-то форму для отправки.',
        ]}
      >
        <PageLayout
          header={{
            title: 'Черновики',
            actions: {
              main: [
                {
                  text: 'Второстепенное действие',
                  variant: 'light',
                  startIcon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.00029 12V19C3.99713 19.13 4.02011 19.2593 4.06787 19.3802C4.11562 19.5011 4.18717 19.6113 4.27829 19.704C4.36983 19.7971 4.4789 19.8712 4.59921 19.922C4.71952 19.9729 4.84869 19.9993 4.97929 20H6.00029V11H4.98029C4.84969 11.0007 4.72052 11.0272 4.60021 11.078C4.4799 11.1288 4.37083 11.2029 4.27929 11.296C4.18799 11.3887 4.11626 11.4988 4.06833 11.6197C4.0204 11.7406 3.99726 11.87 4.00029 12ZM19.2813 11.04C18.9942 10.7058 18.638 10.4379 18.2373 10.2547C17.8366 10.0715 17.4009 9.97748 16.9603 9.97901H14.3263C14.3663 9.79801 14.4063 9.61901 14.4363 9.44701C14.9513 6.51301 14.4363 5.44701 13.9323 4.85301C13.7032 4.58462 13.4184 4.3693 13.0977 4.222C12.7771 4.0747 12.4282 3.99895 12.0753 4.00001C11.3316 4.02242 10.6213 4.31343 10.0756 4.81918C9.52998 5.32493 9.18599 6.0112 9.10729 6.75101C8.71429 8.59001 8.65329 8.75101 8.13929 9.47601L7.37129 10.565C7.13724 10.8997 7.01063 11.2976 7.00829 11.706V17.979C7.00929 18.511 7.22429 19.02 7.60429 19.395C7.98429 19.77 8.50029 19.98 9.03729 19.979H16.2843C17.0002 19.9852 17.6949 19.7363 18.2441 19.2769C18.7932 18.8176 19.1609 18.1777 19.2813 17.472L19.9583 13.472C20.0315 13.0418 20.0088 12.6007 19.8918 12.1803C19.7747 11.7599 19.5663 11.3705 19.2813 11.04ZM17.2833 17.14C17.2425 17.3751 17.1196 17.5881 16.9365 17.741C16.7534 17.8939 16.5219 17.9769 16.2833 17.975H9.03829V11.706L9.80529 10.617C10.5259 9.57462 10.9735 8.36815 11.1073 7.10801C11.1433 6.56501 11.3623 5.89901 12.0763 6.00001C12.7903 6.10001 12.6513 7.91601 12.4393 9.10001C12.2238 10.0814 11.9336 11.0449 11.5713 11.982L16.9613 11.974C17.2583 11.973 17.5413 12.102 17.7343 12.326C17.8293 12.4366 17.8989 12.5668 17.9379 12.7073C17.977 12.8478 17.9846 12.9952 17.9603 13.139L17.2843 17.14H17.2833Z"
                        fill="#072D57"
                      />
                    </svg>
                  ),
                },
                {
                  text: 'Основное действие',
                  startIcon: <AddOutlineMd />,
                },
              ],
              secondary: [
                {
                  text: 'Кнопка',
                },
              ],
            },
          }}
          content={{
            children: (
              <Stack padding={8}>
                <Grid container>
                  <Typography variant="h4" align="center">
                    Налоговый расчет по авансовому платежу по налогу на
                    имущество&nbsp;организаций
                  </Typography>
                  <Stack flexDirection="row" gap={4} pt={8}>
                    <TextField label="Номер корректировки" fullWidth />
                    <TextField label="Период (код)" fullWidth />
                    <TextField
                      label="Код места, по которому представляется документ"
                      fullWidth
                    />
                  </Stack>
                  <Stack flexDirection="row" gap={4}>
                    <TextField label="Код налогового органа" fullWidth />
                    <TextField
                      label="Код места, по которому представляется документ"
                      fullWidth
                    />
                  </Stack>
                  <Stack flexDirection="row" gap={4}>
                    <TextField label="Наименование организации" fullWidth />
                    <TextField label="Контактный телефон" fullWidth />
                  </Stack>
                </Grid>
              </Stack>
            ),
          }}
          aside={{
            children: (
              <>
                <TextField
                  placeholder="Поиск по отчету"
                  fullWidth
                  InputProps={{
                    startAdornment: <SearchOutlineMd />,
                  }}
                />
                <List>
                  <ListItem selected>Титульный лист</ListItem>
                  <ListItem>Раздел 1</ListItem>
                  <ListItem>Раздел 2</ListItem>
                  <ListItem>Раздел 3</ListItem>
                  <ListItem>Раздел 4</ListItem>
                  <ListItem>Раздел 5</ListItem>
                </List>
              </>
            ),
          }}
        />
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};
