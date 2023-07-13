import { Story } from '@storybook/react';

import { LegacyGrid } from '../LegacyGrid';

import { Description } from './Description';

export default {
  title: 'Components/Description',
  component: Description,
};

const Template: Story = () => (
  <LegacyGrid container spacing={4}>
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
    <Description separator=";">
      <Description.Name>Custom</Description.Name>
      <Description.Value>separator</Description.Value>
    </Description>
    <Description>
      <Description.Name>EmptySymbol</Description.Name>
      <Description.Value></Description.Value>
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
    <Description leader>
      <Description.Name>Info With leader</Description.Name>
      <Description.Value color="info">info</Description.Value>
    </Description>
    <Description justifyContent="space-between">
      <Description.Name>Info WithOut leader</Description.Name>
      <Description.Value color="info">info</Description.Value>
    </Description>
  </LegacyGrid>
);

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  controls: { expanded: true },
};
