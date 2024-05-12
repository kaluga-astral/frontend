import { getIdentityProducts } from '../../../../utils';
import { ProductFilterType } from '../../enums';
import { getGroupsProducts } from '../../../../utils/getGroupsProducts';

/**
 * Получение всех продуктов из разных экосистем и группировка в единую мапу
 * @param identityUrl - адрес экосистемы
 * @param filterBy - тип фильтрации продуктов
 * @param code - код-значение для фильтрации
 */
export const getFilteredProducts = (
  identityUrl: string,
  filterBy: string,
  code: string,
) => {
  switch (filterBy) {
    case ProductFilterType.Group: {
      return getGroupsProducts(identityUrl, code);
    }
    default: {
      return getIdentityProducts(identityUrl, code);
    }
  }
};
