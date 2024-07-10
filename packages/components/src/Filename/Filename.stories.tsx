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

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 10px;
`;

export const LongFileName = () => {
  return (
    <Wrapper>
      <Filename>
        Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
        25.04.2024.pdf
      </Filename>
    </Wrapper>
  );
};

export const ShortFileName = () => {
  return (
    <Wrapper>
      <Filename>Приложение №10.pdf</Filename>
    </Wrapper>
  );
};

export const ComplexFileExtension = () => {
  return (
    <div>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.dist
        </Filename>
      </Wrapper>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.tar.xz
        </Filename>
      </Wrapper>
      <Wrapper>
        <Filename>
          Версия 1.0 Приложение No 10к Договору подряда No КрФ/15331/24 от
          25.04.2024.xml.orig
        </Filename>
      </Wrapper>
    </div>
  );
};
