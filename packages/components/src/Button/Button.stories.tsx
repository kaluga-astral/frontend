import { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@mui/material';
import {
  ChevronDOutlineMd,
  DialogOutlineMd,
  LikeOutlineMd,
} from '@astral/icons';
import { useEffect, useState } from 'react';

import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { Badge } from '../Badge';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Interaction: Story = {
  args: {
    children: 'Click me',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [loading]);

  const handleClick = () => setLoading(true);

  return (
    <Paper style={{ width: 500 }}>
      <DialogTitle>Изменения не сохранятся</DialogTitle>
      <DialogContent>
        На странице есть несохраненные изменения, которые будут утеряны, если их
        не сохранить.
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button loading={loading} onClick={handleClick}>
          Продолжить
        </Button>
      </DialogActions>
    </Paper>
  );
};

export const Contained = () => (
  <>
    <Button>Default</Button>
    <Button loading>Loading</Button>
    <Button selected>Selected</Button>
    <Button disabled>Disabled</Button>
  </>
);

export const Light = () => (
  <>
    <Button variant="light">Default</Button>
    <Button variant="light" loading>
      Loading
    </Button>
    <Button variant="light" selected>
      Selected
    </Button>
    <Button variant="light" disabled>
      Disabled
    </Button>
  </>
);

export const Link = () => (
  <>
    <Button variant="link">Default</Button>
    <Button variant="link" loading>
      Loading
    </Button>
    <Button variant="link" selected>
      Selected
    </Button>
    <Button variant="link" disabled>
      Disabled
    </Button>
  </>
);

export const Text = () => (
  <>
    <Button variant="text">Default</Button>
    <Button variant="text" loading>
      Loading
    </Button>
    <Button variant="text" selected>
      Selected
    </Button>
    <Button variant="text" disabled>
      Disabled
    </Button>
  </>
);

export const Icons = () => (
  <>
    <Button startIcon={<LikeOutlineMd />} variant="light">
      Before
    </Button>
    <Button endIcon={<DialogOutlineMd />} variant="light">
      After
    </Button>
    <Button
      startIcon={<DialogOutlineMd />}
      endIcon={<ChevronDOutlineMd />}
      variant="light"
    >
      Before & After
    </Button>
    <Button
      variant="light"
      endIcon={
        <Badge
          badgeContent={12}
          color="error"
          children={<span style={{ width: 10 }} />}
          style={{ marginLeft: 2, marginRight: 15 }}
        />
      }
    >
      Badge
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="medium" variant="light">
      Medium
    </Button>
    <Button size="large" variant="light">
      Large
    </Button>
  </>
);

export const Colors = () => (
  <>
    <Button color="error" variant="contained">
      Error
    </Button>
    <Button color="success" variant="contained">
      Success
    </Button>
    <Button color="warning" variant="contained">
      Warning
    </Button>
    <Button color="error" variant="light">
      Error
    </Button>
    <Button color="success" variant="light">
      Success
    </Button>
    <Button color="warning" variant="light">
      Warning
    </Button>
  </>
);
