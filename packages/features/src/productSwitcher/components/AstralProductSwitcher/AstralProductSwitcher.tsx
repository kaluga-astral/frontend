import { ProductSwitcher, type WidgetProduct } from '@astral/ui';
import { useState } from 'react';

import { getIdentityProducts } from '../../utils';

export type AstralProductSwitcherType = {
  /**
   * Адрес identity
   * */
  identityUrl: string;
  /**
   * Идентификатор экосистемы
   * @default astral
   * */
  tenantId?: string;
};

export const AstralProductSwitcher = ({
  identityUrl,
  tenantId = 'astral',
}: AstralProductSwitcherType) => {
  const [products, setProducts] = useState<WidgetProduct[]>([]);
  const handleGetProducts = async () => {
    if (!products.length) {
      const productsList = await getIdentityProducts(identityUrl, tenantId);

      setProducts(productsList);

      return productsList;
    }

    return products;
  };

  return <ProductSwitcher getProducts={handleGetProducts} />;
};
