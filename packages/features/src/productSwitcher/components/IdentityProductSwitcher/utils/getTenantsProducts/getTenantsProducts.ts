import { type WidgetProduct } from '@astral/ui';

import { getIdentityProducts } from '../../../../utils';

/**
 * Получение всех продуктов из разных экосистем и группировка в единую мапу
 * @param identityUrl - ссылка на identity
 * @param tenants - список экосистем, чтобы была возможность не все экосистемы показывать в виджете.
 */
export const getTenantsProducts = async (
  identityUrl: string,
  tenants: string[],
): Promise<Record<string, WidgetProduct[]>> => {
  const { hostname } = new URL(window.origin);

  const tenantsProducts = tenants.map(async (tenant) => {
    const products = await getIdentityProducts(identityUrl, tenant).then(
      (tenantProducts) =>
        tenantProducts.filter(
          (product) => new URL(product.url).hostname !== hostname,
        ),
    );

    return [tenant, products];
  });

  const products = await Promise.all(tenantsProducts);

  return Object.fromEntries(products);
};
