# GIT

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

## Формат коммита, если есть задача в jira
Для enums feat, bug обязательно должен указываться номер задачи в jira.

Формат:
```
UI-KIT-${JIRA_TASK_NUMBER}: ${ENUM}(${PACKAGE_NAME},${COMPONENT_NAME | FUNCTION_NAME}): ${Что было сделано?}
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

### Пример

#### Valid
```
UI-KIT-200: feat(ui,Button): Добавлен props color
```

```
UI-KIT-201: bug(ui,Button): Поправлен padding для Button
```

#### Invalid
```
feat(ui, Button): Добавлен props color
```

## Формат коммита, если нет задачи в jira

```
UI-KIT-${JIRA_TASK_NUMBER}: ${ENUM}(${PACKAGE_NAME},${COMPONENT_NAME | FUNCTION_NAME}): ${Что было сделано?}
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
wip(ui,Button): Начата работа на добавлением пропса color
```

#### Invalid
```
chore: Добавил пропс color
```
