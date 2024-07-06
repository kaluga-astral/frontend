import { type Meta, type StoryObj } from '@storybook/react';
import {
  DownloadOutlineMd,
  EyeFillMd,
  EyeOutlineMd,
  FilterOutlineMd,
  PrintOutlineMd,
  SendOutlineMd,
} from '@astral/icons';

import { DataGrid, type DataGridColumns } from '../DataGrid';
import { ActionCell, type Actions } from '../ActionCell';
import { Grid } from '../Grid';
import { styled } from '../styles';

import { IconButton } from './IconButton';

/**
 * Кнопки позволяют пользователям выполнять действия и делать выбор одним нажатием.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?type=design&node-id=94-0&mode=design&t=EQjYQfNQEfKUEwp3-0)
 * ### [Guide]()
 */
const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Interaction: Story = {
  render: (args) => {
    return (
      <IconButton {...args}>
        <PrintOutlineMd />
      </IconButton>
    );
  },
  args: {},
  parameters: {
    docs: {
      disable: true,
    },
  },
};

type Columns = { id: string; name: string; code: string; ref: string };

export const Example = () => {
  const ACTIONS: Actions<Columns> = {
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

  const COLUMNS: DataGridColumns<Columns>[] = [
    { field: 'name', label: 'Наименование' },
    { field: 'code', label: 'Код партнера' },
    { field: 'ref', label: 'Реф. ссылка' },
    {
      renderCell: (row) => <ActionCell actions={ACTIONS} row={row} />,
      width: '1%',
    },
  ];

  const DATA: Columns[] = [
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

  return <DataGrid rows={DATA} columns={COLUMNS} keyId={'id'} />;
};

const ButtonsContainer = styled(Grid)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    flex-direction: row;

    width: 150px;
  }
`;

/**
 * Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.
 *
 * На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов.
 */

export const Contained = () => {
  return (
    <ButtonsContainer columns={4}>
      <IconButton variant="contained">
        <PrintOutlineMd />
      </IconButton>
      <IconButton selected variant="contained">
        <PrintOutlineMd />
      </IconButton>
      <IconButton disabled variant="contained">
        <PrintOutlineMd />
      </IconButton>
      <IconButton loading variant="contained">
        <PrintOutlineMd />
      </IconButton>
    </ButtonsContainer>
  );
};

/**
 * Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.
 */

export const Light = () => {
  return (
    <ButtonsContainer columns={4}>
      <IconButton variant="light">
        <EyeOutlineMd />
      </IconButton>
      <IconButton selected variant="light">
        <EyeOutlineMd />
      </IconButton>
      <IconButton disabled variant="light">
        <EyeOutlineMd />
      </IconButton>
      <IconButton loading variant="light">
        <EyeOutlineMd />
      </IconButton>
    </ButtonsContainer>
  );
};

/**
 * Кнопка для перехода по ссылке на новую страницу. В некоторых случаях открывает окно браузера.
 */

export const Link = () => {
  return (
    <ButtonsContainer columns={4}>
      <IconButton variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton selected variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton disabled variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton loading variant="link">
        <FilterOutlineMd />
      </IconButton>
    </ButtonsContainer>
  );
};

/**
 * Кнопка требующая наименьшего внимания.
 */

export const Text = () => {
  return (
    <ButtonsContainer columns={4}>
      <IconButton variant="text">
        <FilterOutlineMd />
      </IconButton>
      <IconButton selected variant="text">
        <FilterOutlineMd />
      </IconButton>
      <IconButton disabled variant="text">
        <FilterOutlineMd />
      </IconButton>
      <IconButton loading variant="text">
        <FilterOutlineMd />
      </IconButton>
    </ButtonsContainer>
  );
};

/**
 * Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.
 */

export const ButtonSize = () => {
  return (
    <ButtonsContainer columns={2}>
      <IconButton size="medium" variant="light">
        <DownloadOutlineMd />
      </IconButton>
      <IconButton size="large" variant="light">
        <DownloadOutlineMd />
      </IconButton>
    </ButtonsContainer>
  );
};

/**
 * К любой кнопке может быть добавлен эмоциональный оттенок.
 */

export const EmotionalTone = () => {
  return (
    <Grid container spacing={3}>
      <ButtonsContainer columns={3}>
        <IconButton variant="contained" color="error">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="success">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="warning">
          <DownloadOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={3}>
        <IconButton variant="light" color="error">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="light" color="success">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="light" color="warning">
          <DownloadOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>
  );
};
