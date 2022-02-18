import { HomeOutlineMd } from '@astral/icons';
import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

const links: any = [
  {
    title: 'Главная',
    icon: <HomeOutlineMd />,
    link: '/',
    children: null,
  },
  {
    title: 'Отчеты',
    icon: <HomeOutlineMd />,
    link: '/reports',
    children: [
      { title: 'Черновики', link: '/drafts' },
      { title: 'Отправленные', link: '/sent' },
    ],
  },
  {
    title: 'Требования',
    icon: <HomeOutlineMd />,
    link: '/requirements',
    children: null,
  },
  {
    title: 'Отчеты',
    icon: <HomeOutlineMd />,
    link: '/reports',
    children: [
      { title: 'Черновики', link: '/drafts' },
      { title: 'Отправленные', link: '/sent' },
    ],
  },
  {
    title: 'Отчеты',
    icon: <HomeOutlineMd />,
    link: '/reports',
    children: [
      { title: 'Черновики', link: '/drafts' },
      { title: 'Отправленные', link: '/sent' },
    ],
  },
  {
    title: 'Отчеты',
    icon: <HomeOutlineMd />,
    link: '/reports',
    children: [
      { title: 'Черновики', link: '/drafts' },
      { title: 'Отправленные', link: '/sent' },
    ],
  },
  {
    title: 'Отчеты',
    icon: <HomeOutlineMd />,
    link: '/reports',
    children: [
      { title: 'Черновики', link: '/drafts' },
      { title: 'Отправленные', link: '/sent' },
    ],
  },
];

const Template: Story = (args) => <NavBar {...args} />;

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <NavBar links={links} />
  </Stack>
);

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {
  links,
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
