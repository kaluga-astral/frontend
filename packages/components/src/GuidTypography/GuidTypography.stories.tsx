import { type Meta, type StoryObj } from '@storybook/react';

import { CopyTypography } from '../CopyTypography';

import { GuidTypography } from './GuidTypography';

/**
 * ### [Figma]()
 * ### [Guide]()
 * Компонент необходимо использовать для отображения guid.
 */

const meta: Meta<typeof GuidTypography> = {
  title: 'Components/Data Display/GuidTypography',
  component: GuidTypography,
};

export default meta;

type Story = StoryObj<typeof GuidTypography>;

export const Interaction: Story = {
  args: {
    children: 'e2f54c10-2ac9-4872-b2ce-1f86eb1c6d2d',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return <GuidTypography>e2f54c10-2ac9-4872-b2ce-1f86eb1c6d2d</GuidTypography>;
};

/**
 * Для возможности копирования `guid` необходимо использовать CopyTypography и пропс `copyText`
 */

export const CopyGuid = () => {
  const guid = 'e2f54c10-2ac9-4872-b2ce-1f86eb1c6d2d';

  return (
    <CopyTypography copyText={guid} isShowCopyText>
      <GuidTypography>{guid}</GuidTypography>
    </CopyTypography>
  );
};
