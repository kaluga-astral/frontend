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
};

export const Contained: Story = {
  render: (args) => (
    <>
      <Button {...args}>Default</Button>
      <Button {...args} loading>
        Loading
      </Button>
      <Button {...args} selected>
        Selected
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
    </>
  ),
};

export const Light: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="light">
        Default
      </Button>
      <Button {...args} variant="light" loading>
        Loading
      </Button>
      <Button {...args} variant="light" selected>
        Selected
      </Button>
      <Button {...args} variant="light" disabled>
        Disabled
      </Button>
    </>
  ),
};

export const Link: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="link">
        Default
      </Button>
      <Button {...args} variant="link" loading>
        Loading
      </Button>
      <Button {...args} variant="link" selected>
        Selected
      </Button>
      <Button {...args} variant="link" disabled>
        Disabled
      </Button>
    </>
  ),
};

export const Text: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="text">
        Default
      </Button>
      <Button {...args} variant="text" loading>
        Loading
      </Button>
      <Button {...args} variant="text" selected>
        Selected
      </Button>
      <Button {...args} variant="text" disabled>
        Disabled
      </Button>
    </>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <>
      <Button {...args} startIcon={<LikeOutlineMd />} variant="light">
        Before
      </Button>
      <Button {...args} endIcon={<DialogOutlineMd />} variant="light">
        After
      </Button>
      <Button
        {...args}
        startIcon={<DialogOutlineMd />}
        endIcon={<ChevronDOutlineMd />}
        variant="light"
      >
        Before & After
      </Button>
      <Button
        {...args}
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
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <>
      <Button {...args} size="medium" variant="light">
        Medium
      </Button>
      <Button {...args} size="large" variant="light">
        Large
      </Button>
    </>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <>
      <Button {...args} color="error" variant="contained">
        Error
      </Button>
      <Button {...args} color="success" variant="contained">
        Success
      </Button>
      <Button {...args} color="warning" variant="contained">
        Warning
      </Button>
      <Button {...args} color="error" variant="light">
        Error
      </Button>
      <Button {...args} color="success" variant="light">
        Success
      </Button>
      <Button {...args} color="warning" variant="light">
        Warning
      </Button>
    </>
  ),
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
