import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { styled } from '../styles';

import { CopyTypography } from './CopyTypography';

/**
 * ### [Figma]()
 * ### [Guide]()
 * Компонент является оберткой для других компонентов и позволяет скопировать текст в буфер обмена
 */

const meta: Meta<typeof CopyTypography> = {
  title: 'Components/Data Display/CopyTypography',
  component: CopyTypography,
};

export default meta;

type Story = StoryObj<typeof CopyTypography>;

export const Interaction: Story = {
  args: {
    children: <Typography>Швецова М. Д.</Typography>,
    copyText: 'Швецова М. Д.',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Example = () => {
  return (
    <CopyTypography copyText="Швецова М. Д.">
      <Typography>Швецова М. Д.</Typography>
    </CopyTypography>
  );
};

/**
 * prop `copyPosition` определяет расположение иконки(справа/слева от текста). По умолчанию справа
 */
export const CopyPosition = () => {
  return (
    <Wrapper>
      <CopyTypography>Швецова М. Д.</CopyTypography>
      <CopyTypography copyPosition="left">Швецова М. Д.</CopyTypography>
    </Wrapper>
  );
};

/**
 * prop `copyText` указывает какой текст необходимо скопировать в буфер обмена
 * Необходим для копирования текста вложенных компонентов
 */
export const CopyText = () => {
  return (
    <Wrapper>
      <CopyTypography copyText="Швецова Мария Дмитриевна">
        Швецова М. Д.
      </CopyTypography>
      <CopyTypography copyText="Швецова М. Д.">
        <Typography>Швецова М. Д.</Typography>
      </CopyTypography>
    </Wrapper>
  );
};
