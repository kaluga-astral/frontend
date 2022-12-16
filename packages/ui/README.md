# @astral/ui

Пакет содержит все необходимые фичи для построения интерфейсов приложений Астрал.Софт.

# Migration guide

## 1.0.0 -> 2.0.0

## Deps
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
import { useForm } from '@astral/ui';
```

### @astral/icons
Все элементы пакета ```@astral/icons``` получили префиксы form.
Весь ```@astral/icons``` теперь экспортируется из ```@astral/ui```.

```ts
import { QuitOutlineMd } from '@astral/ui';
```
