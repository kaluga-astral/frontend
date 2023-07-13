import { Story } from '@storybook/react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { DialogOutlineMd, MailFillSm } from '@astral/icons';

import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { MenuItem } from '../MenuItem';

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
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const autoFlow = matches ? 'row' : 'column';

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
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <DropdownButton fullWidth name="Default">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Light"
        descriptionList={[
          'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
        ]}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <DropdownButton variant="light" fullWidth name="Default">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="light" disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="light" loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Text"
        descriptionList={['Кнопка требующая наименьшего внимания.']}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          <DropdownButton variant="text" fullWidth name="Defalut">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="text" disabled fullWidth name="Disabled">
            {dropdownContent}
          </DropdownButton>
          <DropdownButton variant="text" loading fullWidth name="Loading">
            {dropdownContent}
          </DropdownButton>
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Размер кнопки"
        descriptionList={[
          'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
        ]}
      >
        <LegacyGrid
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
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case title="Кнопки с иконками">
        <LegacyGrid
          container
          justifyContent="center"
          templateColumns="repeat(auto-fit, 200px)"
          spacing={4}
        >
          <DropdownButton
            startIcon={<DialogOutlineMd />}
            variant="light"
            fullWidth
            name="Before&After"
          >
            {dropdownContent}
          </DropdownButton>
        </LegacyGrid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Эмоциональный оттенок"
        descriptionList={[
          'К любой кнопке может быть добавлен эмоциональный оттенок.',
        ]}
      >
        <LegacyGrid
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
        </LegacyGrid>
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
