import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles';
import { Grid } from '../Grid';

import { Description } from './Description';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1-347&mode=design&t=MnsiqzDLWSYbhRCJ-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Interaction: Story = {
  args: {
    children: (
      <>
        <Description.Name>Название поля</Description.Name>
        <Description.Value>Значение поля</Description.Value>
      </>
    ),
  },
  parameters: {
    options: { showPanel: true },
    docs: {
      disable: true,
    },
  },
};

const GridWrapper = styled(Grid)`
  justify-content: center;
`;

export const Example = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название поля</Description.Name>
        <Description.Value>Значение поля</Description.Value>
      </Description>
      <Description>
        <Description.Name>Длинное название поля</Description.Name>
        <Description.Value>Длинное значение поля</Description.Value>
      </Description>
    </GridWrapper>
  );
};

/**
 * Prop ```leader``` добавляет dashed строку
 */
export const Leader = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description leader>
        <Description.Name>Название поля</Description.Name>
        <Description.Value>Значение поля</Description.Value>
      </Description>
      <Description leader>
        <Description.Name>Длинное название поля</Description.Name>
        <Description.Value>Длинное значение поля</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContent = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>Название поля</Description.Name>
        <Description.Value>Значение поля</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>Длинное название поля</Description.Name>
        <Description.Value>Длинное значение поля</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const Colors = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value color="grey">Значение показателя</Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value color="warning">
          Значение показателя
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value color="error">Значение показателя</Description.Value>
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
    </GridWrapper>
  );
};
