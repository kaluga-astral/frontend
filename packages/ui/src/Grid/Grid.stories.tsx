import { Story } from '@storybook/react';
import { Box, BoxProps, Stack } from '@mui/material';

import { Typography } from '../Typography/Typography';

import { Grid } from './Grid';
import { GridContainerProps, GridElementsProps } from './types';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Item = (props: BoxProps) => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: (theme) => theme.palette.grey[300],
      borderRadius: 3,
      textAlign: 'center',
      p: 1,
    }}
    {...props}
  />
);

const Template: Story = ({
  container,
  templateColumns,
  templateRows,
  templateAreas,
  columnSpacing,
  rowSpacing,
  spacing,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  autoColumns,
  autoRows,
  autoFlow,
  column,
  row,
  area,
  justifySelf,
  alignSelf,
}) => {
  const containerProps: GridContainerProps = {
    container,
    templateColumns,
    templateRows,
    templateAreas,
    columnSpacing,
    rowSpacing,
    spacing,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    autoColumns,
    autoRows,
    autoFlow,
  };
  const elementProps: GridElementsProps = {
    column,
    row,
    area,
    justifySelf,
    alignSelf,
  };
  return (
    <Grid {...containerProps}>
      <Grid {...elementProps}>
        <Item>Grid Item 1</Item>
      </Grid>
      <Item>Item 2</Item>
    </Grid>
  );
};

export const Showcase: Story = () => (
  <Stack gap={2}>
    <Typography variant="h3">Grid Container Props</Typography>
    <Stack gap={1}>
      <Typography variant="ui">Grid Container</Typography>
      <div>
        <Grid container spacing={1}>
          <Item>Grid Container</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Template Rows</Typography>
      <div>
        <Grid container templateRows="repeat(3, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Template Columns</Typography>
      <div>
        <Grid container templateColumns="repeat(3, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Spacing</Typography>
      <div>
        <Grid container templateColumns="repeat(2, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Row Spacing & Column Spacing</Typography>
      <div>
        <Grid
          container
          templateColumns="repeat(2, 1fr)"
          columnSpacing={1}
          rowSpacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Template Area</Typography>
      <div>
        <Grid
          container
          templateColumns="repeat(4, 1fr)"
          spacing={1}
          templateRows="auto"
          templateAreas={`"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`}
        >
          <Grid area="header">
            <Item>Header</Item>
          </Grid>
          <Grid area="main">
            <Item>Main</Item>
          </Grid>
          <Grid area="sidebar">
            <Item>SideBar</Item>
          </Grid>
          <Grid area="footer">
            <Item>Footer</Item>
          </Grid>
        </Grid>
      </div>
      <Typography variant="ui">Grid Auto Columns</Typography>
      <div>
        <Grid container autoColumns="1fr" spacing={1}>
          <Grid row="1" column="span 2">
            <Item>span 2</Item>
          </Grid>
          <Grid row="1" column="4 / 5">
            <Item>4 / 5</Item>
          </Grid>
        </Grid>
      </div>
      <Typography variant="ui">Grid Auto Rows</Typography>
      <div>
        <Grid container autoRows="40px" spacing={1}>
          <Grid column="1" row="span 2">
            <Item>span 2</Item>
          </Grid>
          <Grid column="1" row="4 / 5">
            <Item>4 / 5</Item>
          </Grid>
        </Grid>
      </div>
      <Typography variant="ui">Grid Auto Flow</Typography>
      <div>
        <Grid
          container
          autoFlow="row"
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(2, 50px)"
          spacing={1}
        >
          <Grid column="1" row="1 / 3">
            <Item>Item 1</Item>
          </Grid>
          <Grid>
            <Item>Item 2</Item>
          </Grid>
          <Grid>
            <Item>Item 3</Item>
          </Grid>
          <Grid>
            <Item>Item 4</Item>
          </Grid>
          <Grid column="5" row="1 / 3">
            <Item>Item 5</Item>
          </Grid>
        </Grid>
      </div>
    </Stack>
    <Typography variant="h3">Grid children props</Typography>
    <Stack gap={1}>
      <Typography variant="ui">Grid column</Typography>
      <div>
        <Grid column="1 / 3">
          <Item>Item 1</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid Row</Typography>
      <div>
        <Grid row="span 2">
          <Item>Item 2</Item>
        </Grid>
      </div>
      <Typography variant="ui">Grid area</Typography>
      <div>
        <Grid area="Header">
          <Item>Header</Item>
        </Grid>
      </div>
    </Stack>
    <Typography variant="h3">Breakpoints Props</Typography>
    <Stack gap={1}>
      <div>
        <Grid
          container
          templateColumns={{ xs: '1fr', lg: '200px 1fr 1fr' }}
          columnSpacing={6}
        >
          <Grid column={{ xs: '1', lg: 'span 2' }}>
            <Item>Item 1</Item>
          </Grid>
          <Item>Item 2</Item>
        </Grid>
      </div>
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  container: true,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
