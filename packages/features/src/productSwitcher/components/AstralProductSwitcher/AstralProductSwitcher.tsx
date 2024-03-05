import { ProductSwitcher, type WidgetProduct } from '@astral/ui';
import { useState } from 'react';

import { getIdentityProducts } from '../../utils';

export type AstralProductSwitcherType = {
  /**
   * Адрес identity
   * */
  identityUrl: string;
  /**
   * Код экосистемы
   * @default astral
   * */
  tenantId?: string;
  /**
   * Код группы продуктов
   * */
  productGroupId?: string;
};

export const AstralProductSwitcher = ({
  identityUrl,
  tenantId = 'astral',
  productGroupId,
}: AstralProductSwitcherType) => {
  const [products, setProducts] = useState<WidgetProduct[]>([]);
  const handleGetProducts = async () => {
    if (!products.length) {
      const productsList = await getIdentityProducts(identityUrl, {
        tenantId,
        productGroupId,
      });

      setProducts(productsList);

      return productsList;
    }

    return products;
  };

  return <ProductSwitcher getProducts={handleGetProducts} />;
};
