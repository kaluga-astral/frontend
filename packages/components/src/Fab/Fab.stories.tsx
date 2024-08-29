import { LikeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { Fab } from './Fab';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Fab> = {
  title: 'Components/Buttons/Fab',
  component: Fab,
};

export default meta;

type Story = StoryObj<typeof Fab>;

export const Interaction: Story = {
  args: {
    children: <LikeOutlineMd />,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Item = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-items: center;
`;

export const Example = () => (
  <Fab size="small" color="default">
    <LikeOutlineMd />
  </Fab>
);

export const Sizes = () => (
  <>
    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">small</Typography>
        <Fab size="small" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">medium</Typography>
        <Fab size="medium" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">large</Typography>
        <Fab size="large" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>
  </>
);

export const Colors = () => (
  <>
    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">default</Typography>
        <Fab size="small" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">primary</Typography>
        <Fab size="small" color="primary">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">success</Typography>
        <Fab size="small" color="success">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">warning</Typography>
        <Fab size="small" color="warning">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">error</Typography>
        <Fab size="small" color="error">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>
  </>
);

export const Variants = () => (
  <>
    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">square</Typography>
        <Fab size="small" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>

    <Grid spacing={2}>
      <Item>
        <Typography variant="h6">circular</Typography>
        <Fab variant="circular" size="small" color="default">
          <LikeOutlineMd />
        </Fab>
      </Item>
    </Grid>
  </>
);

export const Disabled = () => (
  <Fab size="small" color="default" disabled>
    <LikeOutlineMd />
  </Fab>
);
