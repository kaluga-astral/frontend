# Table of contents

- [GIT](#git)
- [Формат коммитов и pull requests](#формат-коммитов-и-pull-requests)
- [Авторелизы](#авторелизы)
- [Тестирование](#тестирование)
- [Storybook](#storybook)
  - [Стенды](#стенды)
  - [Шаблоны](#шаблоны)
  - [Как работает](#как-работает)
  - [Как писать stories](#как-писать-stories)
- [Создание новых пакетов](#создание-новых-пакетов)

# GIT

Модель ветвления GIT описана [здесь](https://github.com/kaluga-astral/docs/blob/main/GIT.md).

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

Для enums feat, bug обязательно должен указываться номер задачи в jira.

Формат:
```
${ENUM}(TASK,COMPONENT_NAME|SCOPE): Что было сделано?
```

ENUM:
- feat - добавлена новая фича. Для этого enum будет произведен релиз minor версии пакетов
- bug - исправлена ошибка. Для этого enum будет произведен релиз patch версии пакетов
- wip (work in progress) - промежуточные изменения
- refactor - произведен рефакторинг. Для этого enum будет произведен релиз patch версии пакетов
- doc - внесены изменения в .md файлы или storybook. Для этого enum релиз произведен не будет
- build - внесены изменения в сборке пакетов. Для этого enum будет произведен релиз patch версии пакетов
- chore - внесены изменения в настройку окружения проекта (линтеры, ci...). Для этого enum релиз произведен не будет
- test - написаны или изменены тесты проекта

COMPONENT_NAME - имя измененного компонента (наименование директорий из ui/src).

SCOPE разделены по пакетам и ограничены несколькими из них:
 - icons
 - fonts
При внесении изменений в эти пакеты вместо COMPONENT_NAME необходимо указывать SCOPE.

### Примеры

#### Для feat необходимо указать номер задачи

##### Valid
```
feat(UIKIT-123,Button): Добавлен props color
```

##### Invalid
```
feat(Button): Добавлен props color
```

#### Пробел недопустим

##### Valid
```
feat(UIKIT-123,Button): Добавлен props color
```

##### Invalid
```
feat(UIKIT-123, Button): Добавлен props color
```

#### Для изменений в icons и fonts необходимо указывать scope

##### Valid
```
feat(UIKIT-123,icons): Добавлена иконка PlusFillMd
```

##### Invalid
```
feat(UIKIT-123, PlusFillMd): Добавлена иконка
```

##### Valid
```
feat(UIKIT-123,icons): Добавлены иконки PlusFillMd, ProfileFillMd, InfoFillMd
```

##### Invalid
```
feat(UIKIT-123, PlusFillMd, ProfileFillMd, InfoFillMd): Добавлены иконки
```


---

# Авторелизы

Для проекта подключены авторелизы npm пакетов с помощью semantic-release.
Semantic-release определяет новую версию пакета по названию коммита, а именно по его enum:
- feat - релиз minor версии пакетов
- bug - релиз patch версии пакетов
- wip (work in progress) - релиз произведен не будет
- refactor - релиз patch версии пакетов
- doc - релиз произведен не будет
- build - релиз patch версии пакетов
- chore - релиз произведен не будет
- major - будет произведен релиз major версии

## Релизы основных версий пакетов

При внесении изменений в main ветку запускается релиз пакетов. При релизе происходит следующее:
1. В ```create_release.yml``` срабатывает триггер на push в main
2. Semantic-release определяет новую версию пакета
3. Если новая версия пакета отличается от предыдущей, то запускается билд каждого пакета и его паблишинг в npm. Все пакеты релизятся сразу с одной версией
4. Semantic-release генерирует changelog и создает новый release на github, добавляя в описание сгенерированный changelog
5. После успешного паблишинга пакетов, в телеграм канал отправляется уведомление о новой версии пакетов

---

# React
При написании кода должна быть реализована поддержка 17 версии React

---

# Storybook
Для документирования компонентов используется storybook.

## Стенды
[Здесь](https://main--61baeff6f06230003a88ef8a.chromatic.com/) находится основной стенд storybook.

Для каждого PR создается свой стенд с storybook. Ссылку на стенд вы увидите в CI Github под пунктом "publish storybook".

---

## Шаблоны
В качестве шаблона для написания stories необходимо использовать:
- [TextField](https://github.com/kaluga-astral/frontend/blob/main/packages/components/src/TextField/TextField.stories.tsx) для ```@astral/components```
- [FormTextField](https://github.com/kaluga-astral/frontend/blob/main/packages/form/src/FormTextField/FormTextField.stories.tsx) для ```@astral/form```

---

## Как работает
На основе ```*.stories.tsx``` файлов storybook автоматически генерирует документацию в виде ```.mdx``` файлов.
Именно сгенерированные ```.mdx``` файлы отображаются в разделе [Docs](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs).

### Генерация Props
Storybook автоматически генерирует API Props на основе типов typescript.

ℹ️ Если какой-либо prop не попал в сгенерированное API, то необходимо править функцию [filterProp в файле main.js](https://github.com/kaluga-astral/frontend/blob/main/.storybook/main.js#L29). 

---

### Story
Любой экспортируемый компонент из ```.stories.tsx``` считается story и попадает в Docs.

Представленный ниже компонент будет преобразован в [соответствующий раздел](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs#color-intensity) в Docs.
```tsx
/**
 * Prop ```colorIntensity``` позволяет задать интенсивность указанного ```color```.
 */
export const ColorIntensity = () => (
    <Grid container spacing={6}>
      <Typography color="info" colorIntensity="300">
        text[300]. Электронная отчетность и документооборот
      </Typography>
      <Typography color="red" colorIntensity="200">
        red[200]. Электронная отчетность и документооборот
      </Typography>
      <Typography color="grey" colorIntensity="400">
        grey[400]. Электронная отчетность и документооборот
      </Typography>
    </Grid>
  );
```

---

### Дефолтная верстка контейнера
Каждая story по-дефолту оборачивается в контейнер с версткой, описанным в [preview файле](https://github.com/kaluga-astral/frontend/blob/main/.storybook/preview.jsx#L9):
- Контент центрируется
- Между элементами добавляется стандартный отступ
- Элементы переносятся на следующую строку, если не влезают
- Для мобильного разрешения элементы выстраиваются в одну колонку

Если дефолтной верстки контейнера хватает, то можно использовать ```fragment``` для оборачивая story:
```tsx
export const Statuses = () => (
  <>
    <TextField required error helperText="Обязательно" label="Имя" />
    <TextField
      success
      helperText="Удачно завершился процесс проверки"
      label="Email"
    />
  </>
);
```

Если дефолтного контейнера не хватает, то можно написать для story свой:
```tsx
export const Variants = () => (
  <ButtonsContainer columns={4}>
    <Button>Contained</Button>
    <Button variant="light">Light</Button>
    <Button variant="link">Link</Button>
    <Button variant="text">Text</Button>
  </ButtonsContainer>
);
```

---

### Комментарии
Комментарии оставленные для story попадают в ```.mdx``` файлы.
При этом комментарии поддерживают markdown.

#### Пример
Для story:
```tsx
/**
 * Prop ```noWrap``` позволяет добавить ```...```, если текст не помещается в контейнер.
 *
 * Если необходимо умное ограничение длинны поля с tooltip, смотрите на [OverflowTypography](/docs/components-overflowtypography--docs).
 */
export const Ellipsis = () => (
    <div style={{ width: '200px' }}>
      <Typography noWrap>
        Электронная отчетность и документооборот. Электронная отчетность и
        документооборот
      </Typography>
    </div>
  );
```

Будет сгенерирована [документация](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs#ellipsis).

---

## Как писать stories
Для каждого компонента должен быть реализован storybook.

Каждый ```*.stories.tsx``` файл должен соответствовать следующей структуре:
1. Meta - метаданные компонента
   2. Описание (optional)
   3. Ссылка на Figma (required)
   4. Ссылка на Guide (required)
2. Interaction - интерактивная story, у которой можно менять пропсы через ui
3. Example - story, показывающая как компонент может применяться в проекте
4. Stories - остальные кейсы для компонента

##### [Шаблон](https://github.com/kaluga-astral/frontend/blob/main/packages/components/src/TextField/TextField.stories.tsx)

ℹ️ При написании stories необходимо учитывать мобильные разрешения. Дефолтный контейнер [учитывает](#дефолтная-верстка-контейнера) мобильные разрешения.

### Meta
```ts
/**
 * Весь текст должен задаваться через Typography.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1-347&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
  };
```

```Meta``` необходим для того, чтобы storybook смог получить основную информацию о компоненте и сгенерировать API по пропсам.
```title``` задает в каком разделе sidebar будет находиться компонент.

#### Описание компонента
Комментарии для Meta попадают в description компонента.
В описании может находиться назначение компонента, либо рекомендации по его использованию.
Если название компонента говорит само за себя (например, Button), то description можно опустить.

#### Ссылка на Figma
В комментарии Meta обязательно должна присутствовать ссылка на макеты компонента.

#### Ссылка на Guide
В комментарии Meta обязательно должна присутствовать ссылка на Guide для компонента.

---

### Interaction
Для генерации story, в которой можно будет в ui менять props, используется ```Interaction``` объект.

```ts
type Story = StoryObj<typeof Typography>;

export const Interaction: Story = {
  args: {
    children: 'Электронная отчетность и документооборот',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};
```

Interaction story не должна попадать в Docs раздел.

#### parameters.docs.disable
```parameters.docs.disable``` позволяет отключить отображение story в Docs.

#### args
```args``` позволяет подставить в ```Controls``` панель дефолтные значения пропсов.

---

### Example
Первой story должен быть всегда Example - пример использования компонента в проекте.
Example необходимо брать из макетов Figma.

```tsx
export const Example = () => (
  <ExamplePaper>
    <Typography variant="h3" component="h2" gutterBottom>
      Заявка успешно отправлена
    </Typography>
    <Typography paragraph>
      Заявка{' '}
      <Typography color="info" component="span">
        22
      </Typography>{' '}
      была отправлена на ваш email
    </Typography>
  </ExamplePaper>
);
```

---

### Stories
После Example должны быть реализованы кейсы использования компонента.
Кейсы формирует разработчик самостоятельно.

#### Кейсы по props
Для каждого значимого props должен быть описан свой кейс.

##### [Пример Typography](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs)
В примере для Typography кейсы сформированы по основным props.

Если у prop или кейса есть особенности, то необходимо добавить к ним описание через комментарий к story:
```tsx
/**
 * Prop ```noWrap``` позволяет добавить ```...```, если текст не помещается в контейнер.
 *
 * Если необходимо умное ограничение длинны поля с tooltip, смотрите на [OverflowTypography](/docs/components-overflowtypography--docs).
 */
export const Ellipsis = () => (
    <div style={{ width: '200px' }}>
      <Typography noWrap>
        Электронная отчетность и документооборот. Электронная отчетность и
        документооборот
      </Typography>
    </div>
  );
```

#### Специальные кейсы
Если у компонента есть специфичные кейсы, не относящиеся к какому-либо одному props, то их необходимо отобразить и по необходимости описать через комментарий.

#### Stories для вложенных компонентов
Для компонентов-оберток достаточно указать ссылку на storybook исходного компонента и описать stories для уникальных кейсов.

##### [Пример с FormTextField](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/form-formtextfield--docs)

---

# Тестирование

Тесты в проекте пишутся с использованием vitest и react-testing-library.

Тесты должны соблюдать принципы, описанные в [Astral Unit Testing Guide](https://industrious-search-cdf.notion.site/Astral-Frontend-Unit-Testing-Guide-71120289ed89424e912ebe7fa8b7e39b).

## Что покрывать тестами?

Тестами покрываются сущности, экспортируемые из поставляемых пакетов, к ним относятся:

- Утилиты
- Компоненты
- Хуки

### Тесты для утилит

Все экспортируемые утилиты должны быть покрыты тестами.

### Тесты для компонентов
Для тестирования компонентов используется react-testing-library + jsdom.

#### Заметка для тестирования любого компонента
- Проверить доступность ref (при необходимости)
- Проверить базовый сценарий отображения
- Проверить все измененные mui props или новые props (если props не связаны с изменением исключительно CSS)

#### Что тестируем
Точно должно быть покрыто тестами:
- Функционал, написанный для компонента в репозитории. Если функционал предоставляется внешней библиотекой, то его тестировать не надо.
- Проверка реакции компонента на пользовательские ивенты (click, focus, tab...)
- Вариативность props

Не тестируется:
- CSS. Используемые инструменты не умеют правильно эмулировать каскад в css. Примеры таких кейсов: проверка ширины бордера элемента, проверка цвета элемента...

#### Style guide
[Здесь](https://industrious-search-cdf.notion.site/Astral-Frontend-Unit-Testing-Style-Guide-bb6ec75b67a449f68bc8eebd36d6fec8) описан style guide по написанию тестов.

---

# Создание новых пакетов
При создании новых пакетов необходимо:
- Релизнуть тестовую версию пакета. В противном случае CI проверки PR упадет с ошибкой (npm не позволяет создавать новые пакеты по токену)
