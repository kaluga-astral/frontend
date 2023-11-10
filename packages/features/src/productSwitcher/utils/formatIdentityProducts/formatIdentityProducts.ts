import { WidgetProduct } from '@astral/ui';

import { IdentityProductsWidgetDTO } from '../../types';

/**
 * Форматирование данных identity под виджет UIKIT
 * @param identityProducts - список продуктов от identity
 * @param identityUrl - Url адрес identity
 */
export const formatIdentityProducts = (
  identityUrl: string,
  identityProducts: IdentityProductsWidgetDTO[] = [],
) =>
  identityProducts?.map(
    ({
      id,
      productUrl = '',
      name = '',
      logoUrl,
      iconFileId,
      backgroundHexColor = '',
    }): WidgetProduct => {
      return {
        id: id,
        url: productUrl,
        name: name,
        logoUrl: logoUrl || `${identityUrl}/api/files/${iconFileId}`,
        color: backgroundHexColor,
      };
    },
  ) || [];
