import { type Meta, type StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { AddOutlineMd, InfoFillMd } from '@astral/icons';

import { Grid } from '../Grid';
import { styled } from '../styles';
import { Typography } from '../Typography';
import { Button } from '../Button';

import { Tooltip } from './Tooltip';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=13972%3A156442&mode=design&t=LsGtMosbO9B0qzPe-1)
 * ### [Guide]()
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Interaction: Story = {
  args: {
    title: 'Всплывающая подсказка',
    children: (
      <Button color="primary" variant="contained">
        <AddOutlineMd />
      </Button>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const ContentTooltip = () => {
  return (
    <Stack flexDirection="row" gap={1}>
      <Stack>
        <Typography>Нал. расчет</Typography>
        <Typography>Безнал. расчет</Typography>
      </Stack>
      <Stack alignItems="flex-end">
        <Typography color={'warning'}>10 шт.</Typography>
        <Typography color={'warning'}>99 989 шт.</Typography>
      </Stack>
    </Stack>
  );
};

export const Example = () => (
  <Stack gap={5}>
    <Stack flexDirection="row" gap={1}>
      <Typography>Укажите свой телефон</Typography>
      <Tooltip
        title="Формат данных: +7 (ХХХ) ХХХ-ХХ-ХХ"
        withoutContainer={false}
      >
        <InfoFillMd color={'info'} />
      </Tooltip>
    </Stack>

    <Stack flexDirection="row" gap={1}>
      <Typography>Общая выручка</Typography>
      <Tooltip title={<ContentTooltip />} withoutContainer={false}>
        <InfoFillMd color={'info'} />
      </Tooltip>
    </Stack>
  </Stack>
);

export const Sizes = () => (
  <>
    <Stack gap={4}>
      <Typography variant="h5">Small</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Tooltip size="small" title="Всплывающая подсказка">
          <Button color="primary" variant="contained">
            <AddOutlineMd />
          </Button>
        </Tooltip>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h5">Medium</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Tooltip title="Всплывающая подсказка">
          <Button color="primary" variant="contained">
            <AddOutlineMd />
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  </>
);

const GridContainer = styled(Grid)`
  gap: 10px;

  margin-top: 30px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    flex-direction: row;
  }
`;

export const Location = () => (
  <GridContainer container columns={3}>
    <Tooltip title="Всплывающая подсказка" placement="top" size="small">
      <Button color="primary" variant="contained" size="large">
        Top
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="top-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Top-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="top-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Top-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="bottom" size="small">
      <Button color="primary" variant="contained" size="large">
        Bottom
      </Button>
    </Tooltip>

    <Tooltip
      title="Всплывающая подсказка"
      placement="bottom-start"
      size="small"
    >
      <Button color="primary" variant="contained" size="large">
        Bottom-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="bottom-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Bottom-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left" size="small">
      <Button color="primary" variant="contained" size="large">
        Left
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Left-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Left-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right" size="small">
      <Button color="primary" variant="contained" size="large">
        Right
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Right-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Right-end
      </Button>
    </Tooltip>
  </GridContainer>
);

/**
 * Пропс withoutContainer необходим чтобы Tooltip работал на элементе который disabled
 */
export const Disabled = () => (
  <Stack gap={4}>
    <Tooltip title="Всплывающая подсказка" withoutContainer={false}>
      <Button color="primary" variant="contained" disabled>
        Right-end
      </Button>
    </Tooltip>
  </Stack>
);

/**
 * При использовании символа \n в пропсе title будет происходить перенос текста на новую строку
 */
export const NewLineCharacter = () => {
  const titleWithNewLineCharacter =
    'Текущий документ не прошел \n согласование/подписание. \n Загрузите документ повторно';
  const titleWithoutNewLineCharacter =
    'Текущий документ не прошел согласование/подписание. Загрузите документ повторно';

  return (
    <GridContainer container columns={2}>
      <Tooltip title={titleWithNewLineCharacter} placement="top" size="small">
        <Button color="primary" variant="contained" size="large">
          С использованием переноса
        </Button>
      </Tooltip>
      <Tooltip
        title={titleWithoutNewLineCharacter}
        placement="top"
        size="small"
      >
        <Button color="primary" variant="contained" size="large">
          Без использования переноса
        </Button>
      </Tooltip>
    </GridContainer>
  );
};
