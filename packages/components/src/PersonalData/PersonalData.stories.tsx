import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { PersonalData } from './PersonalData';

/**
 * Предназначен для сокрытия персональной информации от трекеров, пример в вебвизоре. Обогащает дочерние элементы специальным цсс классом
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof PersonalData> = {
  title: 'Components/Utils/PersonalData',
  component: PersonalData,
};

export default meta;

type Story = StoryObj<typeof PersonalData>;

export const Interaction: Story = {
  args: {
    children: <div>lorem</div>,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <PersonalData>
    <Typography>lorem</Typography>
  </PersonalData>
);
