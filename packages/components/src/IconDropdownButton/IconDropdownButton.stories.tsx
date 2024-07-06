import { type Meta, type StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { DotsVOutlineMd, EditOutlineMd } from '@astral/icons';

import { MenuItem } from '../MenuItem';
import { DataGrid, type DataGridColumns } from '../DataGrid';
import { IconButton } from '../IconButton';

import { IconDropdownButton } from './IconDropdownButton';

/**
 * IconDropdownButton - позволяет компактно разместить несколько вариантов действия в одном элементе. В большинстве случаев в качестве такого элемента выступает кнопка или пункт меню. Вызывается по клику или наведению на элемент.
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=94-0&t=h03SfwalY0oSqRCX-0)
 * ### [Guide]()
 */
const meta: Meta<typeof IconDropdownButton> = {
  title: 'Components/IconDropdownButton',
  component: IconDropdownButton,
};

export default meta;

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

type Story = StoryObj<typeof IconDropdownButton>;

export const Interaction: Story = {
  args: {
    icon: <DotsVOutlineMd />,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <DataGrid keyId="id" rows={slicedData} columns={columns} />
);

/**
 * Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.
 */
export const Light = () => (
  <>
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
  </>
);

/**
 * Кнопка требующая наименьшего внимания.
 */
export const Text = () => (
  <>
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
  </>
);

/**
 * Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.
 */
export const ButtonSize = () => (
  <>
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
  </>
);
