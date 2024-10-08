import { type Meta, type StoryObj } from '@storybook/react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  SearchOutlineMd,
} from '@astral/icons';
import { Fragment, type ReactNode, useState } from 'react';
import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import {
  AutoSaveIndicatorStore,
  useInitAutoSaveIndicatorStore,
} from '@astral/features';

import { DashboardLayout } from '../DashboardLayout';
import { ProductSwitcher } from '../ProductSwitcher';
import { handleGetProducts } from '../ProductSwitcher/ProductSwitcher.stub';
import { styled } from '../styles/styled';
import { type SidebarProps } from '../DashboardLayout/Sidebar';
import { TextField } from '../TextField';
import { Select } from '../Select';
import { PageLayout } from '../PageLayout';
import { Grid } from '../Grid';
import { MenuItem } from '../MenuItem';
import { DatePicker } from '../DatePicker';
import { TextArea } from '../TextArea';

import { AutoSaveIndicator } from './AutoSaveIndicator';

/**
 * Для декларативной работы с компонентом стоит использовать [AutoSaveIndicatorStore](https://www.npmjs.com/package/@astral/features?activeTab=readme)
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=28356-409&t=YR0epNNIklP0h3Fu-0)
 * ### [Guide]()
 */

const meta: Meta<typeof AutoSaveIndicator> = {
  title: 'Components/AutoSaveIndicator',
  component: AutoSaveIndicator,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AutoSaveIndicator>;

const Logo = () => {
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
};

const DashboardLayoutWrapper = styled.div`
  width: 100%;
  max-height: 600px;
`;

const GridWrapper = styled(Grid)`
  padding: ${({ theme }) => theme.spacing(0, 4)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(10)};
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Interaction: Story = {
  args: {},
  parameters: {
    docs: {
      disable: true,
    },
  },
};

type ExamplePageProps = {
  headerSlot: ReactNode;
  onSave: () => void;
};

// Вынесено для исключения дублирования разметки
const BasePage = ({ headerSlot, onSave }: ExamplePageProps) => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
  ];

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

  const handleClearStorage = () => {
    localStorage.clear();
  };

  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          productSwitcher={() => {
            return <ProductSwitcher getProducts={handleGetProducts} />;
          }}
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <Logo />;
            },
          }}
          profile={{
            displayName: 'Григорьев Виталий',
            annotation: 'vitatiy_grig@mail.ru',
            avatar: {
              alt: 'Григорьев Виталий',
              children: 'ГВ',
            },
            menuList: menuList,
            exitButton: {
              onClick: () => console.log('Выход'),
            },
          }}
        >
          {headerSlot}
        </DashboardLayout.Header>
        <DashboardLayout.Sidebar {...sidebar} />
        <DashboardLayout.Main>
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
                    text: 'Очистить localStorage',
                    onClick: handleClearStorage,
                  },
                ],
                secondary: [
                  {
                    text: 'Кнопка',
                  },
                ],
              },
              subheader: (
                <Stack flexDirection="row" flexWrap="wrap" gap={2}>
                  <TextField
                    placeholder="Поиск на странице..."
                    size="small"
                    InputProps={{
                      startAdornment: <SearchOutlineMd />,
                    }}
                  />
                  <Select
                    value=""
                    placeholder="Выберите вариант"
                    size="small"
                  />
                  <Select
                    value=""
                    placeholder="При выборе произойдет автосохранение"
                    size="small"
                    onChange={onSave}
                  >
                    {['Договор №12345678', 'Договор №1'].map((option) => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              ),
            }}
            content={{
              children: (
                <GridWrapper rowSpacing={3} container>
                  <TextField
                    onBlur={onSave}
                    placeholder="Введите имя"
                    label="Имя"
                  />
                  <TextField
                    onBlur={onSave}
                    placeholder="Введите фамилию"
                    label="Фамилия"
                  />
                  <DatePicker
                    inputProps={{
                      label: 'Дата рождения:',
                      placeholder: 'Выберите дату',
                    }}
                    onChange={onSave}
                  />
                  <TextArea
                    onBlur={onSave}
                    rows={4}
                    placeholder="Введите информацию о себе"
                  />
                </GridWrapper>
              ),
            }}
          />
        </DashboardLayout.Main>
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

/**
 * Пример базового использования
 */
export const Example = () => {
  const [isLoading, setLoading] = useState(false);

  const [isSuccess, setSuccess] = useState(false);

  const [isError, setError] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    const hasError = Math.random() < 0.5;

    setTimeout(() => {
      if (hasError) {
        setLoading(false);
        setError(true);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    }, 4000);
  };

  return (
    <BasePage
      headerSlot={
        <AutoSaveIndicator
          onRetry={() => {
            handleSave();
          }}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          errorMsg="Ошибка автосохранения"
        />
      }
      onSave={handleSave}
    />
  );
};

/**
 * Пример компонента с использованием MobX store {@link https://www.npmjs.com/package/@astral/features?activeTab=readme|AutoSaveIndicatorStore}
 * из библиотеки @astral/features
 */
const StoreIntegration = observer(() => {
  const autosaveIndicatorInstance = new AutoSaveIndicatorStore();
  const [autosaveIndicatorStore] = useState(autosaveIndicatorInstance);

  useInitAutoSaveIndicatorStore(autosaveIndicatorStore);

  const handleSave = () => {
    autosaveIndicatorStore.progress();

    const hasError = Math.random() < 0.5;

    setTimeout(() => {
      if (hasError) {
        autosaveIndicatorStore.setError({
          message: 'Ошибка автосохранения',
          onRetry: handleSave,
        });
      } else {
        autosaveIndicatorStore.success();
      }
    }, 4000);
  };

  return (
    <BasePage
      headerSlot={
        <AutoSaveIndicator
          onRetry={autosaveIndicatorStore.values.onRetry}
          errorMsg={autosaveIndicatorStore.values.errorMsg}
          isError={autosaveIndicatorStore.values.isError}
          isLoading={autosaveIndicatorStore.values.isLoading}
          isSuccess={autosaveIndicatorStore.values.isSuccess}
        />
      }
      onSave={handleSave}
    />
  );
});

export const ExampleWithMobxStore = () => {
  return <StoreIntegration />;
};

export const State = () => {
  return (
    <Wrapper>
      <AutoSaveIndicator onRetry={() => {}} errorMsg="Изменения не сохранены" />
      <AutoSaveIndicator onRetry={() => {}} isLoading />
      <AutoSaveIndicator
        onRetry={() => {}}
        errorMsg="Изменения не сохранены"
        isError
      />
      <AutoSaveIndicator onRetry={() => {}} isSuccess />
    </Wrapper>
  );
};
