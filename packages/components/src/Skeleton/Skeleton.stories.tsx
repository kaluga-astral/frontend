import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles';
import { Avatar } from '../Avatar';
import { Grid } from '../Grid';

import { Skeleton } from './Skeleton';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=24860-72327&t=6Trj6FxCkm0Da8zt-0)
 * ### [Guide]()
 * Компонент предназначен для отрисовки запасного содержимого в момент загрузки данных
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Interaction: Story = {
  args: {
    variant: 'text',
  },
  parameters: {
    docs: {
      disable: true,
    },
    controls: {
      expanded: true,
    },
    options: {
      showPanel: true,
    },
  },
};

const Container = styled.div`
  width: 240px;
`;

export const Example = () => (
  <>
    <Container>
      <Skeleton />
    </Container>
  </>
);

/**
 * Скелетон имеет несколько вариантов отображения: text, rounded, circular
 */

export const Variants = () => (
  <Container>
    <Grid spacing={4}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Grid>
  </Container>
);

/**
 * Пропс "component" позволяет изменить корневой элемент
 */

export const Component = () => (
  <Container>
    <Skeleton variant="rounded" width={210} height={60} component="div" />
  </Container>
);

/**
 * При наличии children скелетон ориентируется на его размеры
 */

export const WithChildren = () => (
  <Container>
    <Skeleton variant="circular">
      <Avatar />
    </Skeleton>
  </Container>
);
