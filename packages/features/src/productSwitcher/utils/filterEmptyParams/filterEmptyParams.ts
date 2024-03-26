/**
 * Фильтрация пустых параметров из объекта
 * @param params - query параметры
 */
export const filterEmptyParams = (
  params: Record<string, string | undefined | null>,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>;
