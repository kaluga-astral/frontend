import { makeAutoObservable } from 'mobx';

import {
  type AsyncStateStore,
  type UseQueryResult,
  createAsyncStateStore,
  notify,
} from '@example/shared';
import {
  type UserPersonDTO,
  userRepository,
} from '@example/modules/AuthModule';

const FETCH_USER_DATA_ERROR_MESSAGE = 'Ошибка при получении данных';

class HeaderLogic {
  /**
   * Асинхронное состояние
   * */
  asyncState: AsyncStateStore;

  /**
   * Информация о пользователе
   * */
  user: Pick<UserPersonDTO, 'displayedName' | 'email' | 'shortDisplayedName'> =
    {
      displayedName: '...',
      email: '...',
      shortDisplayedName: undefined,
    };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.asyncState = createAsyncStateStore();
  }

  /**
   * Выход из продукта
   * */
  public logout = () => {
    userRepository
      .logout()
      .then((response) => {
        const redirectUrl = response.data.redirectUrl;

        window.location.replace(redirectUrl);
      })
      .catch((error) => {
        notify.error(error.message);
      });
  };

  /**
   * Добавление данных о пользователе в стор
   * */
  public setUserData = ({
    data,
    error,
    isSuccess,
  }: UseQueryResult<UserPersonDTO>) => {
    this.asyncState.start();

    if (error && !data) {
      const message = error?.message || FETCH_USER_DATA_ERROR_MESSAGE;

      this.asyncState.fail(message);
      notify.error(message);

      return;
    }

    if (isSuccess) {
      this.user = {
        displayedName: data.displayedName,
        email: data.email,
        shortDisplayedName: data.shortDisplayedName,
      };
    }
  };

  /**
   * Получение продуктов для виджета
   * */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleGetProducts = () => [] as any;
}

export const createHeaderLogic = () => new HeaderLogic();
