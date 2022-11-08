import UbuntuBoldWoff from '../../packages/fonts/src/UbuntuBold.woff';
import UbuntuBoldWoff2 from '../../packages/fonts/src/UbuntuBold.woff2';
import UbuntuLightWoff from '../../packages/fonts/src/UbuntuLight.woff';
import UbuntuLightWoff2 from '../../packages/fonts/src/UbuntuLight.woff2';
import UbuntuRegularWoff from '../../packages/fonts/src/UbuntuRegular.woff';
import UbuntuRegularWoff2 from '../../packages/fonts/src/UbuntuRegular.woff2';
import UbuntuMediumWoff from '../../packages/fonts/src/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '../../packages/fonts/src/UbuntuMedium.woff2';
import { Brand, createTheme } from '../../packages/ui/src';

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
