import { Brand, createTheme } from '@astral/ui';
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

export const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });
