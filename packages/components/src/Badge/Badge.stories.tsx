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
    <Grid container direction="column" columnSpacing={3}>
      <Badge
        color="error"
        badgeContent={999}
        variant="standard"
        invisible={invisible}
      >
        <Button variant="contained" color="primary">
          Badge
        </Button>
      </Badge>

      <Button onClick={handleChange} variant="light" color="primary">
        {invisible ? 'Показать' : 'Скрыть'}
      </Button>
    </Grid>
  );
};
