import { Story } from '@storybook/react';

import { Grid } from '../Grid';

import { Descriptions } from './Descriptions';

export default {
  title: 'Components/Description',
  component: Descriptions,
};

const Template: Story = () => (
  <Grid container spacing={6}>
    <Descriptions
      container
      spacing={2}
      title="Информация о пользователе"
      templateColumns="repeat(2, 1fr)"
    >
      <Descriptions.Item title="Фамилия">Иванов</Descriptions.Item>
      <Descriptions.Item title="Дата рождения">12.06.2022</Descriptions.Item>
      <Descriptions.Item title="Имя">Петр</Descriptions.Item>
      <Descriptions.Item title="Паспорт">4141 343411</Descriptions.Item>
      <Descriptions.Item title="Отчество">Степанович</Descriptions.Item>
      <Descriptions.Item title="СНИЛС" />
    </Descriptions>

    <Descriptions container spacing={2} title="Цвета">
      <Descriptions.Item color="error" title="Error">
        value
      </Descriptions.Item>
      <Descriptions.Item color="warning" title="Warning">
        value
      </Descriptions.Item>
      <Descriptions.Item color="success" title="Success">
        value
      </Descriptions.Item>
      <Descriptions.Item color="info" title="Info">
        value
      </Descriptions.Item>
    </Descriptions>
  </Grid>
);

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  controls: { expanded: true },
};
