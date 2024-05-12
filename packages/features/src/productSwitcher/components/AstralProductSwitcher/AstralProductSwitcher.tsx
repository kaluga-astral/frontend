import { ProductSwitcher, type WidgetProduct } from '@astral/ui';
import { useState } from 'react';

import { getIdentityProducts } from '../../utils';

import { ProductFilterType } from './enums';
import { getFilteredProducts } from './utils';

export type AstralProductSwitcherType = {
  /**
   * Адрес identity
   * */
  identityUrl: string;
  /** Тип фильтрации продуктов */
  filterBy?: ProductFilterType;
  /** Код для фильтрации */
  code?: string;
  /**
   * Идентификатор экосистемы
   * @deprecated
   * */
  tenantId?: string;
};

export const AstralProductSwitcher = ({
  identityUrl,
  filterBy = ProductFilterType.Tenant,
  code = 'astral',
  tenantId,
}: AstralProductSwitcherType) => {
  const [products, setProducts] = useState<WidgetProduct[]>([]);
  const handleGetProducts = async () => {
    if (products.length) {
      return products;
    }

    // Это заглушка для обратной совместимости, убрать после релиза мажорной версии
    if (tenantId) {
      const productsList = await getIdentityProducts(identityUrl, tenantId);

      setProducts(productsList);

      return productsList;
    }

    const filteredProductsList = await getFilteredProducts(
      identityUrl,
      filterBy,
      code,
    );

    setProducts(filteredProductsList);

    return filteredProductsList;
  };

  return <ProductSwitcher getProducts={handleGetProducts} />;
};
