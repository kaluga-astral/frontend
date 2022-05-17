# GIT

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

## Формат коммита, если есть задача в jira
Для enums feat, bug обязательно должен указываться номер задачи в jira.

Формат:
```
UIKIT-${JIRA_TASK_NUMBER}: ${ENUM}(${PACKAGE_NAME},${COMPONENT_NAME | FUNCTION_NAME}): ${Что было сделано?}
```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

PACKAGE_NAME:
- ui
- icons
- fonts

### Примеры

#### Для feat необходимо указать номер задачи

##### Valid
```
UIKIT-200: feat(ui,Button): Добавлен props color
```

##### Invalid
```
feat(ui,Button): Добавлен props color
```

#### Пробел между scopes недопустим

##### Valid
```
UIKIT-200: feat(ui,Button): Добавлен props color
```

##### Invalid
```
UI-KIT-200: feat(ui, Button): Добавлен props color
```

#### Для feat и bug необходимо указывать scopes

##### Valid
```
UIKIT-200: feat(ui,Button): Добавлен props color
```
```
UIKIT-200: bug(ui,Button): Добавлен props color
```

##### Invalid
```
feat: Добавлен props color
```

```
bug: Поправлен light variant для Button
```

## Формат коммита, если нет задачи в jira

```
${ENUM}(${PACKAGE_NAME},${COMPONENT_NAME | FUNCTION_NAME}): ${Что было сделано?}
```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

PACKAGE_NAME:
- ui
- icons
- fonts

### Примеры

#### Valid
```
wip(ui,Button): Начата работа над добавлением пропса color
```

#### Invalid
```
chore: Добавил пропс color
```

# Git flow

## Ветки
В проекте одна основная ветка - main, от нее должны создаваться все dev ветки.

## Именование веток
Формат именования ветки:
```
${BASE_BRANCH}-${НАЗНАЧЕНИЕ_ВЕТКИ}
```

НАЗНАЧЕНИЕ_ВЕТКИ - не больше 3 слов

Примеры:
```
main-button
main-modal-bug
```

## Merge pull request
Merge PR производит человек, который создал PR, после того, как получил approve от двух ревьюеров.
Также можно воспользоваться auto-merge.
