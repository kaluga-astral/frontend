import { type IdentityProductsWidgetDTO } from '../../types';
import { formatIdentityProducts } from '../formatIdentityProducts';

/**
 * Получение данных из identity
 * @param identityUrl - адрес identity
 * @param tenant - код экосистемы
 */
export const getIdentityProducts = async (
  identityUrl: string,
  tenant: string = 'astral',
) => {
  return fetch(`${identityUrl}/api/products/widget?tenantId=${tenant}`)
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
