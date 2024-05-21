import { Box, useMediaQuery, useTheme } from '@mui/material';
import { type StoryFn } from '@storybook/react';
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
import { ExampleTemplate } from '../docs';
import { LegacyGrid } from '../LegacyGrid';
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

import { Paper } from './Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
};

export const PaperHeader = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

export const PaperExampleStory = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 202px;
  height: 96px;
  padding: ${({ theme }) => theme.spacing(2, 3)};
`;

export const IndentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 8)};

  & > :nth-child(odd) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  & > :nth-child(even):not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export const PaperMenu = styled(Paper)`
  width: 200px;
  padding: ${({ theme }) => theme.spacing(1, 0)};
`;

export const PaperShowcase: StoryFn = () => {
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
    <ExampleTemplate>
      <Typography variant="h3" color="grey" colorIntensity="900" paragraph>
        Paper
      </Typography>
      <br />
      <br />
      <Typography color="grey" colorIntensity="800" paragraph>
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
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
        >
          {/* elevation={0} = нет тени */}
          <PaperExampleStory elevation={0}>
            <Typography variant="h6" color="grey" colorIntensity="700">
              Elevation-0
            </Typography>
          </PaperExampleStory>
          {/* elevation={1} Тень 200 */}
          <PaperExampleStory>
            <Typography variant="h6" color="grey" colorIntensity="700">
              Elevation-1
            </Typography>
          </PaperExampleStory>
          {/* elevation={2} Тень 300 */}
          <PaperExampleStory elevation={2}>
            <Typography variant="h6" color="grey" colorIntensity="700">
              Elevation-2
            </Typography>
          </PaperExampleStory>
        </LegacyGrid>
      </ExampleTemplate.Case>
      <br />

      {/* Elevation 0 */}

      <Typography variant="h5" color="grey" colorIntensity="900" paragraph>
        Elevation-0
      </Typography>
      <Typography variant="ui" color="grey" colorIntensity="800" paragraph>
        Не имеет тени и соответственно высоты. Например рабочая область любого
        реестра (таблицы).
      </Typography>

      {/* Elevation 1 */}

      <ExampleTemplate.Case
        title="Elevation-1"
        descriptionList={[
          'Используется для отображения различной информации объединенной под карточку, а так же различные варианты выпадающих списков.',
        ]}
      >
        <IndentWrapper>
          <Typography variant="h6" color="grey" colorIntensity="900">
            Пример использования 1: Хедер (Header)
          </Typography>

          <PaperHeader>
            <div>
              <ProductSwitcher getProducts={handleGetProducts} />
              <Product {...header.product} />
            </div>

            <Profile {...header.profile} />
          </PaperHeader>

          <Typography variant="h6" color="grey" colorIntensity="900">
            Пример использования 2: Выпадающий список (Dropdown)
          </Typography>

          <PaperMenu>
            <MenuItem>
              <ListItemIcon>
                <CaseOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="grey" colorIntensity="900">
                Список дел
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <EditFillMd />
              </ListItemIcon>
              <Typography variant="ui" color="grey" colorIntensity="900">
                Редактировать
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DocumentOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="grey" colorIntensity="900">
                Новый документ
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BinOutlineMd />
              </ListItemIcon>
              <Typography variant="ui" color="grey" colorIntensity="900">
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

const Template: StoryFn = (args) => <PaperExampleStory {...args} />;

export const PaperStory = Template.bind({});

PaperStory.storyName = 'Default';

PaperStory.args = {
  elevation: 1,
  children: 'Elevation',
};

PaperStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#eee',
      },
    ],
  },
};
