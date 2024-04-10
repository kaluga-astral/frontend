import { writeFile } from 'node:fs/promises';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { createTheme } from '../baseTheme';
import { Brand } from '../../constants';

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
// const theme = createThemeEssential({ brand: Brand.DEFAULT, fontsUrls });

(async () => {
  const json = JSON.stringify(theme);

  const cwd = process.cwd();

  const relPath = cwd.endsWith('packages/components')
    ? './src/theme/baseTheme/snapshot.json'
    : './packages/components/src/theme/baseTheme/snapshot.json';

  const rl = createInterface({ input, output });

  const answer = await rl.question(
    `Snapshot will be written to ${relPath}.\n y / N: `,
  );

  rl.close();

  if (!answer.toLowerCase().startsWith('y')) {
    console.log('Cancelled');
  }

  writeFile(relPath, json);
})();
