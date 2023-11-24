import { type Story } from '@storybook/react';
import { Link } from '@mui/material';
import { AddOutlineMd } from '@astral/icons';
import { Stack } from '@mui/material';

import { Typography } from '../Typography';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { PageHeader } from '../PageHeader';

import { Breadcrumbs } from './';

const handleClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  console.log('тык');
  event.preventDefault();
};

const createBreadcrumbsCase = (args: string[]) => {
  const lastChild: string = args.pop() || '';
  const result = [];

  args.forEach((element) => {
    result.push(
      <Link
        underline="hover"
        color="#557192"
        key="3"
        href="/"
        onClick={handleClick}
      >
        {element}
      </Link>,
    );
  });

  result.push(
    <Typography key="4" color="primary">
      {lastChild}
    </Typography>,
  );

  return result;
};

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export const BreadcrumbsShowcase: Story = () => {
  return (
    <ExampleTemplate>
      <Typography variant="h3" paragraph>
        Breadcrumbs
      </Typography>
      <br />
      <br />

      <Typography variant="ui" paragraph>
        Breadcrumbs, или хлебные крошки — представляет собой навигационную
        цепочку на сайте, которая отражает путь до текущей страницы.
      </Typography>
      <Typography variant="ui" paragraph>
        Компонент располагается над заголовком
      </Typography>
      <Typography variant="ui" paragraph>
        Может использоваться в сервисах со сложной структурой, для
        информирования пользователя о его текущем местонахождении на сайте.
      </Typography>
      <br />
      <br />

      <Typography variant="h5" paragraph>
        Отображение компонента
      </Typography>

      <ExampleTemplate.Case
        title="Standart"
        descriptionList={[
          'Стандартный вид компонента представляет собой перечисление элементов навигационной цепочки через “/”.   ',
        ]}
      >
        <Stack alignItems="center">
          <Breadcrumbs aria-label="breadcrumb">
            {createBreadcrumbsCase(['Раздел 1', 'Раздел 2', 'Раздел 3'])}
          </Breadcrumbs>
        </Stack>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Shortcut"
        descriptionList={[
          'Сокращенный вид компонента представляет собой скрытие 2х и более элементов навигации под “...”, которые занимают в цепочке не первое и не последнее место. При клике на данный элемент должен появляться компонент “Menu” со списком скрытых страниц на которые пользователь может переместиться по клику.Такой компонет может быть использован при нехватке пространства для отображения всех элементов навигации, при масштабировании страницы и в других случаях предусмотренных дизайнером.',
        ]}
      >
        <Stack alignItems="center">
          <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            {createBreadcrumbsCase([
              'Раздел 1',
              'Раздел 2',
              'Раздел 3',
              'Раздел 4',
            ])}
          </Breadcrumbs>
        </Stack>
      </ExampleTemplate.Case>
      <br />

      <ExampleTemplate.Case title="Пример использования">
        <PageHeader
          title="Новый отчет"
          actions={{
            main: [
              {
                text: 'Основное действие',
                startIcon: <AddOutlineMd />,
              },
            ],
            secondary: [
              {
                text: 'Второстепенное действие',
              },
            ],
          }}
          breadcrumbs={createBreadcrumbsCase([
            'Раздел 1',
            'Раздел 2',
            'Создание отчета',
          ])}
        />
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

const Template: Story = (args) => <Breadcrumbs {...args} />;

BreadcrumbsShowcase.parameters = { options: { showPanel: false } };

export const BreadcrumbsStory = Template.bind({});

BreadcrumbsStory.storyName = 'Breadcrumbs';

BreadcrumbsStory.args = {
  maxItems: 3,
  children: createBreadcrumbsCase([
    'Раздел 1',
    'Раздел 2',
    'Раздел 3',
    'Раздел 4',
  ]),
};

BreadcrumbsStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
