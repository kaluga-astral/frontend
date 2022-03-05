# GIT

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

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

## Примеры

### Valid
```
wip(ui,Button): Начата работа на добавлением пропса color
```

```
feat(ui,Button): Добавлен пропс color
```

### Invalid
```
feat(ui, Button): Добавил пропс color
```
