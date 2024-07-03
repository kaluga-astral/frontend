import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles/styled';
import { Grid } from '../Grid';

import { Filename } from './Filename';

/**
 * Filename аналогичен компоненту [OverflowTypography](/story/components-overflowtypography--docs)
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Filename> = {
  title: 'Components/Filename',
  component: Filename,
};

export default meta;

type Story = StoryObj<typeof Filename>;

export const Interaction: Story = {
  args: {
    children:
      'Версия 1.0Приложение No 10к Договору подряда No КрФ/15331/24 от\n' +
      '25.04.2024 г.txt',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const GridWrapper = styled(Grid)`
  justify-content: center;
`;

export const LongFileName = () => {
  return (
    <Filename>
      Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
      25.04.2024 г.xml.dist
    </Filename>
  );
};

export const ShortFileName = () => {
  return <Filename>Приложение №10.txt</Filename>;
};

export const ComplexFileExtension = () => {
  return (
    <GridWrapper rowSpacing={3}>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024 г.xml.dist
      </Filename>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024 г.tar.xz
      </Filename>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024 г.xml.orig
      </Filename>
    </GridWrapper>
  );
};
