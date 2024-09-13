## Сервис AutoSaveIndicator

### Составные части

**AutoSaveIndicatorService** - сама реализация сервиса. Является внутренним и его использование
не предполагается как публичное.

**AutoSaveIndicatorStore** - mobx-стор, использующий внутри **AutoSaveIndicatorService** и дающий публичное API
для использования. Фактически его зона ответственности - бинд сервиса к mobx. Во всем остальном он занимается
проксированием геттеров и методов для работы с сервисом.

**useInitAutoSaveIndicatorStore** - хук для инициализации стора (об этом далее);

### Инициализация

Необходимо вызвать хук useInitAutoSaveIndicatorStore на уровне скрина, где
предполагается использование автосейва.

Этот хук отвечает за условие по отображению индикатора.

``` ts
screen

const ExampleScreen = observer(() => {
const [autoSaveIndicatorStore] = useState(autoSaveIndicatorStoreInstance);

useInitAutoSaveIndicatorStore(autoSaveIndicatorStore);

return (...)
})
```

В текущей реализации показ сработает при маунте скрина, а при анмаунте будет скрыт.
Так как **autoSaveIndicatorStore** является синглтоном, внутри хука также будет вызван метод reset()
сбрасывающий состояние стора при анмаунте.

Пример размещения AutoSaveIndicator будет выглядеть следующим образом:

``` tsx
pages/somePage/header.tsx

export const Header = observer(() => {
  const [autoSaveIndicatorStore] = useState(autoSaveIndicatorStoreInstance);

  return (
        {autoSaveIndicatorStore.isVisible && (
          <AutoSaveIndicator {...autoSaveIndicatorStore.values} />
        )}
  )
});
```

## Использование

``` ts
import {
  type AutoSaveIndicatorStore,
  autoSaveIndicatorStoreInstance,
} from '@example/shared';

mobx-Store example

class UIStore {

    constructor(
        private readonly repository: Repository,
        private readonly autosaveIndicactorStore: AutoSaveIndicatorStore
    ) {
        makeAutoObservable(this, {}, {
            autoBind: true
        });
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
                        this.makeMutation(requestParam)
                    }
                })
            });
    };
}

export const createUIStore = (
  repository: Repository,
) =>
  new UIStore(
    repository,
    autoSaveIndicatorStoreInstance,
  );

```

### Особенности

Реализация сделана на основе договоренности, что на одной странице всегда будет только 1 AutoSaveIndicator.
