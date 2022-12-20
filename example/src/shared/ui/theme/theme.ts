import { Brand, createTheme } from '@astral/ui';
import UbuntuBoldWoff from '@astral/fonts/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/fonts/UbuntuBold.woff2';
import UbuntuLightWoff from '@astral/fonts/UbuntuLight.woff';
import UbuntuLightWoff2 from '@astral/fonts/UbuntuLight.woff2';
import UbuntuRegularWoff from '@astral/fonts/UbuntuRegular.woff';
import UbuntuRegularWoff2 from '@astral/fonts/UbuntuRegular.woff2';
import UbuntuMediumWoff from '@astral/fonts/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '@astral/fonts/UbuntuMedium.woff2';

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

export const theme = createTheme({ brand: Brand.SIGN, fontsUrls });
