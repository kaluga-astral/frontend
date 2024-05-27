# @astral/ui

```@astral/ui``` - это UI-KIT, на основе которого строятся интерфейсы в Астрал-Софт.

```@astral/ui``` включает в себя пакеты:
-  ```@astral/components```
-  ```@astral/form```
-  ```@astral/icons```

```@astral/ui/next``` - компоненты, для работы которых необходим react >= 18 версии

# Table of contents
- [Storybook](#storybook)
- [Introduction](#introduction)
- [Playground](#playground)
- [Getting started with Next.js](#getting-started-with-nextjs)
- [Migration guide](#migration-guide)
- [Troubleshooting](#troubleshooting)
  - [Медленно выполняются vitest тесты при импорте пакета](#медленно-выполняются-vitest-тесты-при-импорте-пакета)

# [Storybook](https://main--61baeff6f06230003a88ef8a.chromatic.com/)
[Storybook](https://main--61baeff6f06230003a88ef8a.chromatic.com/) содержит документацию компонентов ```@astral/ui```.

# Introduction
```@astral/ui``` - это единая точка входа для всех основных составных частей UI-KIT.

```@astral/ui``` экспортирует:
- все содержимое пакета ```@astral/components```
- все содержимое пакета ```@astral/form```
- все содержимое пакета ```@astral/icons```
- illustrations - иллюстрации, которые необходимо использовать в проекте
- fonts - шрифты, которые необходимо использовать в проекте

## @astral/components
```@astral/components``` - пакет, содержащий основу для построения интерфейсов: react-компоненты, хуки, utils.

## @astral/form
```@astral/form``` - пакет, содержащий обертки ```@astral/components``` для интеграции с react-hook-form.

## @astral/icons
```@astral/icons``` - пакет, содержащий иконки, доступные в дизайн-системе.

# Playground
Доступен [Codesandbox](https://codesandbox.io/p/sandbox/sleepy-chatterjee-8mv9ml?file=%2Fsrc%2FPlayground%2FPlayground.tsx%3A12%2C1) для проверки функционала.

# Getting started with Next.js

## Example
Пример использования и интеграции ```@astral/ui``` находится [здесь](https://github.com/kaluga-astral/nextjs-boilerplate).

## Installation

```shell
npm --save @astral/ui
```

## global.d.ts

```ts
/// <reference types="@astral/ui/declarations" />

```

## next.config

```js
const nextConfig = {
  ...
  transpilePackages: [
    '@astral/ui',
    '@astral/icons',
    '@astral/components',
    '@astral/form',
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
    });

    return config;
  },
  ...
};

module.exports = nextConfig;
```

## _app.tsx

```tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as monitoringErrorService from '@sentry/nextjs';
import {
  Brand,
  ConfigProvider,
  NotificationContainer,
  StylesCacheProvider,
  ThemeProvider,
  createTheme,
} from '@astral/ui';
import { createStylesCache as createStylesServerCache } from '@astral/ui/server';
import UbuntuBoldWoff from '@astral/ui/fonts/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/ui/fonts/UbuntuBold.woff2';
import UbuntuLightWoff from '@astral/ui/fonts/UbuntuLight.woff';
import UbuntuLightWoff2 from '@astral/ui/fonts/UbuntuLight.woff2';
import UbuntuRegularWoff from '@astral/ui/fonts/UbuntuRegular.woff';
import UbuntuRegularWoff2 from '@astral/ui/fonts/UbuntuRegular.woff2';
import UbuntuMediumWoff from '@astral/ui/fonts/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '@astral/ui/fonts/UbuntuMedium.woff2';

import { MainLayout } from '@example/modules/LayoutModule';

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

const stylesCache = createStylesServerCache({ key: 'next' });

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Astral.Example</title>
      </Head>
      <StylesCacheProvider value={stylesCache}>
        <ConfigProvider
          captureException={monitoringErrorService.captureException}
        >
          <ThemeProvider theme={theme}>
            <NotificationContainer />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </ConfigProvider>
      </StylesCacheProvider>
    </>
  );
};

export default App;
```

# Migration guide

## 2.0.0 -> 3.0.0

### ConfigProvider

В ConfigProvider добавлен prop ```imagesMap```:
```ts
type ImagesMap = {
  /**
   * @description изображение при отсутствии данных (используется в DataGrid)
   */
  noDataImgSrc: string;
  /**
   * @description изображение при ошибке (используется в ContentState)
   */
  defaultErrorImgSrc: string;
  /**
   * @description изображение при ошибке при обновлении продукта (используется в ContentState/ErrorBoundary)
   */
  outdatedReleaseErrorImgSrc: string;
};
```

Данный prop содержит ссылки на img, которые используются в компонентах ui-kit.

Breaking changes:
- Компонент DataGrid теперь не инкапсулирует инлайновую svg для отображения NoData статуса. Для того, чтобы изображение появилось необходимо в ConfigProvider указать prop ```imagesMap.noDataImgSrc```
- Компонент ContentState больше не требует required prop ```errorState.imgSrc```. Ссылка на изображение берется из ConfigProvider
- Компонент ErrorBoundary перехватывает ошибку устаревших билдов и корректно её обрабатывает, для того, чтобы отобразилось изображение, необходимо в ConfigProvider указать prop ```images.outdatedReleaseErrorImgSrc``` 
```tsx
import noDataImgSrc from '@astral/ui/illustrations/no-data.svg';
import outdatedReleaseErrorImgSrc from '@astral/ui/illustrations/outdated-release.svg';

/* cspell:disable-next-line */
import errorImgSrc from 'static/erorr-inmg.png';

const App = () => {
  return (
      <ConfigProvider
          imagesMap={{
              defaultErrorImgSrc: errorImgSrc,
              noDataImgSrc,
              outdatedReleaseErrorImgSrc,
          }}
      >
          <ThemeProvider>
              <Layout />
          </ThemeProvider>
      </ConfigProvider>
  );
};
```

### Typography

Breaking changes:
- Удалены пропсы, которые являлись css правилами (margin, border, mr...)
- Prop ```color``` принимает только ```string```. Удалена возможность использовать для color функцию

Актуальные props находятся [здесь](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--showcase).

### Grid

Grid из @astral/ui v2 был переименован в LegacyGrid, в четвертой версии @astral/ui данный компонент будет удален.

Сигнатуру нового Grid вы можете увидеть в [storybook](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/story/components-grid--default).

### Form

Breaking changes:
- Была удалена дефолтная валидация для компонентов: ```FormDatePicker```, ```FormMobilePhoneField```
- Для филдов формы был удален props ```rules```. Для валидации форм используйте валидацию по схеме с помощью библиотеки [@astral/validations](https://www.npmjs.com/package/@astral/validations)

## 1.0.0 -> 2.0.0

### Deps
Теперь пакет ```@astral/ui``` аккумулирует и реэкспортит пакеты:
- ```@astral/fonts```
- ```@astral/illustrations```
- ```@astral/icons```
- ```@astral/form```
- ```@astral/components```

Необходимо заменить зависимости:
```json
{
  ...
  "@astral/icons": "^1.19.4",
  "@astral/form": "^1.19.4",
  "@astral/fonts": "^1.19.4",
  "@astral/ui": "^1.19.4",
  ...
}
```

На:
```json
{
  ...
  "@astral/ui": "^1.19.4",
  ...
}
```

### global.d.ts

Заменить файл ```global.d.ts```: <br>
```global.d.ts```
```ts
/// <reference types="@astral/ui/declaration/emotion" />
/// <reference types="@astral/ui/declaration/mui-material" />
/// <reference types="@emotion/react/types/css-prop" />
```

На: <br>
```global.d.ts```
```ts
/// <reference types="@astral/ui/declarations" />
```

### fonts
Пакет ```@astral/fonts``` включен в пакет ```@astral/ui```.

Необходимо заменить импорты:
```ts
import UbuntuBoldWoff from '@astral/fonts/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/fonts/UbuntuBold.woff2';
```

На:
```ts
import UbuntuBoldWoff from '@astral/ui/fonts/UbuntuBold.woff';
import UbuntuBoldWoff2 from '@astral/ui/fonts/UbuntuBold.woff2';
```

И внести соответствующие правки в конфиг сборщика для того, чтобы @astral/ui/fonts обрабатывались как шрифты.

### illustrations
Пакет ```@astral/illustrations``` включен в пакет ```@astral/ui```.

Необходимо заменить импорты:
```ts
import certImgSrc from '@astral/illustrations/cert.svg';
```

На:
```ts
import certImgSrc from '@astral/ui/illustrations/cert.svg';
```

И внести соответствующие правки в конфиг сборщика для того, чтобы @astral/ui/fonts обрабатывались как шрифты.

### @astral/form 
Все элементы пакета ```@astral/form``` получили префиксы form.
Весь ```@astral/form``` теперь экспортируется из ```@astral/ui```.

```ts
import { useForm, useFormWatch, useFormController } from '@astral/ui';
```

### @astral/icons
Весь ```@astral/icons``` теперь экспортируется из ```@astral/ui```.

```ts
import { QuitOutlineMd } from '@astral/ui';
```

### DatePickerProvider
Компонент был удален, используйте ConfigProvider.

# Troubleshooting

## Медленно выполняются vitest тесты при импорте пакета

Для того чтобы ускорить выполнение vitest тестов, необходимо добавить следующий параметр `conditions` в `vitest.config.ts`:

```ts
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    conditions: ['vitest'],
  },
  test: {
    environment: 'jsdom',
  },
});
```

В пакете есть специальное свойство `exports.vitest`, оптимизирующее парсинг пакета для vitest.
Исходна проблема: vitest плохо работает с barrel files.
