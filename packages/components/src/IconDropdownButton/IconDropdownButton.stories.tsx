import { type StoryFn } from '@storybook/react';
import { Stack } from '@mui/material';
import { DotsVOutlineMd, EditOutlineMd } from '@astral/icons';

import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';
import { ExampleTemplate } from '../docs/ExampleTemplate';
import { DataGrid, type DataGridColumns } from '../DataGrid';
import { IconButton } from '../IconButton';
import { styled } from '../styles';
import { Paper } from '../Paper';

import { IconDropdownButton } from './IconDropdownButton';

const PaperWrapper = styled(Paper)`
  width: 70%;
  padding: ${({ theme }) => theme.spacing(6)};
`;

export default {
  title: 'Components/IconDropdownButton',
  component: IconDropdownButton,
};

type DataType = {
  id: string;
  name: string;
  code: string;
  ref: string;
};

const slicedData: DataType[] = [
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
    ref: 'http://referal.lk',
  },
  {
    id: '3',
    name: 'Офис на Маяковской, оф 245',
    code: '456-875',
    ref: 'http://referal.lk',
  },
];

const handleClick = () => console.log('clicked');

const children = [
  <MenuItem key={1} onClick={() => console.log('v1')}>
    Вариант выбора 1
  </MenuItem>,
  <MenuItem key={2} onClick={() => console.log('v2')}>
    Вариант выбора 2
  </MenuItem>,
  <MenuItem key={3} onClick={() => console.log('v3')}>
    Вариант выбора 3
  </MenuItem>,
];

const columns: DataGridColumns<DataType>[] = [
  {
    field: 'name',
    label: 'Наименование',
  },
  {
    field: 'code',
    label: 'Код партнёра',
  },
  {
    field: 'ref',
    label: 'Реф. ссылка',
  },
  {
    label: '',
    align: 'center',
    width: '1%',
    renderCell: () => (
      <Stack gap={1} direction="row" justifyContent="center">
        <IconButton variant="light" onClick={handleClick}>
          <EditOutlineMd />
        </IconButton>
        <IconDropdownButton
          variant="light"
          icon={<DotsVOutlineMd />}
          aria-label="Меню"
        >
          {children}
        </IconDropdownButton>
      </Stack>
    ),
  },
];

export const IconDropdownButtonShowcase: StoryFn = () => {
  return (
    <ExampleTemplate>
      <Typography variant="h3" paragraph>
        IconDropdownButton
      </Typography>
      <br />
      <br />

      <Typography variant="ui" paragraph>
        IconDropdownButton - позволяет компактно разместить несколько вариантов
        действия в одном элементе.
      </Typography>
      <Typography variant="ui" paragraph>
        В большинстве случаев в качестве такого элемента выступает кнопка или
        пункт меню. Вызывается по клику или наведению на элемент.
      </Typography>
      <br />

      <ExampleTemplate.Case
        title="Light"
        descriptionList={[
          'Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.',
        ]}
      >
        <Stack gap={8} direction="row" justifyContent="center">
          <IconDropdownButton
            variant="light"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
          <IconDropdownButton
            disabled
            variant="light"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
          <IconDropdownButton
            loading
            variant="light"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
        </Stack>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Text"
        descriptionList={['Кнопка требующая наименьшего внимания.']}
      >
        <Stack gap={8} direction="row" justifyContent="center">
          <IconDropdownButton
            variant="text"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
          <IconDropdownButton
            disabled
            variant="text"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
          <IconDropdownButton
            loading
            variant="text"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
        </Stack>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Размер кнопки"
        descriptionList={[
          'Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.',
        ]}
      >
        <Stack
          gap={8}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <IconDropdownButton
            variant="light"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
          <IconDropdownButton
            size="large"
            variant="light"
            icon={<DotsVOutlineMd />}
            aria-label="Меню"
          >
            {children}
          </IconDropdownButton>
        </Stack>
      </ExampleTemplate.Case>
      <br />

      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>

      <PaperWrapper>
        <DataGrid keyId="id" rows={slicedData} columns={columns} />
      </PaperWrapper>
    </ExampleTemplate>
  );
};

const Template: StoryFn = (args) => (
  <IconDropdownButton icon={<DotsVOutlineMd />} {...args} aria-label="Меню" />
);

IconDropdownButtonShowcase.parameters = { options: { showPanel: false } };

export const IconDropdownButtonStory = Template.bind({});

IconDropdownButtonStory.storyName = 'IconDropdownButton';

IconDropdownButtonStory.args = {
  icon: <DotsVOutlineMd />,
  variant: 'contained',
  color: 'primary',
  children,
};

IconDropdownButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
