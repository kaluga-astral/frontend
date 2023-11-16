import { AddOutlineMd, SearchOutlineMd } from '@astral/icons';
import { Stack } from '@mui/material';
import { Meta } from '@storybook/react';
import { Fragment } from 'react';

import { Select } from '../Select';
import { TextField } from '../TextField';
import { styled } from '../styles';

import { PageHeader } from './PageHeader';
import { PageHeaderDashboardStory } from './PageHeaderDashboardStory';

/**
 * **PageHeader** — вводная часть страницы, состоит из группы вводных или навигационных элементов.<br>
 * Данный компонент является составным. В него входят: **Header** и **Subheader**.
 *
 * **Header**<br>
 * Данный компонет включает в себя заголовок страницы, кнопки действий на странице, breadcrumbs (хлебные крошки или навигация), текст.
 *
 * **Subheader**<br>
 * “Второй” заголовок на странице.<br>
 * Включает в себя: поиск, фастфильтры (быстрые фильтры или элементы сотрировки данных) и кнопку дополнительных фильтров на странице.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=2932-43969&mode=design&t=UTzuwHtFDCCqlzje-0)
 * ### [Guide]()
 */
const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageLayout/PageHeader',
  component: PageHeader,
};

export default meta;

const Wrapper = styled.div`
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(5)};
`;

export const Example = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      actions={{
        main: [
          { text: 'действие 1', startIcon: <AddOutlineMd /> },
          { text: 'действие 2', color: 'error' },
        ],
        secondary: [
          { text: 'Второстепенное действие 1' },
          { text: 'Второстепенное действие 2' },
        ],
      }}
      backButton={{}}
    />
  </Wrapper>
);

export const Default = () => (
  <Wrapper>
    <PageHeader title="Черновик" />
  </Wrapper>
);

/** Кнопки действий. Доступно 2 варианта отображения: основной и второстепенный.
 *
 * В основном варианте действия отображаются в "полном формате кнопок"<br>
 * Во второстепенном варианте действия трансформируются в выпадающий список
 * */
export const Actions = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      actions={{
        main: [
          { text: 'действие 1', startIcon: <AddOutlineMd /> },
          {
            text: 'действие 2',
            nested: true,
            actions: [
              { text: 'действие в списке 1' },
              { text: 'действие в списке 2' },
            ],
          },
          { text: 'действие 3', color: 'error' },
        ],
        secondary: [
          { text: 'Второстепенное действие 1' },
          { text: 'Второстепенное действие 2' },
        ],
      }}
    />
  </Wrapper>
);

/** Доступ */
export const Breadcrumbs = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      breadcrumbs={[
        <Fragment key="1">Первый текст</Fragment>,
        <Fragment key="2">Текст с разделителем</Fragment>,
        <Fragment key="3">Текст с разделителем</Fragment>,
      ]}
    />
  </Wrapper>
);

/** Предназначена для обработки действия возврата на предыдущую страницу */
export const BackButton = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      backButton={{ onClick: () => console.log('go back') }}
    />
  </Wrapper>
);

/** Блок, распологающийся после заголовка. Может быть полезен, если необходимо добавить описание к текущей странице */
export const HeaderDescription = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      description="Вы находитесь на странице, которая..."
    />
  </Wrapper>
);

/** Subheader - это “второй” заголовок на странице.
 *
 * Включает в себя: поиск, фастфильтры (быстрые фильтры или элементы сотрировки данных) и кнопку дополнительных фильтров на странице.
 * Поиск занимает крайнее левое положение, а кнопка фильтра - крайнее правое положение на странице согласно внутренней сетке.
 * Фастфильтры или элементы сортировки при наличии поиска располагются справа от него, или при его отсутствии - занимают крайнее левое положение на странице. Их количество в строке может использоваться от 1 до 6.
 * */
export const Subheader = () => (
  <Wrapper>
    <PageHeader
      title="Черновик"
      description="Вы находитесь на странице, которая содержит Subheader"
      actions={{
        main: [
          { text: 'действие 1', startIcon: <AddOutlineMd /> },
          { text: 'действие 2', color: 'error' },
        ],
        secondary: [
          { text: 'Второстепенное действие 1' },
          { text: 'Второстепенное действие 2' },
        ],
      }}
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
  </Wrapper>
);

/** Пример использования  */
export const Usage = () => (
  <Wrapper>
    <PageHeaderDashboardStory />
  </Wrapper>
);
