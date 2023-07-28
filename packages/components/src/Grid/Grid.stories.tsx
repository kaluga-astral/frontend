import { Story } from '@storybook/react';

import { Typography } from '../Typography';
import { styled } from '../styles';

import { Grid } from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 3px;
  text-align: center;
`;

const Template: Story = (props) => {
  return (
    <Grid {...props}>
      <Grid>Grid Item 1</Grid>
    </Grid>
  );
};

export const Showcase: Story = () => (
  <Grid container spacing={2}>
    <Typography variant="h3">Grid Props</Typography>
    <Typography variant="ui">Grid Container</Typography>

    <Grid container>
      <Item>Item 1</Item>
    </Grid>
    <Typography variant="ui">Grid columns</Typography>

    <Grid container columns={3} spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Grid>

    <Typography variant="ui">Grid rows</Typography>

    <Grid container rows={3} rowSpacing={1}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Grid>

    <Typography variant="ui">Grid Spacing</Typography>

    <Grid spacing={1}>
      <Grid container columns={3} spacing={1}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Grid>
      <Grid container columns={2} rows={2} spacing={[2, 6]}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Grid>
    </Grid>
    <Typography variant="ui">Grid Row Spacing & Column Spacing</Typography>

    <Grid container columns={2} rows={2} columnSpacing={1} rowSpacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Grid>

    <Typography variant="ui">Grid direction</Typography>

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
  </Grid>
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
