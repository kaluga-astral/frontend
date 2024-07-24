import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { styled } from '../styles';
import { Button } from '../Button';

import { Grid } from './Grid';

/**
 * Grid предназначен для группировки элементов в обоих направлениях.
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=41-33&t=h03SfwalY0oSqRCX-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
};

export default meta;

const Item = styled.div`
  padding: 10px;

  text-align: center;

  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 3px;
`;

type Story = StoryObj<typeof Grid>;

export const Interaction: Story = {
  args: {
    container: true,
    rows: 2,
    rowSpacing: 3,
    children: (
      <>
        <Typography>Item 1</Typography> <Typography>Item 2</Typography>
      </>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Wrapper = styled.div`
  min-width: 500px;
`;

export const Example = () => (
  <Wrapper>
    <Grid container spacing={7}>
      <Typography variant={'h4'}>Выберите категорию:</Typography>
      <Grid rowSpacing={3}>
        <Grid container columns={'auto'} direction={'column'} columnSpacing={3}>
          <Item>
            <Typography variant={'h6'}>Абоненты</Typography>
          </Item>
        </Grid>
        <Grid container direction={'column'} columnSpacing={3}>
          <Button fullWidth> Юр. лица</Button>
          <Button fullWidth> Физ. лица</Button>
          <Button fullWidth> Самозанятые</Button>
        </Grid>
      </Grid>
    </Grid>
  </Wrapper>
);

/**
 * Prop ```rows``` позволяет задать текстовое значение соответствующее grid-template-rows
 */

export const Rows = () => {
  return (
    <Wrapper>
      <Grid container rows={3} rowSpacing={1}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Grid>
    </Wrapper>
  );
};

/**
 * Prop ```columns``` позволяет задать текстовое значение соответствующее grid-template-columns
 */
export const Columns = () => {
  return (
    <Wrapper>
      <Grid container columns={3} spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Grid>
    </Wrapper>
  );
};

/**
 * Prop ```spacing``` позволяет задать отступы между колонками и рядами. Если передан массив: Первый элемент - отступ между рядами, второй - между колонками
 */
export const Spacing = () => {
  return (
    <Wrapper>
      <Grid container columns={2} rows={2} spacing={[2, 6]}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Grid>
    </Wrapper>
  );
};

/**
 * Prop ```rowSpacing``` позволяет задать отступы между рядами.
 */
export const RowSpacing = () => {
  return (
    <Wrapper>
      <Grid container columns={2} rows={2} rowSpacing={6}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Grid>
    </Wrapper>
  );
};

/**
 * Prop ```columnSpacing``` позволяет задать отступы между колонками.
 */
export const ColumnSpacing = () => {
  return (
    <Wrapper>
      <Grid container columns={2} rows={2} columnSpacing={6}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Grid>
    </Wrapper>
  );
};

/**
 * Prop ```direction``` Соответствует grid-autoflow
 */
export const Direction = () => {
  return (
    <Wrapper>
      <Grid rowSpacing={1}>
        <Grid container direction={'row'} spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
        <Grid container direction={'column'} spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
