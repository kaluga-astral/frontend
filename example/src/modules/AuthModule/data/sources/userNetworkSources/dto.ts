/**
 * Полное имя пользователя
 * */
export type UserFullNameDTO = {
  /**
   * Имя пользователя
   * */
  name: string;
  /**
   * Фамилия пользователя
   * */
  surname: string;
  /**
   * Отчество пользователя
   * */
  patronymic?: string;
};

/**
 * Персональная и контактная информация пользователя
 * */
export type UserPersonNetworkDTO = {
  /**
   * Цвет аватара
   * */
  avatarHexColor?: string;
  /**
   * Дата рождения
   * */
  birthDate?: string;
  /**
   * Выводимая информация пользователя
   * */
  displayedName: string;
  /**
   * Электронная почта
   * */
  email?: string;
  /**
   * Идентификатор для входа через гос. услуги
   * */
  esiaId?: string;
  /**
   * Полное имя пользователя
   * */
  fullName: UserFullNameDTO;
  /**
   * телефон пользователя
   * */
  phone?: string;
  /**
   * Короткая выводимая информация о пользователе
   * */
  shortDisplayedName?: string;
  /**
   * Идентификатор для входа через телеграм
   * */
  telegramId?: string;
};

export type UserLogoutNetworkDTO = {
  /**
   * Адрес выхода из системы
   * */
  redirectUrl: string;
};
