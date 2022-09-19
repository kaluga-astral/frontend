import { MouseEvent, ReactElement, forwardRef } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@mui/material';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { Divider } from '../Divider';
import { ProductWidget, WidgetProduct } from '../ProductWidget';

import { DashboardLayout } from './DashboardLayout';
import { DashboardLayoutStory } from './DashboardLayoutStory';
import { DashboardLayoutStoryTemplate } from './DashboardLayoutStoryTemplate';

export default {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DashboardLayoutStory>;

export const EDO: ComponentStory<typeof DashboardLayoutStory> =
  DashboardLayoutStoryTemplate.bind({});

type RouterLinkProps = {
  className?: string;
  to: string;
  children: ReactElement;
};

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => {
    const { className, to, children } = props;

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
    };

    return (
      <a ref={ref} className={className} href={to} onClick={handleClick}>
        {children}
      </a>
    );
  },
);

const handleGetProducts = (): Promise<WidgetProduct[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            url: '',
            name: 'Астрал.Отчет',
            logoUrl:
              'https://identity.astral.ru/api/Files/06a5fb56-210c-4f08-bb7b-253a9103560f',
            color: '#2d77ff',
          },
          {
            url: '',
            name: 'Астрал.ЭДО',
            logoUrl:
              'https://identity.astral.ru/api/Files/b5b06b5a-2d0e-491b-9815-043d82f104aa',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.КЭДО',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.ОФД',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.ЭТ',
            logoUrl:
              'https://identity.astral.ru/api/Files/ac497150-1926-47be-9e5f-42e739e7279c',
            color: 'rgb(55 103 152)',
          },
          {
            url: '',
            name: 'Личный кабинет',
            logoUrl:
              'https://identity.astral.ru/api/Files/9d214f12-c518-44e2-a711-fa1bf2b89fdd',
            color: 'rgb(10, 124, 255)',
          },
          {
            url: '',
            name: 'Кабинет партнера',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
        ]),
      1500,
    ),
  );
};

EDO.args = {
  header: {
    productSwitcher() {
      return (
        <Box>
          <ProductWidget getProducts={handleGetProducts} />
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
    // menu: () => <MenuList />,
    profile: {
      displayName: 'Григорьев Виталий',
      annotation: 'vitatiy_grig@mail.ru',
      avatar: {
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      },
      menu(props) {
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
  },
  sidebar: {
    // organization: {},
    // CTAButton,
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
                  component: forwardRef((props, ref) => {
                    return (
                      <RouterLink
                        ref={ref}
                        to="/incoming-documents"
                        {...props}
                      />
                    );
                  }),
                },
              ],
              [
                'outgoing-documents',
                {
                  text: 'Исходящие документы',
                  active: false,
                  component: forwardRef((props, ref) => {
                    return (
                      <RouterLink
                        ref={ref}
                        to="/outgoing-documents"
                        {...props}
                      />
                    );
                  }),
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
                  component: forwardRef((props, ref) => {
                    return (
                      <RouterLink ref={ref} to="/invitations" {...props} />
                    );
                  }),
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
            component: forwardRef((props, ref) => {
              return <RouterLink ref={ref} to="/organizations" {...props} />;
            }),
          },
        ],
      ],
    },
  },
};
