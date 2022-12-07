import {
  QueryClient,
  RepositoryFetchParams,
  createCachedQuery,
  queryClient as queryClientInstance,
} from '@example/shared';

import {
  UserNetworkSources,
  userNetworkSources as userNetworkSourcesInstance,
} from '../../sources';

import { UserPersonDTO } from './dto';

/**
 * @description Repository для работы с даннми юзере
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
   * @description Выход пользователя из системы
   * */
  public logout = () => this.userNetworkSources.logout();

  /**
   * @description Получение информации о пользователе
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
