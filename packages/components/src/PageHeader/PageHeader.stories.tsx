import { AddOutlineMd, SearchOutlineMd } from '@astral/icons';
import { Stack } from '@mui/material';
import { Story } from '@storybook/react';
import { Fragment } from 'react';

import { ExampleTemplate } from '../docs';
import { Select } from '../Select';
import { TextField } from '../TextField';
import { Typography } from '../Typography';

import { PageHeader, PageHeaderProps } from './PageHeader';
import { PageHeaderDashboardStory } from './PageHeaderDashboardStory';

export default {
  title: 'Components/PageLayout/PageHeader',
  component: PageHeader,
};

export const Showcase: Story = () => {
  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        Page Header
      </Typography>
      <Typography paragraph>
        Page Header — вводная часть страницы, состоит из группы вводных или
        навигационных элементов.
      </Typography>
      <Typography paragraph>
        Данный компонент является составным. В него входят: Header и Subheader.
      </Typography>
      <Typography variant="h4" paragraph>
        Header
      </Typography>
      <Typography>
        Данный компонет включает в себя заголовок страницы. Второстепенными
        элементами могут быть: кнопки действий на странице, breadcrumbs (хлебные
        крошки, или навигация), текст.
      </Typography>
      <ExampleTemplate.Case
        title="Simple header"
        descriptionList={[
          'Включает в себя только заголовок страницы.',
          'Компонент используется в случаях, когда на странице у пользователя нет дополнителных действий, которые относятся ко всему разделу.',
        ]}
      >
        <PageHeader title="Черновики" />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Header with button"
        descriptionList={[
          'Включает в себя заголовок страницы и кнопки.',
          'Кнопки действий, которые относятся ко всему разделу, располагаются в правой части страницы согласно внутренней сетке на уровне Заголовка.',
          'На странице рядом можно разместить до 3х кнопок: крайняя справа - кнопка основного действия, последующие - второстепенные кнопки. Если на странице у пользователя есть необходимость разместить более 3х кнопок, то второстепенные кнопки могут быть объединены в выпадающий список (кнопка с тремя точками).',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          actions={{
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
          }}
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Header with breadcrumbs"
        descriptionList={[
          'Включает в себя “хлебные крошки” и заголовок страницы.  Может применяться с кнопками действий на странице и без них.',
          '“Хлебные крошки” располагаются над заголовком страницы.',
          'Компонент используется в случаях, когда есть необходимость отображения пути до текущей страницы.',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          actions={{
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
          }}
          breadcrumbs={[
            <Fragment key="1">Первый текст</Fragment>,
            <Fragment key="2">Текст с разделителем</Fragment>,
            <Fragment key="3">Текст с разделителем</Fragment>,
          ]}
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Header with text"
        descriptionList={[
          'Включает в себя заголовок страницы и текст. Может применяться с кнопками действий на странице и без них.',
          'Располагается под заголовком страницы.',
          'Компонент используется в случаях, когда есть необходимость отображения поясняющего текста к данным на странице.',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          actions={{
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
          }}
          description="В таблице представлены данные, которые..."
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Header with breadcrumbs + text"
        descriptionList={[
          'Включает в себя заголовок страницы, навигационную панель и текст. Может применяться с кнопками действий на странице и без них.',
          'Компонент используется в случаях, когда есть необходимость отображения поясняющего текста к данным и пути до текущей страницы.',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          actions={{
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
          }}
          description="В таблице представлены данные, которые..."
          breadcrumbs={[
            <Fragment key="1">Первый текст</Fragment>,
            <Fragment key="2">Текст с разделителем</Fragment>,
            <Fragment key="3">Текст с разделителем</Fragment>,
          ]}
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Header with back"
        descriptionList={[
          'Включает в себя заголовок страницы и кнопку “Назад”. Может применяться как с другми элементами хдера: кнопками действий и текстом, так и без них.',
          'Располагается слева от заголовка страницы.',
          'Компонент используется в случаях, когда произошел переход внутри одной страницы на другую.',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          actions={{
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
          }}
          description="Text"
          backButton={{}}
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case
        title="Subheader"
        descriptionList={[
          'Subheader - это “второй” заголовок на странице.',
          'Включает в себя: поиск, фастфильтры (быстрые фильтры или элементы сотрировки данных) и кнопку дополнительных фильтров на странице.',
          'Поиск занимает крайнее левое положение, а кнопка фильтра - крайнее правое положение на странице согласно внутренней сетке.',
          'Фастфильтры или элементы сортировки при наличии поиска располагются справа от него, или при его отсутствии - занимают крайнее левое положение на странице. Их количество в строке может использоваться от 1 до 6.',
          'Отображение компонента:',
        ]}
      >
        <PageHeader
          title="Черновики"
          subheader={
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
              <Select value="" placeholder="Выберите вариант" size="small" />
              <Select value="" placeholder="Выберите вариант" size="small" />
            </Stack>
          }
        />
      </ExampleTemplate.Case>
      <ExampleTemplate.Case title="Пример использования" fullWidth>
        <PageHeaderDashboardStory />
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

Showcase.parameters = { options: { showPanel: false } };

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const PageHeaderStory = Template.bind({});

PageHeaderStory.storyName = 'Default';

PageHeaderStory.args = {
  title: 'Заголовок',
  description: 'Описание',
  breadcrumbs: [
    <Fragment key="1">Первый текст</Fragment>,
    <Fragment key="2">Текст с разделителем</Fragment>,
    <Fragment key="3">Текст с разделителем</Fragment>,
  ],
  actions: {
    main: [
      {
        text: 'Основное действие',
      },
    ],
    secondary: [
      {
        text: 'Кнопка',
      },
    ],
  },
  subheader: (
    <TextField
      placeholder="Поиск на странице..."
      size="small"
      InputProps={{
        startAdornment: <SearchOutlineMd />,
      }}
    />
  ),
};

PageHeaderStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
