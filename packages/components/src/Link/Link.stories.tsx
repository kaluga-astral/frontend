import { type Meta, type StoryObj } from '@storybook/react';
import { OpenLinkOutlineSm } from '@astral/icons';

import { Link } from './Link';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=20577%3A252079&mode=design&t=4tPFQ3yp7yhE0vZX-1)
 * ### [Guide]()
 */
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Interaction: Story = {
  args: {
    children: 'Link',
    href: '#',
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

export const Example = () => (
  <>
    <Link href="/" startAddon={() => <OpenLinkOutlineSm />}>
      Visited
    </Link>

    <Link href="#">Default</Link>
  </>
);

export const Adornment = () => (
  <>
    <Link href="#1" startAddon={() => <OpenLinkOutlineSm />}>
      Icon-left
    </Link>

    <Link href="#2" endAddon={() => <OpenLinkOutlineSm />}>
      Icon-right
    </Link>
  </>
);
