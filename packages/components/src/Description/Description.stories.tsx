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
  width: 200px;
`;

const StyledDescriptionValue = styled(Description.Value)`
  width: 300px;
`;

export const Example = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>ИНН</Description.Name>
        <Description.Value>295995231495</Description.Value>
      </Description>
      <Description>
        <Description.Name>Описание</Description.Name>
        <StyledDescriptionValue>
          ИНН физического лица является последовательностью из 12 цифр
        </StyledDescriptionValue>
      </Description>
    </GridWrapper>
  );
};

export const CanCopy = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>КПП</Description.Name>
        <Description.Value canCopy>293144576</Description.Value>
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
        <Description.Name>КПП</Description.Name>
        <Description.Value canCopy>293144576</Description.Value>
      </Description>
      <Description>
        <Description.Name>Снилс</Description.Name>
        <Description.Value canCopy copyPosition="left">
          23339576886
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
        <Description.Name>ФИО</Description.Name>
        <Description.Value>Швецова М. Д.</Description.Value>
      </Description>
      <Description leader>
        <Description.Name>ФИО</Description.Name>
        <Description.Value>Швецова Мария Дмитриевна</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContent = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>ФИО</Description.Name>
        <Description.Value>Швецова М. Д.</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>ФИО</Description.Name>
        <Description.Value>Швецова Мария Дмитриевна</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContentCanCopy = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>ИНН</Description.Name>
        <Description.Value canCopy>295995231495</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>Описание</Description.Name>
        <Description.Value canCopy copyPosition="left">
          ИНН физического лица является последовательностью из 12 цифр
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const LongLabelValue = () => {
  return (
    <GridWrapper rowSpacing={4} container>
      <Description>
        <Description.Name>Описания ИНН юридического лица</Description.Name>
        <Description.Value>
          ИНН юридического лица — последовательность из 10 арабских цифр
        </Description.Value>
      </Description>
      <Description>
        <StyledDescriptionName>
          Описания ИНН юридического лица
        </StyledDescriptionName>
        <StyledDescriptionValue>
          ИНН юридического лица — последовательность из 10 арабских цифр
        </StyledDescriptionValue>
      </Description>
    </GridWrapper>
  );
};

export const LongDescriptionValueLeader = () => {
  return (
    <GridWrapper rowSpacing={3} container>
      <Description leader>
        <Description.Name>Описания ИНН юридического лица</Description.Name>
        <StyledDescriptionValue>
          ИНН юридического лица — последовательность из 10 арабских цифр
        </StyledDescriptionValue>
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
