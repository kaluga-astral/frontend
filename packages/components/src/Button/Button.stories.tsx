import { type Meta, type StoryObj } from '@storybook/react';
import { Paper } from '@mui/material';
import {
  ChevronDOutlineMd,
  DialogOutlineMd,
  LikeOutlineMd,
} from '@astral/icons';
import { type ReactNode, useEffect, useState } from 'react';

import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { Badge } from '../Badge';
import { Grid } from '../Grid';
import { styled } from '../styles';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Interaction: Story = {
  render: (args) => {
    return <Button {...args}>Click me</Button>;
  },
  args: {},
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

const ButtonsContainer = styled(Grid)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    flex-direction: row;

    width: 150px;
  }
`;

export const Variants = () => (
  <ButtonsContainer columns={4}>
    <Button>Contained</Button>
    <Button variant="light">Light</Button>
    <Button variant="link">Link</Button>
    <Button variant="text">Text</Button>
  </ButtonsContainer>
);

export const Disabled = () => (
  <ButtonsContainer columns={4}>
    <Button disabled>Contained</Button>
    <Button disabled variant="light">
      Light
    </Button>
    <Button disabled variant="link">
      Link
    </Button>
    <Button disabled variant="text">
      Text
    </Button>
  </ButtonsContainer>
);

export const Loading = () => (
  <ButtonsContainer columns={4}>
    <Button loading>Contained</Button>
    <Button loading variant="light">
      Light
    </Button>
    <Button loading variant="link">
      Link
    </Button>
    <Button loading variant="text">
      Text
    </Button>
  </ButtonsContainer>
);

export const Selected = () => (
  <ButtonsContainer columns={4}>
    <Button selected>Contained</Button>
    <Button selected variant="light">
      Light
    </Button>
    <Button selected variant="link">
      Link
    </Button>
    <Button selected variant="text">
      Text
    </Button>
  </ButtonsContainer>
);

export const Icons = () => (
  <ButtonsContainer columns={4}>
    <Button startIcon={<LikeOutlineMd />}>Start Icon</Button>
    <Button endIcon={<DialogOutlineMd />}>End Icon</Button>
    <Button startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
      Start & End
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
  </ButtonsContainer>
);

export const Sizes = () => (
  <ButtonsContainer columns={2}>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </ButtonsContainer>
);

export const Colors = () => (
  <Grid container spacing={3}>
    <ButtonsContainer columns={5}>
      <Button>Primary</Button>
      <Button color="error">Error</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </ButtonsContainer>
    <ButtonsContainer columns={5}>
      <Button variant="light">Primary</Button>
      <Button variant="light" color="error">
        Error
      </Button>
      <Button variant="light" color="success">
        Success
      </Button>
      <Button variant="light" color="warning">
        Warning
      </Button>
      <Button variant="light" color="error">
        Error
      </Button>
    </ButtonsContainer>
  </Grid>
);

const Link = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) => (
  <a href={href} className={className}>
    {children}
  </a>
);

/**
 * Когда необходима ссылка, которая выглядит как кнопка
 */
export const AsLink = () => (
  <>
    <Button href="#">Обычная ссылка</Button>
    <Button href="/" component={Link}>
      Ссылка роутера
    </Button>
  </>
);
