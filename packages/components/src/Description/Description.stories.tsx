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

const StyledDescriptionName = styled(Description.Name)`
  width: 250px;
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

export const CanCopy = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название поля</Description.Name>
        <Description.Value canCopy>
          Значение поля которое можно скопировать
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

/**
 * По дефолту copyPosition="right", можно задать "left"
 */
export const CopyPosition = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название поля</Description.Name>
        <Description.Value canCopy>
          Значение поля с иконкой справа
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название поля</Description.Name>
        <Description.Value canCopy copyPosition="left">
          Значение поля с иконкой слева
        </Description.Value>
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
        <Description.Value>Значение поля с сепаратором</Description.Value>
      </Description>
      <Description leader>
        <Description.Name>Длинное название поля</Description.Name>
        <Description.Value>
          Длинное значение поля с сепаратором
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContent = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>Название поля</Description.Name>
        <Description.Value>Значение поля c JustifyContent</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>Название поля</Description.Name>
        <Description.Value>
          Длинное значение поля с использование JustifyContent
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContentCanCopy = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>Название поля</Description.Name>
        <Description.Value canCopy>
          Значение поля с JustifyContent
        </Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>Название поля</Description.Name>
        <Description.Value canCopy>
          Длинное значение поля с использование JustifyContent которое можно
          скопировать
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const LongLabelValue = () => {
  return (
    <GridWrapper rowSpacing={4} container>
      <Description>
        <Description.Name>
          Длинное название поля которое не переносится на следующую строку
        </Description.Name>
        <Description.Value>
          Длинное значение поля которое переносится на следующую строку
        </Description.Value>
      </Description>
      <Description>
        <StyledDescriptionName>
          Длинное название поля которое переносится на следующую строку
        </StyledDescriptionName>
        <Description.Value>
          Длинное значение поля которое не переносится на следующую строку
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const LongDescriptionValueLeader = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description leader>
        <Description.Name>
          Длинное название поля которое не переносится на следующую строку
        </Description.Name>
        <Description.Value>
          Очень длинное значение поля которое переносится на следующую строку
        </Description.Value>
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

export const ColorsCanCopy = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value canCopy color="grey">
          Значение показателя
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value canCopy color="warning">
          Значение показателя
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value canCopy color="error">
          Значение показателя
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value canCopy color="success">
          Значение показателя
        </Description.Value>
      </Description>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value canCopy color="primary">
          Значение показателя
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const EmptyValue = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>Название показателя</Description.Name>
        <Description.Value></Description.Value>
      </Description>
    </GridWrapper>
  );
};
