import { LikeOutlineMd } from '@astral/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Grid } from '../Grid';
import { styled } from '../styles';

import { Fab } from './Fab';

/**
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
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

const ColorsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }
`;

export const Example = () => (
  <Fab size="small" color="default">
    <LikeOutlineMd />
  </Fab>
);

export const Sizes = () => (
  <>
    <Grid spacing={2}>
      <Typography variant="h6">small</Typography>
      <Fab size="small" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">medium</Typography>
      <Fab size="medium" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">large</Typography>
      <Fab size="large" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>
  </>
);

export const Colors = () => (
  <ColorsContainer>
    <Grid spacing={2}>
      <Typography variant="h6">default</Typography>
      <Fab size="small" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">primary</Typography>
      <Fab size="small" color="primary">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">success</Typography>
      <Fab size="small" color="success">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">warning</Typography>
      <Fab size="small" color="warning">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">error</Typography>
      <Fab size="small" color="error">
        <LikeOutlineMd />
      </Fab>
    </Grid>
  </ColorsContainer>
);

export const Variants = () => (
  <>
    <Grid spacing={2}>
      <Typography variant="h6">square</Typography>
      <Fab size="small" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>

    <Grid spacing={2}>
      <Typography variant="h6">circular</Typography>
      <Fab variant="circular" size="small" color="default">
        <LikeOutlineMd />
      </Fab>
    </Grid>
  </>
);

export const Disabled = () => (
  <Fab size="small" color="default" disabled>
    <LikeOutlineMd />
  </Fab>
);
