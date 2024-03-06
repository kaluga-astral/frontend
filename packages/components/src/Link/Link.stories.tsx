import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { Link } from './Link';

/**
 * Link - универсальная ссылка.
 *
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
    <Typography>
      Для начала работы необходимо:
      <br />
      <ul>
        <li>
          Подключить{' '}
          <Link href="#1" withAdornment="start">
            Telegram
          </Link>
        </li>
        <li>
          Выпустить сертификат <Link href="#2">УНЭП</Link>
        </li>
        <li>
          <Link href="/">Госключ</Link> для подписания документов
        </li>
      </ul>
    </Typography>
  </>
);

export const Adornment = () => (
  <>
    <Link href="#1" withAdornment="start">
      Icon-start
    </Link>

    <Link href="#2" withAdornment="end">
      Icon-end
    </Link>
  </>
);
