import {
  type QueryClient,
  type RepositoryFetchParams,
  createCachedQuery,
  queryClient as queryClientInstance,
} from '@example/shared';

import {
  type UserNetworkSources,
  userNetworkSources as userNetworkSourcesInstance,
} from '../../sources';

import { type UserPersonDTO } from './dto';

/**
 * Repository для работы с данными юзера
 * */
export class UserRepository {
  public fullInfoCacheKey = ['fullInfoCacheKey'];

  public personInfoCacheKey = ['personInfoCacheKey'];

  constructor(
    private readonly userNetworkSources: UserNetworkSources,
    private readonly queryClient: QueryClient,
  ) {
    this.userNetworkSources = userNetworkSources;
    this.queryClient = queryClient;
  }

  /**
   * Выход пользователя из системы
   * */
  public logout = () => this.userNetworkSources.logout();

  /**
   * Получение информации о пользователе
   * */
  public getPersonInfo = (params?: RepositoryFetchParams) =>
    createCachedQuery<UserPersonDTO>(
      this.queryClient,
      this.personInfoCacheKey,
      async () => {
        const result = await this.userNetworkSources.getPersonInfo();

        return result.data;
      },
      params,
    );
}

export const userRepository = new UserRepository(
  userNetworkSourcesInstance,
  queryClientInstance,
);
