import {
  AddOutlineMd,
  CompanyOutlineMd,
  ProfileOutlineMd,
} from '@astral/icons';
import { Meta, StoryObj } from '@storybook/react';
import { MouseEvent, ReactElement, forwardRef } from 'react';

import { DashboardLayout } from '../DashboardLayout';

import { SidebarButton } from './SidebarButton';

/**
 * DashboardLayout.Sidebar - компонент боковой панели дашборда.
 *
 * ### [Guide]()
 */
const meta: Meta<typeof DashboardLayout.Sidebar> = {
  title: 'Components/DashboardLayout/Sidebar',
  component: DashboardLayout.Sidebar,
};

export default meta;

type Story = StoryObj<typeof DashboardLayout.Sidebar>;

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

export const Interaction: Story = {
  render: (args) => {
    return (
      <DashboardLayout>
        <DashboardLayout.Sidebar {...args} />
      </DashboardLayout>
    );
  },
  args: {
    header: (
      <SidebarButton startIcon={<AddOutlineMd />}>
        Добавить документ
      </SidebarButton>
    ),
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
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 - menu - описание меню, содержит в себе items - пункты меню
 */
export const Menu = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.Sidebar
        menu={{
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
                  return (
                    <RouterLink ref={ref} to="/organizations" {...props} />
                  );
                }),
              },
            ],
          ],
        }}
      />
    </DashboardLayout>
  );
};

/**
 - header - контент заголовка sidebar
 */
export const Header = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.Sidebar
        header={
          <SidebarButton startIcon={<AddOutlineMd />}>
            Добавить документ
          </SidebarButton>
        }
        menu={{
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
                  return (
                    <RouterLink ref={ref} to="/organizations" {...props} />
                  );
                }),
              },
            ],
          ],
        }}
      />
    </DashboardLayout>
  );
};
