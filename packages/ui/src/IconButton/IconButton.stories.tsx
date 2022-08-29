import { Story } from '@storybook/react';
import {
  DownloadOutlineMd,
  EyeOutlineMd,
  FilterOutlineMd,
  PrintOutlineMd,
} from '@astral/icons';

import { Grid } from '../Grid';
import { Typography } from '../Typography/Typography';
import { StorybookExampleTemplate } from '../docs/StorybookExampleTemplate';

import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export const IconButtonShowcase: Story = () => (
  <Grid>
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

    <StorybookExampleTemplate
      title="Contained"
      subtitle={[
        'Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.',
        'На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов.',
      ]}
      gridProps={{ justifyContent: 'center', autoFlow: 'column' }}
    >
      <IconButton variant="contained">
        <PrintOutlineMd />
      </IconButton>
      <IconButton selected variant="contained">
        <PrintOutlineMd />
      </IconButton>
      <IconButton disabled variant="contained">
        <PrintOutlineMd />
      </IconButton>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Light"
      subtitle={[
        'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
      ]}
      gridProps={{ justifyContent: 'center', autoFlow: 'column' }}
    >
      <IconButton variant="light">
        <EyeOutlineMd />
      </IconButton>
      <IconButton selected variant="light">
        <EyeOutlineMd />
      </IconButton>
      <IconButton disabled variant="light">
        <EyeOutlineMd />
      </IconButton>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Link"
      subtitle={[
        'Кнопка для перехода по ссылке на новую страницу. В некоторых слкчаях открывает окно браузера.',
      ]}
      gridProps={{ justifyContent: 'center', autoFlow: 'column' }}
    >
      <IconButton variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton selected variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton disabled variant="link">
        <FilterOutlineMd />
      </IconButton>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Text"
      subtitle={['Кнопка требующая наименьшего внимания.']}
      gridProps={{ justifyContent: 'center', autoFlow: 'column' }}
    >
      <IconButton variant="text">
        <FilterOutlineMd />
      </IconButton>
      <IconButton selected variant="text">
        <FilterOutlineMd />
      </IconButton>
      <IconButton disabled variant="text">
        <FilterOutlineMd />
      </IconButton>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Размер кнопки"
      subtitle={[
        'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
      ]}
      gridProps={{
        justifyContent: 'center',
        autoFlow: 'column',
        alignItems: 'center',
      }}
    >
      <IconButton size="medium" variant="light">
        <DownloadOutlineMd />
      </IconButton>
      <IconButton size="large" variant="light">
        <DownloadOutlineMd />
      </IconButton>
    </StorybookExampleTemplate>

    <br />

    <StorybookExampleTemplate
      title="Эмоциональный оттенок"
      subtitle={['К любой кнопке может быть добавлен эмоциональный оттенок.']}
      gridProps={{
        justifyContent: 'center',
        templateColumns: 'repeat(3, 40px)',
      }}
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
    </StorybookExampleTemplate>
  </Grid>
);

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
