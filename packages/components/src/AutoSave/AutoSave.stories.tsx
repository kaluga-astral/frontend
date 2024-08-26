import { type Meta, type StoryObj } from '@storybook/react';

import { AutoSave } from './AutoSave';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=28356-409&t=YR0epNNIklP0h3Fu-0)
 * ### [Guide]()
 */

const meta: Meta<typeof AutoSave> = {
  title: 'Components/AutoSave',
  component: AutoSave,
};

export default meta;

type Story = StoryObj<typeof AutoSave>;

export const Interaction: Story = {
  args: {},
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AutoSave onRetry={() => {}} errorMsg="123" />
      <AutoSave onRetry={() => {}} errorMsg="123" state="isLoading" />
      <AutoSave onRetry={() => {}} errorMsg="123" state="isError" />
      <AutoSave onRetry={() => {}} errorMsg="123" state="isSuccess" />
    </div>
  );
};
