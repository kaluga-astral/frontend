import { ProfileOutlineMd, QuitOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { ProductSwitcher } from '../../ProductSwitcher';
import { handleGetProducts } from '../../ProductSwitcher/ProductSwitcher.stub';
import { styled } from '../../styles';
import { DashboardLayout } from '../DashboardLayout';
import { Grid } from '../../Grid';
import { Menu } from '../../Menu';
import { MenuItem } from '../../MenuItem';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';
import { Divider } from '../../Divider';

/**
 * DashboardLayout.Header
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=95-156&mode=design&t=MnwPwkjHLstGGzYg-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DashboardLayout.Header> = {
  title: 'Components/DashboardLayout/Header',
  component: DashboardLayout.Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const FAKE_MENU_LIST = [
  {
    icon: <ProfileOutlineMd />,
    title: 'Мой профиль',
    onClick: () => console.log('Мой профиль'),
  },
];

type Story = StoryObj<typeof DashboardLayout.Header>;

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

export const Interaction: Story = {
  render: (args) => {
    return (
      <DashboardLayoutWrapper>
        <DashboardLayout>
          <DashboardLayout.Header {...args} />
          <DashboardLayout.Sidebar menu={{ items: [] }} />
        </DashboardLayout>
      </DashboardLayoutWrapper>
    );
  },
  args: {
    productSwitcher: () => {
      return (
        <Grid>
          <ProductSwitcher getProducts={handleGetProducts} />
        </Grid>
      );
    },
    product: {
      name: 'Астрал.ЭДО',
      logo() {
        return <Logo />;
      },
    },
    profile: {
      displayName: 'Григорьев Виталий',
      annotation: 'vitatiy_grig@mail.ru',
      avatar: {
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      },
      menuList: FAKE_MENU_LIST,
      exitButton: { onClick: () => console.log('Выход') },
    },
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          productSwitcher={() => {
            return (
              <Grid>
                <ProductSwitcher getProducts={handleGetProducts} />
              </Grid>
            );
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
            menuList: FAKE_MENU_LIST,
            exitButton: { onClick: () => console.log('Выход') },
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

export const ExitButton = () => {
  const onExitClick = () => console.log('Выход');

  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          productSwitcher={() => {
            return (
              <Grid>
                <ProductSwitcher getProducts={handleGetProducts} />
              </Grid>
            );
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
            exitButton: { onClick: onExitClick },
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

export const Product = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <Logo />;
            },
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

export const ProductSwitcherProps = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          productSwitcher={() => {
            return (
              <Grid>
                <ProductSwitcher getProducts={handleGetProducts} />
              </Grid>
            );
          }}
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <Logo />;
            },
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

export const Profile = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
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
            menuList: FAKE_MENU_LIST,
            exitButton: { onClick: () => console.log('Выход') },
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};

export const ProfileCustomMenu = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
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
            menu: (props) => (
              <Menu {...props}>
                <MenuItem>
                  <ListItemIcon>
                    <ProfileOutlineMd />
                  </ListItemIcon>
                  <ListItemText>Мой профиль</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <QuitOutlineMd />
                  </ListItemIcon>
                  <ListItemText>Выйти</ListItemText>
                </MenuItem>
              </Menu>
            ),
          }}
        />
        <DashboardLayout.Sidebar menu={{ items: [] }} />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};
