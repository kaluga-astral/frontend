# @astral/features

Сущности общей предметной области Астрал.Софт.

## Сервисы

### AutoSaveIndicator
**Цель сервиса**: предоставить централизованное и декларативное управление компонентом [AutoSaveIndicator](https://main--61baeff6f06230003a88ef8a.chromatic.com/?path=/docs/components-autosaveindicator--docs)

**Область применения**: screens с автоматическим сохранением изменений на ней
(пример:  форма с сохранением при вводе)

#### Составные части
**AutoSaveIndicatorStore** - mobx-стор, использующий внутри **AutoSaveIndicatorService** и дающий публичное API
для использования.

**useInitAutoSaveIndicatorStore** - хук для инициализации стора.

#### API AutoSaveIndicatorStore
Свойства:

- ``values`` - пропсы, необходимые для работы компонента
- ``isVisible`` - флаг, определяющий видимость индикатора на странице

Методы:

``show`` - Установка значения ``isVisible`` в true

``hide`` - Установка значения ``isVisible`` в false 

``progress`` - Установка индикации автосохранения (аналог ``setIsLoading``)

``success`` - Установка успешного состояния автосохранения

``setError`` - Установка состояния ошибки. 

Параметры метода: 
- ``message`` - сообщение об ошибке, которое будет отображаться над кнопкой повторения запроса
- ``onRetry`` - коллбэк, который будет выполнен при нажатии на кнопку повторения запроса.

``reset`` - Сброс состояния стора до изначального.
 
#### Инициализация

1. Необходимо создать инстанс AutoSaveIndicatorStore, 

```
shared/stores

import { AutoSaveIndicatorStore } from "@astral/features"

export const autoSaveIndicatorInstance = new AutoSaveIndicatorStore();
```

2. Вызвать хук на скрине, где предполагается использование индикатора автосохранения и передать в него созданный инстанс

Внутри данного хука содержится следующая логика:
- При монтировании вызывается метод ``show``.
- При размонтировании вызывается метод ``hide`` и ``reset``. Вызов последнего необходим, так как предполагается использование
  данного стора в качестве синглтона

``` ts
screen

import { autoSaveIndicatorInstance } from "@example/shared"

export const ExampleScreen = observer(() => {
  const [autoSaveIndicatorStore] = useState(autoSaveIndicatorStoreInstance);

  useInitAutoSaveIndicatorStore(autoSaveIndicatorStore);

  return (
    <PageLayout
      header={{ title: 'Example Screen' }}
      content={{ children: null, isPaddingDisabled: false }}
    />
  );
});
```

Пример использования AutoSaveIndicator на лэйауте будет выглядеть следующим образом:

``` tsx
modules/layout/features/MainLayout/Header

import { autoSaveIndicatorStoreInstance } from "@example/shared"

export const Header = observer(() => {
  const [autoSaveIndicatorStore] = useState(autoSaveIndicatorStoreInstance);

  return (
    autoSaveIndicatorStore.isVisible && (
      <AutoSaveIndicator {...autoSaveIndicatorStore.values} />
    )
  );
});
```

#### Использование

``` ts
import {
  type AutoSaveIndicatorStore,
  autoSaveIndicatorStoreInstance,
} from '@example/shared';

class UIStore {
  constructor(
    private readonly repository: Repository,
    private readonly autosaveIndicactorStore: AutoSaveIndicatorStore,
  ) {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      },
    );
  }

  public makeMutation = (requestParam: string) => {
    this.autosaveIndicactorStore.progress();

    this.repository.makeMutation
      .async({
        requestParam,
      })
      .then(() => {
        this.autosaveIndicactorStore.success()
      })
      .catch((e) => {
        this.autosaveIndicactorStore.setError({
          message: 'Что-то пошло не так',
          onRetry: () => {
            this.makeMutation(requestParam);
          },
        });
      });
  };
}

export const createUIStore = (repository: Repository) =>
  new UIStore(repository, autoSaveIndicatorStoreInstance);

```
