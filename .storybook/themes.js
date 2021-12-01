import { createTheme, Brand } from '@astral/ui'

export const themes = [
  {
    name: 'Base theme',
    theme: createTheme(Brand.DEFAULT)
  },
  {
    name: 'Astral.edo',
    theme: createTheme(Brand.EDO)
  },
  {
    name: 'Astral.lkp',
    theme: createTheme(Brand.LKP)
  },
  {
    name: 'Astral.sign',
    theme: createTheme(Brand.SIGN)
  },
  {
    name: 'Astral.ao5',
    theme: createTheme(Brand.AO5)
  },
  {
    name: 'Astral.ofd',
    theme: createTheme(Brand.OFD)
  },
];

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
};
