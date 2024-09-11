import { type Meta, type StoryObj } from '@storybook/react';
import styled from '@emotion/styled';

import { BulletListItem } from '../BulletListItem';
import { OverflowTypography } from '../OverflowTypography';

import { BulletList } from './BulletList';

const meta: Meta<typeof BulletList> = {
  title: 'Components/Data Display/BulletList',
  component: BulletList,
};

export default meta;

type Story = StoryObj<typeof BulletList>;

export const Interaction: Story = {
  args: {
    children: (
      <>
        <BulletListItem>Текст 1</BulletListItem>
        <BulletListItem>Текст 2</BulletListItem>
      </>
    ),
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
