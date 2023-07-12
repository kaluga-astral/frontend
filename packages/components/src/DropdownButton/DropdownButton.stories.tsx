import { Story } from '@storybook/react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { DialogOutlineMd, MailFillSm, SearchOutlineMd } from '@astral/icons';
import { Fragment, useEffect, useState } from 'react';

import { Select } from '../Select';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { Grid } from '../Grid';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { MenuItem } from '../MenuItem';
import { PageLayout } from '.././PageLayout';

import { DropdownButton, DropdownButtonProps } from './DropdownButton';

export default {
  title: 'Components/DropdownButton',
  component: DropdownButton,
};

const dropdownContent = (
  <>
    <MenuItem onClick={() => console.log('v1')}>Вариант выбора 1</MenuItem>
    <MenuItem onClick={() => console.log('v2')}>Вариант выбора 2</MenuItem>
    <MenuItem onClick={() => console.log('v3')}>Вариант выбора 3</MenuItem>
  </>
);

export const DropdownButtonShowcase: Story = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const autoFlow = matches ? 'row' : 'column';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        DropdownButton
      </Typography>
      <Typography paragraph>
        DropdownButton - позволяет компактно разместить несколько вариантов
        действия в одном элементе.
      </Typography>
      <Typography paragraph>
        В большинстве случаев в качестве такого элемента выступает кнопка или
        пункт меню. Вызывается по клику или наведению на элемент.
      </Typography>
      <Typography variant="h4" paragraph>
        Типы кнопок
      </Typography>

      <ExampleTemplate.Case
        title="Contained"
        descriptionList={[
          'Используется, когда необходимо обозначить ключевое или стартовое действие на странице.',
          'На одной странице не может находиться свыше одной акцентной кнопки. Исключение - акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов. ',
        ]}
      >
        <Grid container justifyContent="center" autoFlow={autoFlow} spacing={4}>
          <DropdownButton fullWidth name="Default">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Light"
        descriptionList={[
          'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
        ]}
      >
        <Grid container justifyContent="center" autoFlow={autoFlow} spacing={4}>
          <DropdownButton variant="light" fullWidth name="Default">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="light" disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="light" loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Text"
        descriptionList={['Кнопка требующая наименьшего внимания.']}
      >
        <Grid container justifyContent="center" autoFlow={autoFlow} spacing={4}>
          <DropdownButton variant="text" fullWidth name="Defalut">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="text" disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="text" loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Размер кнопки"
        descriptionList={[
          'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
          alignItems="center"
        >
          <DropdownButton
            size="medium"
            variant="light"
            fullWidth
            name="Default"
          >
            {dropdownContent}
          </DropdownButton>
          <DropdownButton size="large" variant="light" fullWidth name="Default">
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case title="Кнопки с иконками">
        <Grid
          container
          justifyContent="center"
          templateColumns="repeat(auto-fit, 200px)"
          spacing={4}
        >
          <DropdownButton
            startIcon={<DialogOutlineMd />}
            //endIcon={<ChevronDOutlineMd />}
            variant="light"
            fullWidth
            name="Before&After"
          >
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Эмоциональный оттенок"
        descriptionList={[
          'К любой кнопке может быть добавлен эмоциональный оттенок.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow={matches ? autoFlow : 'false'}
          templateColumns={matches ? '' : 'repeat(3, 100px)'}
          spacing={4}
        >
          <DropdownButton
            color="error"
            variant="contained"
            fullWidth
            name="Error"
          >
            {dropdownContent}
          </DropdownButton>
          <DropdownButton
            color="success"
            variant="contained"
            fullWidth
            name="Success"
          >
            {dropdownContent}
          </DropdownButton>
          <DropdownButton
            color="warning"
            variant="contained"
            fullWidth
            name="Warning"
          >
            {dropdownContent}
          </DropdownButton>
          <DropdownButton color="error" variant="light" fullWidth name="Error">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton
            color="success"
            variant="light"
            fullWidth
            name="Success"
          >
            {dropdownContent}
          </DropdownButton>
          <DropdownButton
            color="warning"
            variant="light"
            fullWidth
            name="Warning"
          >
            {dropdownContent}
          </DropdownButton>
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case title="Пример использования">
        <PageLayout
          header={{
            title: 'Черновики',
            breadcrumbs: [
              <Fragment key="1">Раздел 1</Fragment>,
              <Fragment key="2">Текст</Fragment>,
              <Fragment key="3">Текст</Fragment>,
              <Fragment key="4">Текст</Fragment>,
              <Fragment key="5">Текст</Fragment>,
              <Fragment key="6">Текст</Fragment>,
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
              <Grid
                container
                templateColumns="240px repeat(2, 192px)"
                spacing={2}
              >
                <TextField
                  placeholder="Поиск на странице..."
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: <SearchOutlineMd />,
                  }}
                />
                <Select value="" placeholder="Выберите вариант" size="small" />
                <Select value="" placeholder="Выберите вариант" size="small" />
              </Grid>
            ),
          }}
          content={{
            children: null,
            isPaddingDisabled: false,
          }}
        />
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

DropdownButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story<DropdownButtonProps> = (args) => (
  <Stack gap={1}>
    <Stack gap={3} direction="row" alignItems="center">
      <DropdownButton {...args}>{dropdownContent}</DropdownButton>
    </Stack>
  </Stack>
);

export const DropdownButtonStory = Template.bind({});

DropdownButtonStory.storyName = 'DropdownButton';

DropdownButtonStory.args = {
  name: 'Действие',
  startIcon: <MailFillSm />,
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

DropdownButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
