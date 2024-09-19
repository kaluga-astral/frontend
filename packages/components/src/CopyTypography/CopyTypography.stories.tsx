import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { styled } from '../styles';
import { OverflowTypography } from '../OverflowTypography';

import { CopyTypography } from './CopyTypography';

/**
 * ### [Figma]()
 * ### [Guide]()
 * Компонент позволяет скопировать содержимое в буфер обмена
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

const OverflowWrapper = styled.div`
  width: 150px;
`;

export const Example = () => {
  return <CopyTypography>Швецова М. Д.</CopyTypography>;
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
 * prop `copyText` указывает какой текст необходимо скопировать в буфер обмена.
 * Необходим для копирования текста вложенных компонентов или когда копируемое содержимое
 * должно отличаться от представления.
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

/**
 * prop `isShowCopyText` показывает в тултипе текст, который будет скопирован.
 * Необходимо отключать тултип у вложенных компонентов, при их наличии, для избежания их наложения
 */
export const IsShowCopyText = () => {
  return (
    <OverflowWrapper>
      <CopyTypography copyText="Швецова Мария Дмитриевна" isShowCopyText>
        <OverflowTypography tooltipProps={{ title: undefined }}>
          Швецова Мария Дмитриевна
        </OverflowTypography>
      </CopyTypography>
    </OverflowWrapper>
  );
};
