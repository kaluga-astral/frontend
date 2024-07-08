import { type Meta, type StoryObj } from '@storybook/react';

import { styled } from '../styles/styled';

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
      '25.04.2024.pdf',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const GridWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 10px;
`;

export const LongFileName = () => {
  return (
    <GridWrapper>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024.pdf
      </Filename>
    </GridWrapper>
  );
};

export const ShortFileName = () => {
  return (
    <GridWrapper>
      <Filename>Приложение №10.pdf</Filename>
    </GridWrapper>
  );
};

export const ComplexFileExtension = () => {
  return (
    <div>
      <GridWrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.dist
        </Filename>
      </GridWrapper>
      <GridWrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.tar.xz
        </Filename>
      </GridWrapper>
      <GridWrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.orig
        </Filename>
      </GridWrapper>
    </div>
  );
};
