import { createTheme, Brand } from '@astral/ui'
import { ubuntuFonts } from '@astral/kit-font';

export const themes = [
  {
    name: 'Base theme',
    theme: createTheme({ brand: Brand.DEFAULT, fontsUrls: ubuntuFonts })
  },
  {
    name: 'Astral.edo',
    theme: createTheme({ brand: Brand.EDO, fontsUrls: ubuntuFonts })
  },
  {
    name: 'Astral.lkp',
    theme: createTheme({ brand: Brand.LKP, fontsUrls: ubuntuFonts })
  },
  {
    name: 'Astral.sign',
    theme: createTheme({ brand: Brand.SIGN, fontsUrls: ubuntuFonts })
  },
  {
    name: 'Astral.ao5',
    theme: createTheme({ brand: Brand.AO5, fontsUrls: ubuntuFonts })
  },
  {
    name: 'Astral.ofd',
    theme: createTheme({ brand: Brand.OFD, fontsUrls: ubuntuFonts })
  },
];

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
};
