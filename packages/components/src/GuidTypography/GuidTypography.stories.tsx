import { type Meta, type StoryObj } from '@storybook/react';

import { CopyTypography } from '../CopyTypography';
import { styled } from '../styles';

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

const Wrapper = styled.div`
  width: 100px;
`;

export const Example = () => {
  return (
    <Wrapper>
      <GuidTypography>e2f54c10-2ac9-4872-b2ce-1f86eb1c6d2d</GuidTypography>
    </Wrapper>
  );
};

/**
 * Для возможности копирования `guid` необходимо использовать CopyTypography и пропс `copyText`.
 * Необходимо отключать тултип через `tooltipProps` для избежания их наложения.
 */

export const CopyGuid = () => {
  const guid = 'e2f54c10-2ac9-4872-b2ce-1f86eb1c6d2d';

  return (
    <CopyTypography copyText={guid} isShowCopyText>
      <Wrapper>
        <GuidTypography tooltipProps={{ title: undefined }}>
          {guid}
        </GuidTypography>
      </Wrapper>
    </CopyTypography>
  );
};
