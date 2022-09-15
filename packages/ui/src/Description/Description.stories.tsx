import { Story } from '@storybook/react';

import { Grid } from '../Grid';

import { Description } from './Description';

export default {
  title: 'Components/Description',
  component: Description,
};

const Template: Story = () => (
  <Grid container spacing={4}>
    <Description>
      <Description.Name>Фамилия</Description.Name>
      <Description.Value>Иванов</Description.Value>
    </Description>
    <Description>
      <Description.Name>Дата рождения</Description.Name>
      <Description.Value>12.06.2022</Description.Value>
    </Description>
    <Description>
      <Description.Name>Имя</Description.Name>
      <Description.Value>Петр</Description.Value>
    </Description>
    <Description>
      <Description.Name>Паспорт</Description.Name>
      <Description.Value>4141 343411</Description.Value>
    </Description>
    <Description>
      <Description.Name>Отчество</Description.Name>
      <Description.Value>Степанович</Description.Value>
    </Description>
    <Description>
      <Description.Name>Error</Description.Name>
      <Description.Value color="error">error</Description.Value>
    </Description>
    <Description>
      <Description.Name>Warning</Description.Name>
      <Description.Value color="warning">warning</Description.Value>
    </Description>
    <Description>
      <Description.Name>Success</Description.Name>
      <Description.Value color="success">success</Description.Value>
    </Description>
    <Description>
      <Description.Name>Info</Description.Name>
      <Description.Value color="info">info</Description.Value>
    </Description>
  </Grid>
);

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  controls: { expanded: true },
};
