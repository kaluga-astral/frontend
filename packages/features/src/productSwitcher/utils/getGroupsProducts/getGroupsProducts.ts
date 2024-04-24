import { type IdentityProductsWidgetDTO } from '../../types';
import { formatIdentityProducts } from '../formatIdentityProducts';

/**
 * Получение данных из identity
 * @param identityUrl - адрес identity
 * @param group - код группы
 */
export const getGroupsProducts = async (identityUrl: string, group: string) => {
  return fetch(`${identityUrl}/api/products/group?groupId=${group}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<{
        data: IdentityProductsWidgetDTO[];
      }>;
    })
    .then(({ data }) => {
      return formatIdentityProducts(identityUrl, data);
    });
};
