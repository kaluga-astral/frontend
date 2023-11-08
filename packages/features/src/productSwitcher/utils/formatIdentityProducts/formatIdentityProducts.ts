import { WidgetProduct } from '@astral/ui';

import { IdentityProductsWidgetDTO } from '../../types';

/**
 * Форматирование данных identity под виджет UIKIT
 * @param identityProducts - список продуктов от identity
 * @param identityUrl - Url адрес identity
 */
export const formatIdentityProducts = (
  identityUrl: string,
  identityProducts?: IdentityProductsWidgetDTO[],
) =>
  identityProducts?.map((identityProduct): WidgetProduct => {
    return {
      id: identityProduct.id,
      url: identityProduct.productUrl || '',
      name: identityProduct.name || '',
      logoUrl:
        identityProduct.logoUrl ||
        `${identityUrl}/api/files/${identityProduct.iconFileId}`,
      color: identityProduct.backgroundHexColor || '',
    };
  }) || [];
