import { apiHttpClient } from '@example/shared';

import { UserLogoutNetworkDTO, UserPersonNetworkDTO } from './dto';

/**
 * @description Запросы на auth-server для получение информаци о пользователе
 * */
export const userNetworkSources = {
  /**
   * @description Источник персональной и контактной информации пользователя
   * */
  getPersonInfo: () =>
    apiHttpClient.get<UserPersonNetworkDTO>('/account/personalInfo'),
  /**
   * @description Источник выхода из системы
   * */
  logout: () => apiHttpClient.get<UserLogoutNetworkDTO>('/account/logout'),
};

export type UserNetworkSources = typeof userNetworkSources;
