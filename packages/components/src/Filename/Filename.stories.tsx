import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles/styled';
import { Grid } from '../Grid';

import { Filename } from './Filename';

/**
 * Filename применяется для отображения названий файлов, с автоматической проверкой текстового переполнения
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
      '25.04.2024 г.pdf',
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
      25.04.2024 г.pdf
    </Filename>
  );
};

export const ShortFileName = () => {
  return <Filename>Приложение №10.pdf</Filename>;
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
