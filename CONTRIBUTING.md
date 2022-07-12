# GIT

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

Для enums feat, bug обязательно должен указываться номер задачи в jira.

Формат:
```
${ENUM}(SCOPE|COMPONENT_NAME|TASK): Что было сделано?
```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

SCOPE:
- ui
- icons
- fonts

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
