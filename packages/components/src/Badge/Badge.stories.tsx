import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Grid } from '../Grid';

import { Badge } from './Badge';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=284-7165&mode=design&t=MnsiqzDLWSYbhRCJ-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Interaction: Story = {
  args: {
    color: 'error',
    badgeContent: 999,
    variant: 'standard',
    invisible: false,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <Badge color="error" badgeContent={999}>
    <Button variant="contained" color="primary">
      Badge
    </Button>
  </Badge>
);

export const Variants = () => (
  <Badge color="error" variant="dot" invisible={false}>
    <Button variant="contained" color="primary">
      Dot
    </Button>
  </Badge>
);

export const Invisible = () => {
  const [invisible, setInvisible] = useState(true);

  const handleChange = () => {
    setInvisible((prev) => !prev);
  };

  return (
    <Badge
      color="error"
      badgeContent={999}
      variant="standard"
      invisible={invisible}
    >
      <Button onClick={handleChange} variant="contained" color="primary">
        {invisible ? 'Показать' : 'Скрыть'}
      </Button>
    </Badge>
  );
};

export const AnchorOrigin = () => {
  return (
    <Grid spacing={10} columns={2}>
      <Badge color="grey" badgeContent={4}>
        <Button>Primary</Button>
      </Badge>
      <Badge
        color="grey"
        badgeContent={4}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <Button>Primary</Button>
      </Badge>
      <Badge
        color="grey"
        badgeContent={4}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Button>Primary</Button>
      </Badge>
      <Badge
        color="grey"
        badgeContent={4}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Button>Primary</Button>
      </Badge>
    </Grid>
  );
};

export const VariantsColor = () => {
  return (
    <Grid spacing={10} columns={6}>
      <Badge color="grey" badgeContent={999} variant="standard">
        <Button fullWidth variant="light" color="primary">
          grey
        </Button>
      </Badge>
      <Badge color="primary" badgeContent={999} variant="standard">
        <Button variant="light" color="primary">
          primary
        </Button>
      </Badge>
      <Badge color="error" badgeContent={999} variant="standard">
        <Button fullWidth variant="light" color="error">
          error
        </Button>
      </Badge>
      <Badge color="success" badgeContent={999} variant="standard">
        <Button fullWidth variant="light" color="success">
          success
        </Button>
      </Badge>
      <Badge color="warning" badgeContent={999} variant="standard">
        <Button fullWidth variant="light" color="warning">
          warning
        </Button>
      </Badge>
      <Badge color="white" badgeContent={999} variant="standard">
        <Button fullWidth variant="contained" color="primary">
          white
        </Button>
      </Badge>
      <Badge
        color="grey"
        badgeContent={999}
        variant="standard"
        variantColor="light"
      >
        <Button fullWidth variant="contained" color="primary">
          grey
        </Button>
      </Badge>
      <Badge
        color="primary"
        badgeContent={999}
        variant="standard"
        variantColor="light"
      >
        <Button fullWidth variant="contained" color="primary">
          primary
        </Button>
      </Badge>
      <Badge
        color="error"
        badgeContent={999}
        variant="standard"
        variantColor="light"
      >
        <Button fullWidth variant="contained" color="error">
          error
        </Button>
      </Badge>
      <Badge
        color="success"
        badgeContent={999}
        variant="standard"
        variantColor="light"
      >
        <Button fullWidth variant="contained" color="success">
          success
        </Button>
      </Badge>
      <Badge
        color="warning"
        badgeContent={999}
        variant="standard"
        variantColor="light"
      >
        <Button fullWidth variant="contained" color="warning">
          warning
        </Button>
      </Badge>
    </Grid>
  );
};
