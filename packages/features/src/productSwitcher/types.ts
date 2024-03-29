/**
 * Информация о продукте в identity
 * */
export type IdentityProductsWidgetDTO = {
  /**
   * ИД продукта
   * */
  id: string;
  /**
   * Наименование продукта
   * */
  name?: string;
  /**
   * URL адрес продукта
   * */
  productUrl?: string;
  /**
   * Описание продукта
   * */
  description?: string;
  /**
   * Короткое описание продукта
   * */
  shortDescription?: string;
  /**
   * Идентификатор иконки продукта
   * */
  iconFileId: string;
  /**
   * Ссылка на логотип продукта
   * */
  logoUrl?: string;
  /**
   * Цвет продукта
   * */
  backgroundHexColor?: string;
  /**
   * Идентификатор экосистемы
   * */
  tenantId?: string;
};

/**
 * Описание экосистем
 */
export type IdentityTenantsDTO = {
  /**
   * Идентификатор экосистемы
   * */
  id: string;
  /**
   * Наименование экосистемы
   * */
  name: string;
};
