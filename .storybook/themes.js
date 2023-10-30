import { createTheme, Brand } from '../packages/components/src';
import UbuntuBoldWoff from '@astral/ui/fonts/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/ui/fonts/UbuntuBold.woff2';
import UbuntuLightWoff from '@astral/ui/fonts/UbuntuLight.woff';
import UbuntuLightWoff2 from '@astral/ui/fonts/UbuntuLight.woff2';
import UbuntuRegularWoff from '@astral/ui/fonts/UbuntuRegular.woff';
import UbuntuRegularWoff2 from '@astral/ui/fonts/UbuntuRegular.woff2';
import UbuntuMediumWoff from '@astral/ui/fonts/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '@astral/ui/fonts/UbuntuMedium.woff2';

const fontsUrls = {
  bold: {
    woff: UbuntuBoldWoff,
    woff2: UbuntuBoldWoff2,
  },
  light: {
    woff: UbuntuLightWoff,
    woff2: UbuntuLightWoff2,
  },
  regular: {
    woff: UbuntuRegularWoff,
    woff2: UbuntuRegularWoff2,
  },
  medium: {
    woff: UbuntuMediumWoff,
    woff2: UbuntuMediumWoff2,
  },
};

export const themes = [
  {
    name: 'Base theme',
    theme: createTheme({ brand: Brand.DEFAULT, fontsUrls }),
  },
  {
    name: 'Astral.edo',
    theme: createTheme({ brand: Brand.EDO, fontsUrls }),
  },
  {
    name: 'Astral.kedo',
    theme: createTheme({ brand: Brand.KEDO, fontsUrls }),
  },
  {
    name: 'Astral.lkp',
    theme: createTheme({ brand: Brand.LKP, fontsUrls }),
  },
  {
    name: 'Astral.sign',
    theme: createTheme({ brand: Brand.SIGN, fontsUrls }),
  },
  {
    name: 'Astral.ao5',
    theme: createTheme({ brand: Brand.AO5, fontsUrls }),
  },
  {
    name: 'Astral.ofd',
    theme: createTheme({ brand: Brand.OFD, fontsUrls }),
  },
  {
    name: 'Astral.POA',
    theme: createTheme({ brand: Brand.POA, fontsUrls }),
  },
  {
    name: 'Astral.RSS',
    theme: createTheme({ brand: Brand.RSS, fontsUrls }),
  },
  {
    name: 'Astral.SBER',
    theme: createTheme({ brand: Brand.SBER, fontsUrls }),
  },
  {
    name: 'Astral.LK1C',
    theme: createTheme({ brand: Brand.LK1C, fontsUrls }),
  },
];

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme;
};
