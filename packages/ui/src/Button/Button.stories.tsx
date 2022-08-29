import { Story } from '@storybook/react';
import { Badge } from '@mui/material';
import {
  ChevronDOutlineMd,
  DialogOutlineMd,
  LikeOutlineMd,
} from '@astral/icons';

import { Typography } from '../Typography';
import { Grid } from '../Grid';
import { StorybookExampleTemplate } from '../docs';

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

    <StorybookExampleTemplate
      title="Contained"
      description={[
        'Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.',
        'На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов. Например, кнопки «Подключить» на карточках тарифов.',
        'Также кнопки используются в диалоговых окнах и в попапах, когда пользователю необходимо выбрать одно действие из нескольких альтернативных. Например, кнопка «Сохранить» или «Продолжить».',
      ]}
    >
      <Grid container justifyContent="center" autoFlow="column" spacing={4}>
        <Button fullWidth>Default</Button>
        <Button loading fullWidth>
          Loading
        </Button>
        <Button selected fullWidth>
          Selected
        </Button>
        <Button disabled fullWidth>
          Disabled
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Light"
      description={[
        'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
      ]}
    >
      <Grid container justifyContent="center" autoFlow="column" spacing={4}>
        <Button variant="light" fullWidth>
          Default
        </Button>
        <Button variant="light" loading fullWidth>
          Loading
        </Button>
        <Button variant="light" selected fullWidth>
          Selected
        </Button>
        <Button variant="light" disabled fullWidth>
          Disabled
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Link"
      description={[
        'Кнопка для перехода по ссылке на новую страницу. В некоторых слкчаях открывает окно браузера.',
      ]}
    >
      <Grid container justifyContent="center" autoFlow="column" spacing={4}>
        <Button variant="link" fullWidth>
          Default
        </Button>
        <Button variant="link" loading fullWidth>
          Loading
        </Button>
        <Button variant="link" selected fullWidth>
          Selected
        </Button>
        <Button variant="link" disabled fullWidth>
          Disabled
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Text"
      description={['Кнопка требующая наименьшего внимания.']}
    >
      <Grid container justifyContent="center" autoFlow="column" spacing={4}>
        <Button variant="text" fullWidth>
          Default
        </Button>
        <Button variant="text" loading fullWidth>
          Loading
        </Button>
        <Button variant="text" selected fullWidth>
          Selected
        </Button>
        <Button variant="text" disabled fullWidth>
          Disabled
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Кнопки с иконками"
      description={[
        'Иногда для отображения действия на кнопку нужно добавить иконку. Также можно добавить бейдж.',
      ]}
    >
      <Grid
        container
        justifyContent="center"
        templateColumns="repeat(auto-fit, 200px)"
        spacing={4}
      >
        <Button startIcon={<LikeOutlineMd />} variant="light" fullWidth>
          Before
        </Button>
        <Button endIcon={<DialogOutlineMd />} variant="light" fullWidth>
          After
        </Button>
        <Button
          startIcon={<DialogOutlineMd />}
          endIcon={<ChevronDOutlineMd />}
          variant="light"
          fullWidth
        >
          Before & After
        </Button>
        <Button
          variant="light"
          fullWidth
          endIcon={
            <Badge
              badgeContent={12}
              color="error"
              children={<span style={{ width: 10 }} />}
              style={{ marginLeft: 2, marginRight: 15 }}
            />
          }
        >
          Badge
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Размер кнопки"
      description={[
        'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
      ]}
    >
      <Grid
        container
        justifyContent="center"
        autoFlow="column"
        spacing={4}
        alignItems="center"
      >
        <Button size="medium" variant="light" fullWidth>
          Medium
        </Button>
        <Button size="large" variant="light" fullWidth>
          Large
        </Button>
      </Grid>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Эмоциональный оттенок"
      description={[
        'К любой кнопке может быть добавлен эмоциональный оттенок.',
      ]}
    >
      <Grid
        container
        justifyContent="center"
        templateColumns="repeat(3, 100px)"
        spacing={4}
      >
        <Button color="error" variant="contained" fullWidth>
          Error
        </Button>
        <Button color="success" variant="contained" fullWidth>
          Success
        </Button>
        <Button color="warning" variant="contained" fullWidth>
          Warning
        </Button>
        <Button color="error" variant="light" fullWidth>
          Error
        </Button>
        <Button color="success" variant="light" fullWidth>
          Success
        </Button>
        <Button color="warning" variant="light" fullWidth>
          Warning
        </Button>
      </Grid>
    </StorybookExampleTemplate>
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
