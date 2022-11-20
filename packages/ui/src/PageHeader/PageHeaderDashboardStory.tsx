import {
  AddOutlineMd,
  CompanyOutlineMd,
  EyeFillMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SearchOutlineMd,
  SendOutlineMd,
  SettingsFillMd,
} from '@astral/icons';
import { Box, Stack } from '@mui/material';
import { ChangeEvent, Fragment, useState } from 'react';

import { ActionCell, Actions } from '../ActionCell';
import { DashboardLayout } from '../DashboardLayout';
import { SidebarProps } from '../DashboardLayout/Sidebar';
import { DataGrid, DataGridColumns } from '../DataGrid';
import { DataGridPagination } from '../DataGridPagination';
import { Divider } from '../Divider';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Menu, MenuProps } from '../Menu';
import { MenuItem } from '../MenuItem';
import { PageLayout } from '../PageLayout';
import { ProductSwitcher } from '../ProductSwitcher';
import { handleGetProducts } from '../ProductSwitcher/ProductSwitcher.stories';
import { Select } from '../Select';
import { TextField } from '../TextField';

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

export const PageHeaderDashboardStory = () => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [slicedData, setSlicedData] = useState<DataType[]>(data.slice(0, 10));
  const [page, setPage] = useState<number>(1);

  const header = {
    productSwitcher() {
      return (
        <Box>
          <ProductSwitcher getProducts={handleGetProducts} />
        </Box>
      );
    },
    product: {
      name: 'Астрал.ЭДО',
      logo() {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
              fill="#8566FF"
            />
            <path
              d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
              fill="#5D3FD4"
            />
          </svg>
        );
      },
    },
    profile: {
      displayName: 'Григорьев Виталий',
      annotation: 'vitatiy_grig@mail.ru',
      avatar: {
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      },
      menu(props: MenuProps) {
        return (
          <Menu {...props}>
            <MenuItem>
              <ListItemIcon>
                <ProfileOutlineMd />
              </ListItemIcon>
              <ListItemText>Мой профиль</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <CompanyOutlineMd />
              </ListItemIcon>
              <ListItemText>Мои организации</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsFillMd />
              </ListItemIcon>
              <ListItemText>Настройки</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <QuitOutlineMd />
              </ListItemIcon>
              <ListItemText>Выйти</ListItemText>
            </MenuItem>
          </Menu>
        );
      },
    },
  };
  const sidebar = {
    menu: {
      items: [
        [
          'documents',
          {
            icon: <ProfileOutlineMd />,
            text: 'Документы',
            items: [
              [
                'incoming-documents',
                {
                  text: 'Входящие документы',
                  active: true,
                },
              ],
              [
                'outgoing-documents',
                {
                  text: 'Исходящие документы',
                  active: false,
                },
              ],
            ],
          },
        ],
        [
          'counterparties',
          {
            icon: <ProfileOutlineMd />,
            text: 'Контрагенты',
            items: [
              [
                'invitations',
                {
                  text: 'Приглашения',
                  active: false,
                },
              ],
            ],
          },
        ],
        [
          'organizations',
          {
            icon: <CompanyOutlineMd />,
            text: 'Мои организации',
            active: true,
          },
        ],
      ],
    },
  } as SidebarProps;

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
    <DashboardLayout>
      <DashboardLayout.Header {...header} />
      <DashboardLayout.Sidebar {...sidebar} />
      <DashboardLayout.Main>
        <PageLayout
          header={{
            title: 'Черновики',
            breadCrumbs: [
              <Fragment key="1">Первый текст</Fragment>,
              <Fragment key="2">Текст с разделителем</Fragment>,
              <Fragment key="3">Текст с разделителем</Fragment>,
            ],
            actions: {
              mainButtons: [
                {
                  text: 'Основное действие',
                  startIcon: <AddOutlineMd />,
                },
              ],
              secondaryButtons: [
                {
                  text: 'Кнопка',
                },
              ],
            },
            subHeader: (
              <Stack flexDirection="row" flexWrap="wrap" gap={2}>
                <TextField
                  placeholder="Поиск на странице..."
                  size="small"
                  InputProps={{
                    startAdornment: <SearchOutlineMd />,
                  }}
                />
                <Select value="" placeholder="Выберите вариант" size="small" />
                <Select value="" placeholder="Выберите вариант" size="small" />
              </Stack>
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
            hasDefaultPadding: true,
          }}
        />
      </DashboardLayout.Main>
    </DashboardLayout>
  );
};
