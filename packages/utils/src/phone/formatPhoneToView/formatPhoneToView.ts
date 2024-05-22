export type FormatPhoneOptions = {
  isStartWithPlus?: boolean;
};

/**
 * Форматирование номера телефона по маске
 * @param phone - строка номера телефона без маски
 * @param {options} isStartWithPlus - номер телефона будет начинаться с +7
 */
export const formatPhoneToView = (
  phone?: string,
  { isStartWithPlus = true }: FormatPhoneOptions = {},
) => {
  if (!phone) {
    return;
  }

  const startsWith = isStartWithPlus ? '+7' : '8';

  return phone
    .replace(/[^0-9]/g, '')
    .substring(1)
    .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${startsWith} ($1) $2-$3-$4`);
};
