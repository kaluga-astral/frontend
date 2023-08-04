# Table of contents

- [GIT](#git)
- [Формат коммитов и pull requests](#формат-коммитов-и-pull-requests)
- [Авторелизы](#авторелизы)
- [Тестирование](#тестирование)
- [Storybook](#storybook)
- [Создание новых пакетов](#создание-новых-пакетов)

# GIT

Модель ветвления GIT описана [здесь](https://github.com/kaluga-astral/docs/blob/main/GIT.md).

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

Для enums feat, bug обязательно должен указываться номер задачи в jira.

Формат:
```
${ENUM}(SCOPE|COMPONENT_NAME|TASK): Что было сделано?
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

SCOPE разделены по пакетам:
- ui
- icons
- fonts
- form

COMPONENT_NAME - имя измененного компонента (наименование директорий из ui/src).

### Примеры

#### Для feat необходимо указать номер задачи

##### Valid
```
feat(UIKIT-200,ui,Button): Добавлен props color
```

##### Invalid
```
feat(ui,Button): Добавлен props color
```

#### Пробел между scopes недопустим

##### Valid
```
feat(UIKIT-200,ui,Button): Добавлен props color
```

##### Invalid
```
feat(UI-KIT-200, ui, Button): Добавлен props color
```

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
3. Если новая версия пакета отличается от предыдущей, то запускается билд каждого пакета и его паблишинг в npm. Все пакеты релизяться сразу с одной версией
4. Semantic-release генерирует changelog и создает новый release на github, добавляя в описание сгенерированный changelog
5. После успешного паблишинга пакетов, в телеграм канал отправляется уведомление о новой версии пакетов

# Storybook
Для документирования компонентов используется storybook.

## Стенды
[Здесь](https://main--61baeff6f06230003a88ef8a.chromatic.com/) находится основной стенд storybook.

Для каждого PR создается свой стенд с storybook. Ссылку на стенд вы увидите в CI Github под пунктом "publish storybook".

## Как писать storybook
Для каждого компонента должен быть реализован storybook.

## Расположение
```*.stories.tsx``` создается рядом с компонентом, для которого должен быть написан storybook.

## Как работает
На основе ```*.stories.tsx``` файлов storybook автоматически генерирует документацию в виде ```.mdx``` файлов.
Именно сгенерированные ```.mdx``` файлы отображаются в разделе [Docs](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs).

### Генерация Props
Storybook автоматически генерирует API Props на основе типов typescript.

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

### Story
Любой экспортируемый компонент из ```.stories.tsx``` считается story и попадает в Docs.

Представленный ниже компонент будет преобразован в [соответсвующий раздел](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-typography--docs#color-intensity) в Docs.
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

#### Комментарии для Meta
Комментарии оставленные для ```Meta``` попадают в описание компонента под h1.

### Interaction
Для генерации story, в которой можно будет динамически менять props, используется ```Interaction``` объект.

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

#### args
```args``` позволяет подставить в ```Controls``` панель дефолтные значения пропсов.

#### parameters.docs.disable
```parameters.docs.disable``` позволяет отключить отображение story в Docs.

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

## Формат

### Meta
Для к

### Создание файлов

# Тестирование

Тесты в проекте пишутся с использованием vitest и react-testing-library.

## Что покрывать тестами?

Тестами покрываются сущности, экспортируемые из поставляемых пакетов, к ним относятся:

- Утилиты
- Компоненты
- Хуки

### Тесты для утилит

Все экспортируемые утилиты должны быть покрыты тестами.

Точно должно быть покрыто тестами:
- Базовые кейсы
- Вариативность параметров

### Тесты для компонентов
Для тестирования компонентов используется react-testing-library + jsdom.

#### Заметка для тестирования любого компонента
- Проверить доступность ref (при необходимости)
- Проверить базовый сценарий отображения
- Проверить все измененные mui props или новые props (если props не связаны с изменением исключительно CSS)

#### Что тестируем
Точно должно быть покрыто тестами:
- Функционал, написанный для компонента в репозитории. Если функционал предоставляется внешней библиотекой, то его тестировать не надо.
- Проверка реакции компонента на пользовательские эвенты (click, focus, tab...)
- Вариативность props

Не тестируется:
- CSS. Используемые инструменты не умеют правильно эмулировать каскад в css. Примеры таких кейсов: проверка ширины бордера элемента, проверка цвета элемента...

#### Style guide
[Здесь](https://track.astral.ru/soft/wiki/pages/viewpage.action?pageId=3772645403) описан style guide по написанию тестов.

# Создание новых пакетов
При создании новых пакетов необходимо:
- Релизнуть тестовую версию пакета. В противном случае CI проверки PR упадет с ошибкой (npm не позволяет создавать новые пакеты по токену)
