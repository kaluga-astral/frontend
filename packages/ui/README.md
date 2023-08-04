# @astral/ui

Пакет содержит все необходимые фичи для построения интерфейсов приложений Астрал.Софт.

# [Documentation](https://main--61baeff6f06230003a88ef8a.chromatic.com/)
[Storybook](https://main--61baeff6f06230003a88ef8a.chromatic.com/) содержит документацию компонентов ```@astral/ui```.

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
};
```

Данный prop содержит ссылки на img, которые используются в компонентах ui-kit.

Breaking changes:
- Компонент DataGrid теперь не инкапсулирует инлайновую svg для отображения NoData статуса. Для того, чтобы изображение появилось необходимо в ConfigProvider указать prop ```imagesMap.noDataImgSrc```
- Компонент ContentState больше не требует required prop ```errorState.imgSrc```. Ссылка на изображение берется из ConfigProvider

```tsx
import noDataImgSrc from '@astral/ui/illustrations/no-data.svg';
import errorImgSrc from 'static/erorr-inmg.png';

const App = () => {
  return (
    <ConfigProvider
      imagesMap={{ defaultErrorImgSrc: errorImgSrc, noDataImgSrc }}
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

Актуальные props находяться [здесь](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--showcase).

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

И внести соответвующие правки в конфиг сборщика для того, чтобы @astral/ui/fonts обрабатывались как шрифты.

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

И внести соответвующие правки в конфиг сборщика для того, чтобы @astral/ui/fonts обрабатывались как шрифты.

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
