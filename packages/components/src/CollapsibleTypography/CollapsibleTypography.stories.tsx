import { type Meta, type StoryObj } from '@storybook/react';

import { CollapsibleTypography } from './CollapsibleTypography';

/**
 * ### [Figma]()
 * ### [Guide]()
 * Компонент даёт возможность скрывать часть текста по строкам, и показывать их при нажатии на кнопку
 */

const meta: Meta<typeof CollapsibleTypography> = {
  title: 'Components/Data Display/CollapsibleTypography',
  component: CollapsibleTypography,
};

export default meta;

type Story = StoryObj<typeof CollapsibleTypography>;

const EXAMPLE_TEXT = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
fuga tenetur ex vel quidem et sed dolor veritatis animi tempora neque
eveniet at natus, praesentium nisi, culpa hic iure. Lorem ipsum dolor sit,
amet consectetur adipisicing elit. Iusto doloremque fuga tenetur ex vel
quidem et sed dolor veritatis animi tempora neque eveniet at natus,
praesentium nisi, culpa hic iure.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
fuga tenetur ex vel quidem et sed dolor veritatis animi tempora neque
eveniet at natus, praesentium nisi, culpa hic iure. Lorem ipsum dolor sit,
amet consectetur adipisicing elit. Iusto doloremque fuga tenetur ex vel
quidem et sed dolor veritatis animi tempora neque eveniet at natus,
praesentium nisi, culpa hic iure.`;

export const Interaction: Story = {
  args: {
    rowsCount: 1,
    children: EXAMPLE_TEXT,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <CollapsibleTypography>{EXAMPLE_TEXT}</CollapsibleTypography>
    <CollapsibleTypography rowsCount={2}>{EXAMPLE_TEXT}</CollapsibleTypography>
    <CollapsibleTypography rowsCount={7}>{EXAMPLE_TEXT}</CollapsibleTypography>
  </>
);

export const Colors = () => (
  <>
    <CollapsibleTypography color="success">
      {EXAMPLE_TEXT}
    </CollapsibleTypography>
    <CollapsibleTypography color="warning">
      {EXAMPLE_TEXT}
    </CollapsibleTypography>
  </>
);

export const ButtonsText = () => (
  <>
    <CollapsibleTypography textShowButton="Открыть" textHideButton="Закрыть">
      {EXAMPLE_TEXT}
    </CollapsibleTypography>
    <CollapsibleTypography
      textShowButton="Показать скрытый текст"
      textHideButton="Свернуть"
    >
      {EXAMPLE_TEXT}
    </CollapsibleTypography>
  </>
);
