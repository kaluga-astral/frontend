import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Rating } from './Rating';

/**
 * Рейтинг дает представление о мнении других людей и позволяет пользователю поставить собственную оценку.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=21329-59965&mode=design&t=iZHAqHilvNb41N6m-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Interaction: Story = {
  args: {
    value: 3,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [value, setValue] = useState<number | null>(null);

  return <Rating value={value} onChange={setValue} />;
};

/**
 * Prop ```isVisibleHints``` включает отображение подсказок в виде тултипа, при наведении на элемент
 */
export const VisibleHints = () => {
  const [value, setValue] = useState<number | null>(null);

  return <Rating value={value} isVisibleHints onChange={setValue} />;
};

/**
 * Prop ```hints``` предназначен для замены дефолтных подсказок на кастомные
 */
export const CustomHints = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Rating
      value={value}
      isVisibleHints
      hints={[
        'Очень сложно',
        'Сложно',
        'Справился, но были трудности',
        'Достаточно просто',
        'Очень легко',
      ]}
      onChange={setValue}
    />
  );
};
