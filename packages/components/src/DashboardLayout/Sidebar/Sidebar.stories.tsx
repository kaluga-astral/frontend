import {
  AddOutlineMd,
  CompanyOutlineMd,
  ProfileOutlineMd,
} from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { type MouseEvent, type ReactElement, forwardRef } from 'react';

import { styled } from '../../styles/styled';
import { DashboardLayout } from '../DashboardLayout';
import { OverflowTypography } from '../../OverflowTypography';

import { SidebarButton } from './SidebarButton';

/**
 * DashboardLayout.Sidebar - компонент боковой панели дашборда.
 * Sidebar автоматически сворачивается на небольших разрешениях.
 * Состояние сворачивания запоминается в localStorage
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=192-2981&mode=design&t=MnwPwkjHLstGGzYg-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DashboardLayout.Sidebar> = {
  title: 'Components/DashboardLayout/Sidebar',
  component: DashboardLayout.Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
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
          <DashboardLayout.Header
            product={{
              name: 'Астрал.ЭДО',
              logo() {
                return <Logo />;
              },
            }}
          />
          <DashboardLayout.Sidebar {...args} />
        </DashboardLayout>
      </DashboardLayoutWrapper>
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

export const Example = () => {
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
                            <RouterLink
                              ref={ref}
                              to="/invitations"
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
    </DashboardLayoutWrapper>
  );
};

/**
 - header - может содержать любой контент
 */
export const CustomHeader = () => {
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
        <DashboardLayout.Sidebar
          header={<AddOutlineMd />}
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
                            <RouterLink
                              ref={ref}
                              to="/invitations"
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
    </DashboardLayoutWrapper>
  );
};

/**
 - В header, можно использовать компонент SidebarButton
 */
export const SidebarButtonInHeader = () => {
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
                            <RouterLink
                              ref={ref}
                              to="/invitations"
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
    </DashboardLayoutWrapper>
  );
};

/**
 * text prop - ReactNode, поэтому в него можно передать любой кастомный компонент, например OverflowTypography
 */
export const CustomItemText = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Астрал',
            logo() {
              return <Logo />;
            },
          }}
        />
        <DashboardLayout.Sidebar
          menu={{
            items: [
              [
                'documents',
                {
                  icon: <ProfileOutlineMd />,
                  text: (
                    <OverflowTypography
                      tooltipProps={{ placement: 'right' }}
                      style={{ width: 170 }}
                    >
                      Документы Иванова Ивана Васильевича
                    </OverflowTypography>
                  ),
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
            ],
          }}
        />
      </DashboardLayout>
    </DashboardLayoutWrapper>
  );
};
