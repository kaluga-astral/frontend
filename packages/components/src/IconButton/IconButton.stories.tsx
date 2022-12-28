import { Story } from '@storybook/react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import {
  DownloadOutlineMd,
  EyeFillMd,
  EyeOutlineMd,
  FilterOutlineMd,
  PrintOutlineMd,
  SendOutlineMd,
} from '@astral/icons';

import { Grid } from '../Grid';
import { Typography } from '../Typography/Typography';
import { Case } from '../docs';
import { DataGrid, DataGridColumns } from '../DataGrid';
import { ActionCell, Actions } from '../ActionCell';

import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

type Example = { id: string; name: string; code: string; ref: string };

const ACTIONS: Actions<Example> = {
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
};

const COLUMNS: DataGridColumns<Example>[] = [
  { field: 'name', label: 'Наименование' },
  { field: 'code', label: 'Код партнера' },
  { field: 'ref', label: 'Реф. ссылка' },
  {
    renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
    width: '1%',
  },
];

const DATA: Example[] = [
  {
    id: '1',
    name: 'Офис на ул. Куйбышева 128, к. №1',
    code: '456-875',
    ref: 'http://referal.lk',
  },
  {
    id: '2',
    name: 'Офис на Огарева',
    code: '456-875',
    ref: 'http://referal.lk.',
  },
  {
    id: '3',
    name: 'Офис на Маяковской, оф 245',
    code: '456-875',
    ref: 'http://referal.lk',
  },
];

export const IconButtonShowcase: Story = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div style={{ width: matches ? '100%' : '70%' }}>
      <Typography paragraph variant="h3">
        IconButton
      </Typography>
      <Typography paragraph>
        Кнопки позволяют пользователям выполнять действия и делать выбор одним
        нажатием.
      </Typography>
      <br />
      <Typography variant="h4" paragraph>
        Типы кнопок
      </Typography>

      <Case
        title="Contained"
        descriptionList={[
          'Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.',
          'На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов.',
        ]}
      >
        <Grid container justifyContent="center" autoFlow="column" spacing={4}>
          <IconButton variant="contained">
            <PrintOutlineMd />
          </IconButton>
          <IconButton selected variant="contained">
            <PrintOutlineMd />
          </IconButton>
          <IconButton disabled variant="contained">
            <PrintOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Case
        title="Light"
        descriptionList={[
          'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
        ]}
      >
        <Grid container justifyContent="center" autoFlow="column" spacing={4}>
          <IconButton variant="light">
            <EyeOutlineMd />
          </IconButton>
          <IconButton selected variant="light">
            <EyeOutlineMd />
          </IconButton>
          <IconButton disabled variant="light">
            <EyeOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Case
        title="Link"
        descriptionList={[
          'Кнопка для перехода по ссылке на новую страницу. В некоторых слкчаях открывает окно браузера.',
        ]}
      >
        <Grid container justifyContent="center" autoFlow="column" spacing={4}>
          <IconButton variant="link">
            <FilterOutlineMd />
          </IconButton>
          <IconButton selected variant="link">
            <FilterOutlineMd />
          </IconButton>
          <IconButton disabled variant="link">
            <FilterOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Case
        title="Text"
        descriptionList={['Кнопка требующая наименьшего внимания.']}
      >
        <Grid container justifyContent="center" autoFlow="column" spacing={4}>
          <IconButton variant="text">
            <FilterOutlineMd />
          </IconButton>
          <IconButton selected variant="text">
            <FilterOutlineMd />
          </IconButton>
          <IconButton disabled variant="text">
            <FilterOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Case
        title="Размер кнопки"
        descriptionList={[
          'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow="column"
          alignItems="center"
          spacing={4}
        >
          <IconButton size="medium" variant="light">
            <DownloadOutlineMd />
          </IconButton>
          <IconButton size="large" variant="light">
            <DownloadOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Case
        title="Эмоциональный оттенок"
        descriptionList={[
          'К любой кнопке может быть добавлен эмоциональный оттенок.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          templateColumns="repeat(3, 40px)"
          spacing={4}
        >
          <IconButton variant="contained" color="error">
            <DownloadOutlineMd />
          </IconButton>
          <IconButton variant="contained" color="success">
            <DownloadOutlineMd />
          </IconButton>
          <IconButton variant="contained" color="warning">
            <DownloadOutlineMd />
          </IconButton>

          <IconButton variant="light" color="error">
            <DownloadOutlineMd />
          </IconButton>
          <IconButton variant="light" color="success">
            <DownloadOutlineMd />
          </IconButton>
          <IconButton variant="light" color="warning">
            <DownloadOutlineMd />
          </IconButton>
        </Grid>
      </Case>

      <br />
      <br />

      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>
      <Paper style={{ padding: 15 }}>
        <DataGrid rows={DATA} columns={COLUMNS} keyId={'id'} />
      </Paper>
    </div>
  );
};

IconButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => (
  <IconButton {...args}>
    <PrintOutlineMd />
  </IconButton>
);

export const IconButtonStory = Template.bind({});

IconButtonStory.storyName = 'Icon Button';

IconButtonStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

IconButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
