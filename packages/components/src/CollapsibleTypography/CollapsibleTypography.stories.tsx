import { Meta, StoryObj } from '@storybook/react';

import { CollapsibleTypography } from './CollapsibleTypography';

/**
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof CollapsibleTypography> = {
  title: 'Components/CollapsibleTypography',
  component: CollapsibleTypography,
};

export default meta;

type Story = StoryObj<typeof CollapsibleTypography>;

export const Interaction: Story = {
  args: {
    rowsCount: 1,
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
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
    praesentium nisi, culpa hic iure.`,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <CollapsibleTypography rowsCount={1}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
      fuga tenetur ex vel quidem et sed dolor veritatis animi tempora neque
      eveniet at natus, praesentium nisi, culpa hic iure. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Iusto doloremque fuga tenetur ex vel
      quidem et sed dolor veritatis animi tempora neque eveniet at natus,
      praesentium nisi, culpa hic iure.
    </CollapsibleTypography>
    <CollapsibleTypography rowsCount={2}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
      fuga tenetur ex vel quidem et sed dolor veritatis animi tempora neque
      eveniet at natus, praesentium nisi, culpa hic iure. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Iusto doloremque fuga tenetur ex vel
      quidem et sed dolor veritatis animi tempora neque eveniet at natus,
      praesentium nisi, culpa hic iure.
    </CollapsibleTypography>
    <CollapsibleTypography rowsCount={5}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque
      fuga tenetur ex vel quidem et sed dolor veritatis animi tempora neque
      eveniet at natus, praesentium nisi, culpa hic iure. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Iusto doloremque fuga tenetur ex vel
      quidem et sed dolor veritatis animi tempora neque eveniet at natus,
      praesentium nisi, culpa hic iure.
    </CollapsibleTypography>
  </>
);
