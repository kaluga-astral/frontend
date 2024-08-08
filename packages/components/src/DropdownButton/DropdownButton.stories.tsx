import { type Meta, type StoryObj } from '@storybook/react';
import { DialogOutlineMd } from '@astral/icons';

import { Grid, MenuItem, Typography } from '..';

import { DropdownButton } from './DropdownButton';

/**
 * DropdownButton - позволяет компактно разместить несколько вариантов действия в одном элементе.
 *
 * В большинстве случаев в качестве такого элемента выступает кнопка или пункт меню. Вызывается по клику или наведению на элемент.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=6960-90908&mode=design&t=vqxm9iY5hHwyqGi6-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DropdownButton> = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
};

export default meta;

const dropdownContent = (
  <>
    <MenuItem onClick={() => console.log('v1')}>Вариант выбора 1</MenuItem>
    <MenuItem onClick={() => console.log('v2')}>Вариант выбора 2</MenuItem>
    <MenuItem onClick={() => console.log('v3')}>Вариант выбора 3</MenuItem>
  </>
);

type Story = StoryObj<typeof DropdownButton>;

export const Interaction: Story = {
  args: {
    children: dropdownContent,
    name: 'Действие',
    variant: 'contained',
    color: 'primary',
    size: 'large',
    fullWidth: false,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <Grid container columns={3} spacing={4}>
    <DropdownButton name="Default">{dropdownContent}</DropdownButton>
    <DropdownButton disabled name="Disabled">
      {dropdownContent}
    </DropdownButton>
    <DropdownButton loading name="Loading">
      {dropdownContent}
    </DropdownButton>
  </Grid>
);

export const StartIcon = () => {
  return (
    <DropdownButton
      startIcon={<DialogOutlineMd />}
      variant="light"
      name="With icon"
    >
      {dropdownContent}
    </DropdownButton>
  );
};

export const Note = () => {
  const dropdownItems = (
    <>
      <MenuItem note="Перейти в профиль" onClick={() => console.log('v1')}>
        Профиль
      </MenuItem>
      <MenuItem onClick={() => console.log('v3')}>Выход</MenuItem>
    </>
  );

  return (
    <DropdownButton
      startIcon={<DialogOutlineMd />}
      variant="light"
      name="With icon"
    >
      {dropdownItems}
    </DropdownButton>
  );
};

export const DisableReason = () => {
  const dropdownItems = (
    <>
      <MenuItem
        disabledReason="Заблокировано"
        disabled
        onClick={() => console.log('v1')}
      >
        Профиль
      </MenuItem>
      <MenuItem onClick={() => console.log('v3')}>Выход</MenuItem>
    </>
  );

  return (
    <DropdownButton
      startIcon={<DialogOutlineMd />}
      variant="light"
      name="With icon"
    >
      {dropdownItems}
    </DropdownButton>
  );
};

/** Для стилизации основной кнопки доступны ButtonProps */
export const ButtonProps = () => (
  <Grid container rowSpacing={5}>
    <Typography variant="h6">Variant</Typography>

    <Grid container columns={3} spacing={4}>
      <DropdownButton name="Default">{dropdownContent}</DropdownButton>
      <DropdownButton variant="light" name="Light">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton variant="text" name="Text">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton variant="link" name="Link">
        {dropdownContent}
      </DropdownButton>
    </Grid>

    <Typography variant="h6">Color</Typography>

    <Grid container columns={3} spacing={4}>
      <DropdownButton color="primary" name="Primary">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton color="error" name="Error">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton color="success" name="Success">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton color="warning" name="Warning">
        {dropdownContent}
      </DropdownButton>
    </Grid>

    <Typography variant="h6">Size</Typography>

    <Grid container columns={3} spacing={6}>
      <DropdownButton size="medium" name="Medium">
        {dropdownContent}
      </DropdownButton>
      <DropdownButton size="large" name="Large">
        {dropdownContent}
      </DropdownButton>
    </Grid>
  </Grid>
);

/** Для управления параметрами popover доступны PopoverProps */
export const PopoverProps = () => {
  return (
    <>
      <DropdownButton
        name="Default"
        variant="light"
        popoverProps={{
          anchorOrigin: { vertical: 'center', horizontal: 'right' },
        }}
      >
        {dropdownContent}
      </DropdownButton>
      <DropdownButton
        name="Default"
        variant="light"
        popoverProps={{
          anchorOrigin: { vertical: 'center', horizontal: 'right' },
          transformOrigin: { vertical: 100, horizontal: 'right' },
        }}
      >
        {dropdownContent}
      </DropdownButton>
    </>
  );
};
