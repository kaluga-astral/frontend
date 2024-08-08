import { apiHttpClient } from '@example/shared';

import { type UserLogoutNetworkDTO, type UserPersonNetworkDTO } from './dto';

/**
 * Запросы на auth-server для получение информами о пользователе
 * */
export const userNetworkSources = {
  /**
   * Источник персональной и контактной информации пользователя
   * */
  getPersonInfo: () =>
    apiHttpClient.get<UserPersonNetworkDTO>('/account/personalInfo'),
  /**
   * Источник выхода из системы
   * */
  logout: () => apiHttpClient.get<UserLogoutNetworkDTO>('/account/logout'),
};

export type UserNetworkSources = typeof userNetworkSources;
