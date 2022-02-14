import { createTheme, Brand } from '@astral/ui'
import UbuntuBoldWoff from '@astral/fonts/src/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/fonts/src/UbuntuBold.woff2';
import UbuntuLightWoff from '@astral/fonts/src/UbuntuLight.woff';
import UbuntuLightWoff2 from '@astral/fonts/src/UbuntuLight.woff2';
import UbuntuRegularWoff from '@astral/fonts/src/UbuntuRegular.woff';
import UbuntuRegularWoff2 from '@astral/fonts/src/UbuntuRegular.woff2';
import UbuntuMediumWoff from '@astral/fonts/src/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '@astral/fonts/src/UbuntuMedium.woff2';

const fontsUrls = {
  bold: {
    woff: UbuntuBoldWoff,
    woff2: UbuntuBoldWoff2
  },
  light: {
    woff: UbuntuLightWoff,
    woff2: UbuntuLightWoff2
  },
  regular: {
    woff: UbuntuRegularWoff,
    woff2: UbuntuRegularWoff2
  },
  medium: {
    woff: UbuntuMediumWoff,
    woff2: UbuntuMediumWoff2
  }
};

export const themes = [
  {
    name: 'Base theme',
    theme: createTheme({ brand: Brand.DEFAULT, fontsUrls })
  },
  {
    name: 'Astral.edo',
    theme: createTheme({ brand: Brand.EDO, fontsUrls })
  },
  {
    name: 'Astral.lkp',
    theme: createTheme({ brand: Brand.LKP, fontsUrls })
  },
  {
    name: 'Astral.sign',
    theme: createTheme({ brand: Brand.SIGN, fontsUrls })
  },
  {
    name: 'Astral.ao5',
    theme: createTheme({ brand: Brand.AO5, fontsUrls })
  },
  {
    name: 'Astral.ofd',
    theme: createTheme({ brand: Brand.OFD, fontsUrls })
  },
];

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
};
