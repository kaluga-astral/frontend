import { Story } from '@storybook/react';
import { Badge } from '@mui/material';
import {
  ChevronDOutlineMd,
  DialogOutlineMd,
  LikeOutlineMd,
} from '@astral/icons';

import { Typography } from '../Typography';
import { Grid } from '../Grid';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const ButtonShowcase: Story = () => (
  <Grid>
    <Typography paragraph variant="h3">
      Buttons
    </Typography>
    <Typography paragraph>
      Кнопки позволяют пользователям выполнять действия и делать выбор одним
      нажатием.
    </Typography>
    <Typography>
      Кнопки обозначают действия, которые могут выполнять пользователи. Они
      используются в таких местах пользовательского интерфейса, как:
    </Typography>
    <ul>
      <li>Диалоги</li>
      <li>Всплывающие окно</li>
      <li>Формы</li>
      <li>Карточки</li>
      <li>Панели инструментов</li>
    </ul>
    <br />
    <Typography variant="h4" paragraph>
      Типы кнопок
    </Typography>
    <Typography variant="h5" paragraph>
      Contained
    </Typography>
    <Typography paragraph>
      Используется, когда необходимо обозначить ключевое или стартовое действие
      на странице. Например, начать заполнение формы или завершить работу с ней.
    </Typography>
    <Typography paragraph>
      На одной странице не может находиться свыше одной акцентной кнопки.
      Исключение — акцентные кнопки с одинаковым действием в ряду однородных,
      равнозначных элементов. Например, кнопки «Подключить» на карточках
      тарифов.
    </Typography>
    <Typography paragraph>
      Также кнопки используются в диалоговых окнах и в попапах, когда
      пользователю необходимо выбрать одно действие из нескольких
      альтернативных. Например, кнопка «Сохранить» или «Продолжить».
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(8, 1fr)" spacing={4}>
        <Grid column="3">
          <Button fullWidth>Default</Button>
        </Grid>
        <Grid column="4">
          <Button loading fullWidth>
            Loading
          </Button>
        </Grid>
        <Grid column="5">
          <Button selected fullWidth>
            Selected
          </Button>
        </Grid>
        <Grid column="6">
          <Button disabled fullWidth>
            Disabled
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Light
    </Typography>
    <Typography paragraph>
      Кнопка может помещаться на одной строке с другими компонентами и не
      предполагает привлечения обязательного внимания всех пользователей. При
      взаимодействии со страницей часть пользователей не воспользуется кнопкой,
      но она может быть нужна определенной группе пользователей.
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(8, 1fr)" spacing={4}>
        <Grid column="3">
          <Button variant="light" fullWidth>
            Default
          </Button>
        </Grid>
        <Grid column="4">
          <Button variant="light" loading fullWidth>
            Loading
          </Button>
        </Grid>
        <Grid column="5">
          <Button variant="light" selected fullWidth>
            Selected
          </Button>
        </Grid>
        <Grid column="6">
          <Button variant="light" disabled fullWidth>
            Disabled
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Link
    </Typography>
    <Typography paragraph>
      Кнопка для перехода по ссылке на новую страницу. В некоторых слкчаях
      открывает окно браузера.
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(8, 1fr)" spacing={4}>
        <Grid column="3">
          <Button variant="link" fullWidth>
            Default
          </Button>
        </Grid>
        <Grid column="4">
          <Button variant="link" loading fullWidth>
            Loading
          </Button>
        </Grid>
        <Grid column="5">
          <Button variant="link" selected fullWidth>
            Selected
          </Button>
        </Grid>
        <Grid column="6">
          <Button variant="link" disabled fullWidth>
            Disabled
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Text
    </Typography>
    <Typography paragraph>Кнопка требующая наименьшего внимания.</Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(8, 1fr)" spacing={4}>
        <Grid column="3">
          <Button variant="text" fullWidth>
            Default
          </Button>
        </Grid>
        <Grid column="4">
          <Button variant="text" loading fullWidth>
            Loading
          </Button>
        </Grid>
        <Grid column="5">
          <Button variant="text" selected fullWidth>
            Selected
          </Button>
        </Grid>
        <Grid column="6">
          <Button variant="text" disabled fullWidth>
            Disabled
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Кнопки с иконками
    </Typography>
    <Typography paragraph>
      Иногда для отображения действия на кнопку нужно добавить иконку. Также
      можно добавить бейдж.
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(8, 1fr)" spacing={4}>
        <Grid column="3">
          <Button startIcon={<LikeOutlineMd />} variant="light" fullWidth>
            Before
          </Button>
        </Grid>
        <Grid column="4">
          <Button endIcon={<DialogOutlineMd />} variant="light" fullWidth>
            After
          </Button>
        </Grid>
        <Grid column="5">
          <Button
            startIcon={<DialogOutlineMd />}
            endIcon={<ChevronDOutlineMd />}
            variant="light"
            fullWidth
          >
            Before & After
          </Button>
        </Grid>
        <Grid column="6">
          <Button
            variant="light"
            fullWidth
            endIcon={
              <Badge
                badgeContent={12}
                color="error"
                children={'\u00A0'}
                style={{ marginTop: 23, marginLeft: 8 }}
              />
            }
          >
            Badge
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Размер кнопки
    </Typography>
    <Typography paragraph>
      Существует 2 стандартных размера кноки: большой и стандартный. Большая
      используется для промостраниц и сайтов, стандартная в интерфейсах.
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid
        container
        templateColumns="repeat(10, 1fr)"
        spacing={4}
        alignItems="center"
      >
        <Grid column="5">
          <Button size="medium" variant="light" fullWidth>
            Medium
          </Button>
        </Grid>
        <Grid column="6">
          <Button size="large" variant="light" fullWidth>
            Large
          </Button>
        </Grid>
      </Grid>
    </div>
    <br />
    <Typography variant="h5" paragraph>
      Эмоциональный оттенок
    </Typography>
    <Typography paragraph>
      К любой кнопке может быть добавлен эмоциональный оттенок.
    </Typography>
    <div style={{ padding: '32px 0', background: '#FAFBFC' }}>
      <Grid container templateColumns="repeat(11, 1fr)" spacing={4}>
        <Grid column="5">
          <Button color="error" variant="contained" fullWidth>
            Error
          </Button>
        </Grid>
        <Grid column="6">
          <Button color="success" variant="contained" fullWidth>
            Success
          </Button>
        </Grid>
        <Grid column="7">
          <Button color="warning" variant="contained" fullWidth>
            Warning
          </Button>
        </Grid>
        <Grid column="5">
          <Button color="error" variant="light" fullWidth>
            Error
          </Button>
        </Grid>
        <Grid column="6">
          <Button color="success" variant="light" fullWidth>
            Success
          </Button>
        </Grid>
        <Grid column="7">
          <Button color="warning" variant="light" fullWidth>
            Warning
          </Button>
        </Grid>
      </Grid>
    </div>
  </Grid>
);

ButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <Button {...args}>Label</Button>;

export const ButtonStory = Template.bind({});

ButtonStory.storyName = 'Button';

ButtonStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

ButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
