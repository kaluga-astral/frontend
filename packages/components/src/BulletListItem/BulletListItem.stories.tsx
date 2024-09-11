import { type Meta, type StoryObj } from '@storybook/react';
import styled from '@emotion/styled';

import { OverflowTypography } from '../OverflowTypography';
import { BulletList } from '../BulletList';

import { BulletListItem } from './BulletListItem';

const meta: Meta<typeof BulletListItem> = {
  title: 'Components/Data Display/BulletList/BulletListItem',
  component: BulletListItem,
};

export default meta;

type Story = StoryObj<typeof BulletList>;

export const Interaction: Story = {
  args: {
    children: <>Текст 1</>,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Container = styled('div')`
  width: 150px;
`;

export const Example = () => {
  return (
    <BulletList>
      <Container>
        <BulletListItem>Текст 1</BulletListItem>
        <BulletListItem>
          Длинный текст для примера переноса строки
        </BulletListItem>
        <BulletListItem noWrap>Текст без переноса</BulletListItem>
        <BulletListItem noWrap component={OverflowTypography}>
          Тултип для длинного текста
        </BulletListItem>
        <BulletListItem>Текст 2</BulletListItem>
      </Container>
    </BulletList>
  );
};
