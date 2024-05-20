import { type Meta } from '@storybook/react';

import { Brand, createTheme } from '../theme';

import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'ThemeProvider',
  component: ThemeProvider,

  tags: ['!autodocs'],
};

export default meta;

export const Example = () => {
  const fontsUrls = {
    bold: {
      woff: '',
      woff2: '',
    },
    regular: {
      woff: '',
      woff2: '',
    },
    medium: {
      woff: '',
      woff2: '',
    },
    light: {
      woff: '',
      woff2: '',
    },
  };

  const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });

  return (
    <ThemeProvider theme={theme}>
      <main>Для просмотра примера зайди во вкладку docs</main>
    </ThemeProvider>
  );
};
