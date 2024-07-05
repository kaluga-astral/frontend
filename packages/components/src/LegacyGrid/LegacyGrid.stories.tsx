import { type Meta, type StoryObj } from '@storybook/react';
import { Box, type BoxProps, Stack } from '@mui/material';

import { Typography } from '../Typography';

import { LegacyGrid } from './LegacyGrid';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof LegacyGrid> = {
  title: 'Components/LegacyGrid',
  component: LegacyGrid,
};

export default meta;

const Item = (props: BoxProps) => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: (theme) => theme.palette.grey[300],
      borderRadius: '3px',
      textAlign: 'center',
      p: 1,
    }}
    {...props}
  />
);

type Story = StoryObj<typeof LegacyGrid>;

export const Interaction: Story = {
  args: {
    children: (<><Item>Item 1</Item> <Item>Item 2</Item></>),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
    <LegacyGrid container>
      <LegacyGrid>
        <Item>Grid Item 1</Item>
      </LegacyGrid>
      <Item>Item 2</Item>
    </LegacyGrid>
);

export const Grid_Container_Props = () => (
    <Stack gap={1}>
      <Typography variant="ui">Grid Container</Typography>
      <div>
        <LegacyGrid container spacing={1}>
          <Item>Grid Container</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Template Rows</Typography>
      <div>
        <LegacyGrid container templateRows="repeat(3, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Template Columns</Typography>
      <div>
        <LegacyGrid container templateColumns="repeat(3, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Spacing</Typography>
      <div>
        <LegacyGrid container templateColumns="repeat(2, 1fr)" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Row Spacing & Column Spacing</Typography>
      <div>
        <LegacyGrid
          container
          templateColumns="repeat(2, 1fr)"
          columnSpacing={1}
          rowSpacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Template Area</Typography>
      <div>
        <LegacyGrid
          container
          templateColumns="repeat(4, 1fr)"
          spacing={1}
          templateRows="auto"
          templateAreas={`"header header header header"
  "main main . Sidebar"
  "footer footer footer footer"`}
        >
          <LegacyGrid area="header">
            <Item>Header</Item>
          </LegacyGrid>
          <LegacyGrid area="main">
            <Item>Main</Item>
          </LegacyGrid>
          <LegacyGrid area="Sidebar">
            <Item>Sidebar</Item>
          </LegacyGrid>
          <LegacyGrid area="footer">
            <Item>Footer</Item>
          </LegacyGrid>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Auto Columns</Typography>
      <div>
        <LegacyGrid container autoColumns="1fr" spacing={1}>
          <LegacyGrid row="1" column="span 2">
            <Item>span 2</Item>
          </LegacyGrid>
          <LegacyGrid row="1" column="4 / 5">
            <Item>4 / 5</Item>
          </LegacyGrid>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Auto Rows</Typography>
      <div>
        <LegacyGrid container autoRows="40px" spacing={1}>
          <LegacyGrid column="1" row="span 2">
            <Item>span 2</Item>
          </LegacyGrid>
          <LegacyGrid column="1" row="4 / 5">
            <Item>4 / 5</Item>
          </LegacyGrid>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Auto Flow</Typography>
      <div>
        <LegacyGrid
          container
          autoFlow="row"
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(2, 50px)"
          spacing={1}
        >
          <LegacyGrid column="1" row="1 / 3">
            <Item>Item 1</Item>
          </LegacyGrid>
          <LegacyGrid>
            <Item>Item 2</Item>
          </LegacyGrid>
          <LegacyGrid>
            <Item>Item 3</Item>
          </LegacyGrid>
          <LegacyGrid>
            <Item>Item 4</Item>
          </LegacyGrid>
          <LegacyGrid column="5" row="1 / 3">
            <Item>Item 5</Item>
          </LegacyGrid>
        </LegacyGrid>
      </div>
    </Stack>
);
export const Grid_Children_Props = () => (
    <Stack gap={1}>
      <Typography variant="ui">Grid column</Typography>
      <div>
        <LegacyGrid column="1 / 3">
          <Item>Item 1</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid Row</Typography>
      <div>
        <LegacyGrid row="span 2">
          <Item>Item 2</Item>
        </LegacyGrid>
      </div>
      <Typography variant="ui">Grid area</Typography>
      <div>
        <LegacyGrid area="Header">
          <Item>Header</Item>
        </LegacyGrid>
      </div>
    </Stack>
);
export const Breakpoints_Props = () => (
    <Stack gap={1}>
      <div>
        <LegacyGrid
          container
          templateColumns={{ xs: '1fr', lg: '200px 1fr 1fr' }}
          columnSpacing={6}
        >
          <LegacyGrid column={{ xs: '1', lg: 'span 2' }}>
            <Item>Item 1</Item>
          </LegacyGrid>
          <Item>Item 2</Item>
        </LegacyGrid>
      </div>
    </Stack>
);

