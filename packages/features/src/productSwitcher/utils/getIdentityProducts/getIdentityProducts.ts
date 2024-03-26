import { type IdentityProductsWidgetDTO } from '../../types';
import { formatIdentityProducts } from '../formatIdentityProducts';
import { filterEmptyParams } from '../filterEmptyParams';

export type IdentityWidgetParams = {
  tenantId?: string;
  productGroupId?: string;
};

/**
 * Получение данных из identity
 * @param identityUrl - адрес identity
 * @param {Object} params - параметры виджета продуктов
 * @param {string} params.tenantId - Код экосистемы
 * @param {string} params.productGroupId - Код группы продуктов
 */
export const getIdentityProducts = async (
  identityUrl: string,
  params: IdentityWidgetParams = {
    tenantId: 'astral',
  },
) => {
  return fetch(
    `${identityUrl}/api/products/widget?${new URLSearchParams(
      filterEmptyParams(params),
    )}`,
  )
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
