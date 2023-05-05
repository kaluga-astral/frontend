import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Story } from '@storybook/react';
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

import { HeaderNav } from '../DashboardLayout/Header/styles';
import { ExampleTemplate } from '../docs';
import { Grid } from '../Grid';
import { MenuItem } from '../MenuItem';
import { AoIcon } from '../MenuGroup/stories/Icons';
import { Product } from '../Product';
import { ProductSwitcher } from '../ProductSwitcher';
import { handleGetProducts } from '../ProductSwitcher/ProductSwitcher.stories';
import { Profile } from '../Profile';
import { Typography } from '../Typography';
import { ListItemIcon } from '../ListItemIcon';
import { Menu, MenuProps } from '../Menu';
import { ListItemText } from '../ListItemText';
import { Divider } from '../Divider';

import {
  IndentWrapper,
  PaperExampleStory,
  PaperHeaderStyled,
  PaperMenu,
} from './styles';
import { Paper } from './Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
};

export const PaperShowcase: Story = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const autoFlow = matches ? 'row' : 'column';

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
        return <AoIcon />;
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
    <ExampleTemplate>
      <Typography variant="h3" color="gray" colorIntensity="900" paragraph>
        Paper
      </Typography>
      <br />
      <br />
      <Typography color="gray" colorIntensity="800" paragraph>
        Стиль напоминает бумагу, если на нее смотреть сверху вниз, она имеет
        разную высоту.
      </Typography>
      {/* Пример */}

      <ExampleTemplate.Case
        title="Отображение высоты"
        descriptionList={[
          'Высота бумаги визуально разделяется тенью, чем больше тень, тем выше находится объект.',
        ]}
      >
        <Grid container justifyContent="center" autoFlow={autoFlow} spacing={4}>
          {/* elevation={1} = нет тени */}
          <PaperExampleStory>
            <Typography variant="h6" color="gray" colorIntensity="700">
              Высота-1
            </Typography>
          </PaperExampleStory>
          {/* elevation={2} Тень 200 */}
          <PaperExampleStory elevation={2}>
            <Typography variant="h6" color="gray" colorIntensity="700">
              Высота-2
            </Typography>
          </PaperExampleStory>
          {/* elevation={3} Тень 300 */}
          <PaperExampleStory elevation={3}>
            <Typography variant="h6" color="gray" colorIntensity="700">
              Высота-3
            </Typography>
          </PaperExampleStory>
        </Grid>
      </ExampleTemplate.Case>
      <br />

      {/* Высота 1 */}

      <Typography variant="h5" color="gray" colorIntensity="900" paragraph>
        Высота-1
      </Typography>
      <Typography variant="ui" color="gray" colorIntensity="800" paragraph>
        Не имеет тени и соответственно высоты. Например рабочая область любого
        реестра (таблицы).
      </Typography>

      {/* Высота 2 */}

      <ExampleTemplate.Case
        title="Высота-2"
        descriptionList={[
          'Используется для отображения различной информации объединенной под карточку, а так же различные варианты выпадающих списков.',
        ]}
      >
        <IndentWrapper>
          <Typography variant="h6" color="gray" colorIntensity="900">
            Пример использования 1: Хедер (Header)
          </Typography>

          <PaperHeaderStyled elevation={2}>
            <HeaderNav container autoFlow="column" component="nav">
              <ProductSwitcher getProducts={handleGetProducts} />
              <Product {...header.product} />
            </HeaderNav>
            <Profile {...header.profile} />
          </PaperHeaderStyled>

          <Typography variant="h6" color="gray" colorIntensity="900">
            Пример использования 2: Выпадающий список (Dropdown)
          </Typography>

          <PaperMenu elevation={2}>
            <MenuItem>
              <ListItemIcon>
                <CaseOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="gray" colorIntensity="900">
                Список дел
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <EditFillMd />
              </ListItemIcon>
              <Typography variant="ui" color="gray" colorIntensity="900">
                Редактировать
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DocumentOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="gray" colorIntensity="900">
                Новый документ
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BinOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="gray" colorIntensity="900">
                Удалить
              </Typography>
            </MenuItem>
          </PaperMenu>
        </IndentWrapper>
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

PaperShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <PaperExampleStory {...args} />;

export const PaperStory = Template.bind({});

PaperStory.storyName = 'Default';

PaperStory.args = {
  elevation: 2,
  children: 'Высота',
};

PaperStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#eee',
      },
    ],
  },
};
