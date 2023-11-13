import { IdentityTenantsDTO } from '../../../../types';

/**
 * Получение данных из identity
 * @param identityUrl - адрес identity
 */
export const getIdentityTenants = async (identityUrl: string) => {
  return fetch(`${identityUrl}/api/tenants/widget`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<IdentityTenantsDTO[]>;
  });
};
