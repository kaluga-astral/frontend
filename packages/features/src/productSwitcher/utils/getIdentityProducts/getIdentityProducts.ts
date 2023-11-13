import type { IdentityProductsWidgetDTO } from '../../types';
import { formatIdentityProducts } from '../formatIdentityProducts';

/**
 * Получение данных из identity
 * @param identityUrl - адрес identity
 * @param tenantId - идентификатор экосистемы
 */
export const getIdentityProducts = async (
  identityUrl: string,
  tenantId: string = 'astral',
) => {
  return fetch(`${identityUrl}/api/products/widget?tenantId=${tenantId}`)
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
