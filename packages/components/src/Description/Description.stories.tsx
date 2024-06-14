import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles';
import { Grid } from '../Grid';
import { makeDescriptionData, makeLongDescriptionData } from '../faker';

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
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value>{data.descriptionValue}</Description.Value>
      </Description>
      <Description>
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value>{longData.descriptionValue}</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const CanCopy = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value canCopy>{data.descriptionValue}</Description.Value>
      </Description>
      <Description>
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value canCopy>
          {longData.descriptionValue}
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

/**
 * По дефолту copyPosition="right", можно задать "left"
 */
export const CopyPosition = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description>
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value canCopy>{data.descriptionValue}</Description.Value>
      </Description>
      <Description>
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value canCopy copyPosition="left">
          {longData.descriptionValue}
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

/**
 * Prop ```leader``` добавляет dashed строку
 */
export const Leader = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description leader>
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value>{data.descriptionValue}</Description.Value>
      </Description>
      <Description leader>
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value>{longData.descriptionValue}</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContent = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value>{data.descriptionValue}</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value>{longData.descriptionValue}</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const JustifyContentCanCopy = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description justifyContent="space-between">
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value canCopy>{data.descriptionValue}</Description.Value>
      </Description>
      <Description justifyContent="space-between">
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value canCopy>
          {longData.descriptionValue}
        </Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const LongLabelValue = () => {
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={4} container>
      <Description>
        <Description.Name>{longData.descriptionName}</Description.Name>
        <Description.Value>{longData.descriptionValue}</Description.Value>
      </Description>
      <Description>
        <StyledDescriptionName>
          {longData.descriptionName}
        </StyledDescriptionName>
        <Description.Value>{longData.descriptionValue}</Description.Value>
      </Description>
    </GridWrapper>
  );
};

export const LongDescriptionValueLeader = () => {
  const data = makeDescriptionData();
  const longData = makeLongDescriptionData();

  return (
    <GridWrapper rowSpacing={3} container>
      <Description leader>
        <Description.Name>{data.descriptionName}</Description.Name>
        <Description.Value>{longData.descriptionValue}</Description.Value>
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
