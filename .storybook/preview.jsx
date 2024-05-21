import { Title, Description, ArgTypes, Stories } from '@storybook/blocks';
/* Временно используется prettier v2, т.к. в более новых версиях prettier метод format асинхронный,
* а transformSource в storybook не поддерживает асинхронные методы*/
import prettier from 'prettier2/standalone';
import prettierTs from 'prettier2/parser-typescript';

import { ThemeProvider, styled } from '../packages/components/src'
import { getTheme, themes } from './themes'

// Все story оборачиваются в grid
const StoryWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  
  ${({theme}) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export default {
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={getTheme(context.globals.theme)}>
        <StoryWrapper>
          <Story {...context} />
        </StoryWrapper>
      </ThemeProvider>
    )
  ],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: themes[0].name,
      toolbar: {
        icon: 'circlehollow',
        items: themes.map((theme) => theme.name),
        showName: true
      }
    }
  },

  parameters: {
    docs: {
      // единый шаблон для генерации mdx
      page: () => (
        <>
          <Title />
          <Description />
          <Stories />
          <Title>API</Title>
          <ArgTypes />
        </>
      ),
      // storybook по-дефолту криво отображает код в source блоках. Здесь вручную подключается prettier для форматирования кода
      transformSource: input =>
        prettier.format(input, {
          parser: 'typescript',
          plugins: [prettierTs],
        }),
    },
  },

  tags: ['autodocs']
};

