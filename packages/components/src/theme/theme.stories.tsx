import { Meta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactJson from 'react-json-view';

import { Brand } from './constants';
import { createTheme } from './baseTheme';

const fontsUrls = {
  bold: {
    woff: '',
    woff2: '',
  },
  light: {
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
};

/**
 * Объект темы.
 * Используется совместно с [ThemeProvider](/story/components-theme-themeprovider--docs)() и styled.
 */
const meta: Meta = {
  title: 'Components/Theme/ThemeViewer',
};

export default meta;

export const ThemeViewer = () => (
  <ReactJson
    collapsed
    name="theme"
    style={{ width: '100%' }}
    src={createTheme({ brand: Brand.DEFAULT, fontsUrls })}
    theme="monokai"
    displayObjectSize={false}
    displayDataTypes={false}
  />
);
