import { Story } from '@storybook/react';
import { ExampleTemplate } from '../docs';

import { Typography } from '../Typography';

import { Description } from './Description';
import { styled } from '../styles';
import { Paper } from '../Paper';
import { Grid } from '../Grid';

const GridWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const PaperWrapper = styled(Paper)`
  width: 468px;
  padding: ${({ theme }) => theme.spacing(6)};
`;

export default {
  title: 'Components/Description',
  component: Description,
};

export const DescriptionShowcase: Story = () => {
  return (
    <ExampleTemplate>
      <Typography variant="h3" paragraph>
        Description
      </Typography>
      <br />
      <br />

      <Typography variant="ui" paragraph>
        Description — это компонент для отображения какой-то информации на
        странице с определенной структурой - ”Наименование поля: Tекст поля”.
      </Typography>
      <Typography variant="ui">
        Виджет полезен в использовании для следующих сценариев:
      </Typography>
      <Typography variant="ui" paragraph>
        Отображение сводных данных организации Pаявления на ЭП Сертификата ЭП и
        тд.
      </Typography>
      <br />
      <br />

      <Typography variant="h5" paragraph>
        Типы компонента
      </Typography>

      <ExampleTemplate.Case
        title="Description_start"
        descriptionList={[
          'Отображение информации слева направо.',
          'Структура данного компонента: “Наименование поля: Текст поля”.',
        ]}
      >
        <GridWrapper>
          <Grid rowSpacing={3}>
            <Description>
              <Description.Name>Название поля</Description.Name>
              <Description.Value>Значение поля</Description.Value>
            </Description>
            <Description>
              <Description.Name>Длинное название поля</Description.Name>
              <Description.Value>Длинное значение поля</Description.Value>
            </Description>
          </Grid>
        </GridWrapper>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Description_space between"
        descriptionList={[
          'Отображение информации слева направо с прязкой к границам области отображения данных.',
          'В данном компоненте “Наименование поля” имеет привязку к левому краю области отображения данных, а “Текст поля” - к правому краю с соответствующим выравниванием текста.',
        ]}
      >
        <GridWrapper>
          <Grid rowSpacing={3}>
            <Description justifyContent="space-between">
              <Description.Name>Название поля</Description.Name>
              <Description.Value>Значение поля</Description.Value>
            </Description>
            <Description justifyContent="space-between">
              <Description.Name>Длинное название поля</Description.Name>
              <Description.Value>Длинное значение поля</Description.Value>
            </Description>
          </Grid>
        </GridWrapper>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Description_space between with leader"
        descriptionList={[
          'Отображение информации слева направо с прязкой к границам области отображения данных.',
          'В данном компоненте “Наименование поля” имеет привязку к левому краю области отображения данных, “Текст поля” - к правому краю с соответствующим выравниванием текста, а между ними отображается пунктирная линия, длина которой задается автоматически в соответствии с длиной Наименования и Текста поля. Она имеет привязку к верхнему краю поля.',
        ]}
      >
        <GridWrapper>
          <Grid rowSpacing={3}>
            <Description leader>
              <Description.Name>Название поля</Description.Name>
              <Description.Value>Значение поля</Description.Value>
            </Description>
            <Description leader>
              <Description.Name>Длинное название поля</Description.Name>
              <Description.Value>Длинное значение поля</Description.Value>
            </Description>
          </Grid>
        </GridWrapper>
      </ExampleTemplate.Case>
      <br />

      <ExampleTemplate.Case
        title="Цвета"
        descriptionList={[
          'Каждый вариант компонента имеет несколько вариантов цвета “Текста поля”: Default, Warning, Error, Success, Info.',
          'Вариант цвета текста может быть выбран в зависимости от контекста использования.',
        ]}
      >
        <GridWrapper>
          <Grid rowSpacing={3}>
            <Description>
              <Description.Name>Название показателя</Description.Name>
              <Description.Value color="grey">
                Значение показателя
              </Description.Value>
            </Description>
            <Description>
              <Description.Name>Название показателя</Description.Name>
              <Description.Value color="warning">
                Значение показателя
              </Description.Value>
            </Description>
            <Description>
              <Description.Name>Название показателя</Description.Name>
              <Description.Value color="error">
                Значение показателя
              </Description.Value>
            </Description>
            <Description>
              <Description.Name>Название показателя</Description.Name>
              <Description.Value color="success">
                Значение показателя
              </Description.Value>
            </Description>
            <Description>
              <Description.Name>Название показателя</Description.Name>
              <Description.Value color="primary">
                Значение показателя
              </Description.Value>
            </Description>
          </Grid>
        </GridWrapper>
      </ExampleTemplate.Case>
      <br />

      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>
      <PaperWrapper>
        <Typography variant="h4" paragraph>
          Данные Организации
        </Typography>

        <Grid rowSpacing={3}>
          <Description leader>
            <Description.Name>Название организации</Description.Name>
            <Description.Value>ООО “Рога и Копыта”</Description.Value>
          </Description>
          <Description leader>
            <Description.Name>ИНН</Description.Name>
            <Description.Value>123456789012</Description.Value>
          </Description>
          <Description leader>
            <Description.Name>КПП</Description.Name>
            <Description.Value>КПП 1234567890123</Description.Value>
          </Description>
          <Description leader>
            <Description.Name>ОГРН</Description.Name>
            <Description.Value>1234567890123456</Description.Value>
          </Description>
        </Grid>
      </PaperWrapper>
    </ExampleTemplate>
  );
};

const Template: Story = (args) => (
  <PaperWrapper>
    <Description {...args}>
      <Description.Name color={args.colorName}>Фамилия</Description.Name>
      <Description.Value color={args.colorValue}>Иванов</Description.Value>
    </Description>
  </PaperWrapper>
);

DescriptionShowcase.parameters = { options: { showPanel: false } };

export const DescriptionStory = Template.bind({});

DescriptionStory.storyName = 'Description';

DescriptionStory.args = {
  leader: true,
};

const optionsForColor = [
  'text',
  'red',
  'secondary',
  'primary',
  'error',
  'success',
  'warning',
  'info',
  'textSecondary',
  'grey',
  'green',
  'yellow',
  undefined,
];

DescriptionStory.argTypes = {
  colorName: {
    control: 'select',
    options: optionsForColor,
    description: 'пропс из дочернего компонента Name',
  },
  colorValue: {
    control: 'select',
    options: optionsForColor,
    description: 'пропс из дочернего компонента Value',
  },
};

DescriptionStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
