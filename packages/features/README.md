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

- **values** - пропсы, необходимые для работы компонента
- **isVisible** - флаг, определяющий видимость индикатора на странице

Методы:

**show** - Установки значения **isVisible** в true

**hide** - Установки значения **isVisible** в false 

**progress** - Установки индикации автосохранения (isLoading)

**success** - Установки успешного состояния автосохранения

**setError** - Установки состояния ошибки. 

Параметры метода: 
- **message** - сообщение об ошибке, которое будет отображаться над кнопкой повторения запроса
- **onRetry** - коллбэк, который будет выполнен при нажатии на кнопку повторения запроса.

**reset** - Метод для сброса состояния стора до изначального.
 
#### Инициализация

Необходимо создать инстанс AutoSaveIndicatorStore, затем вызвать хук useInitAutoSaveIndicatorStore на уровне скрина, где
предполагается использование автосейва. 

Внутри данного хука содержится следующая логика:
- При монтировании вызывается метод **show**.
- При размонтировании вызывается метод **hide** и **reset**. Вызов последнего необходим, так как предполагается использование
  данного стора в качестве синглтона

``` ts
screen

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

Пример размещения AutoSaveIndicator будет выглядеть следующим образом:

``` tsx
modules/layout/features/MainLayout/Header

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
