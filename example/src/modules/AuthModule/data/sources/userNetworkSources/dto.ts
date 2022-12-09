/**
 * @description Полное имя пользователя
 * */
export type UserFullNameDTO = {
  /**
   * @description Имя пользователя
   * */
  name: string;
  /**
   * @description Фамилия пользователя
   * */
  surname: string;
  /**
   * @description Отчество пользователя
   * */
  patronymic?: string;
};

/**
 * @description Персональная и контактная информация пользователя
 * */
export type UserPersonNetworkDTO = {
  /**
   * @description Цвет аватара
   * */
  avatarHexColor?: string;
  /**
   * @description Дата рождения
   * */
  birthDate?: string;
  /**
   * @description Выводимая информация пользователя
   * */
  displayedName: string;
  /**
   * @description Электронная почта
   * */
  email?: string;
  /**
   * @description Идентификатор для входа через гос. услуги
   * */
  esiaId?: string;
  /**
   * @description Полное имя пользователя
   * */
  fullName: UserFullNameDTO;
  /**
   * @description телефон пользователя
   * */
  phone?: string;
  /**
   * @description Короткая выводимая информация о пользователе
   * */
  shortDisplayedName?: string;
  /**
   * @description Идентификатор для входа через телеграм
   * */
  telegramId?: string;
};

export type UserLogoutNetworkDTO = {
  /**
   * @description Адрес выхода из системы
   * */
  redirectUrl: string;
};
