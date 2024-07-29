import { Box } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import {
  BinOutlineMd,
  CaseOutlineMd,
  CompanyOutlineMd,
  DocumentOutlineMd,
  EditFillMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { styled } from '../styles';
import { MenuItem } from '../MenuItem';
import { Product } from '../Product';
import { ProductSwitcher } from '../ProductSwitcher';
import { handleGetProducts } from '../ProductSwitcher/ProductSwitcher.stub';
import { Profile } from '../Profile';
import { Typography } from '../Typography';
import { ListItemIcon } from '../ListItemIcon';
import { Menu, type MenuProps } from '../Menu';
import { ListItemText } from '../ListItemText';
import { Divider } from '../Divider';
import { Grid } from '../Grid';

import { Paper } from './Paper';

/**
 * Стиль напоминает бумагу, если на нее смотреть сверху вниз, она имеет разную высоту.
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=11798-145717)
 * ### [Guide]()
 */

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
};

export default meta;

type Story = StoryObj<typeof Paper>;

const PaperHeader = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

const PaperContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 202px;
  height: 96px;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

const IndentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 8)};

  & > :nth-child(odd) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  & > :nth-child(even):not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

const PaperMenu = styled(Paper)`
  width: 200px;
  padding: ${({ theme }) => theme.spacing(1, 0)};
  list-style-type: none;
`;

export const Interaction: Story = {
  args: {
    elevation: 1,
    children: (
      <Box
        height={100}
        width={200}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography>Paper</Typography>
      </Box>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const header = {
    productSwitcher() {
      return (
        <Box>
          <ProductSwitcher getProducts={handleGetProducts} />
        </Box>
      );
    },
    product: {
      name: 'Астрал.Отчет',
      logo() {
        return <BinOutlineMd />;
      },
    },
    profile: {
      displayName: 'Григорьев Виталий',
      annotation: 'vitatiy_grig@mail.ru',
      avatar: {
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      },
      menu(props: MenuProps) {
        return (
          <Menu {...props}>
            <MenuItem>
              <ListItemIcon>
                <ProfileOutlineMd />
              </ListItemIcon>
              <ListItemText>Мой профиль</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <CompanyOutlineMd />
              </ListItemIcon>
              <ListItemText>Мои организации</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsFillMd />
              </ListItemIcon>
              <ListItemText>Настройки</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <QuitOutlineMd />
              </ListItemIcon>
              <ListItemText>Выйти</ListItemText>
            </MenuItem>
          </Menu>
        );
      },
    },
  };

  return (
    <IndentWrapper>
      <Typography variant="h6">Header</Typography>

      <PaperHeader>
        <div>
          <ProductSwitcher getProducts={handleGetProducts} />
          <Product {...header.product} />
        </div>

        <Profile {...header.profile} />
      </PaperHeader>

      <Typography variant="h6">Выпадающий список (Dropdown)</Typography>

      <PaperMenu>
        <MenuItem>
          <ListItemIcon>
            <CaseOutlineMd />
          </ListItemIcon>
          <Typography variant="ui">Список дел</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <EditFillMd />
          </ListItemIcon>
          <Typography variant="ui">Редактировать</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DocumentOutlineMd />
          </ListItemIcon>
          <Typography variant="ui">Новый документ</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BinOutlineMd />
          </ListItemIcon>
          <Typography variant="ui">Удалить</Typography>
        </MenuItem>
      </PaperMenu>
    </IndentWrapper>
  );
};

/**
 * ##### Отображение высоты
 *
 * Высота бумаги визуально разделяется тенью, чем больше тень, тем выше находится объект.
 * ###### Elevation-0
 * Не имеет тени и соответственно высоты. Например рабочая область любого реестра (таблицы).
 * ###### Elevation-1
 * Используется для отображения различной информации объединенной под карточку, а так же различные варианты выпадающих списков.
 *
 */
export const Elevation = () => {
  return (
    <Grid container rowSpacing={4}>
      <Paper elevation={0}>
        <PaperContentWrapper>
          <Typography variant="h6">Elevation-0</Typography>
        </PaperContentWrapper>
      </Paper>
      <Paper>
        <PaperContentWrapper>
          <Typography variant="h6">Elevation-1</Typography>
        </PaperContentWrapper>
      </Paper>
      <Paper elevation={2}>
        <PaperContentWrapper>
          <Typography variant="h6">Elevation-2</Typography>
        </PaperContentWrapper>
      </Paper>
    </Grid>
  );
};
