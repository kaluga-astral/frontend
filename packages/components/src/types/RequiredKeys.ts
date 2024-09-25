// TODO Вынести этот дженерик в отдельный пакет
// Дженерик получает из типа только обязательные поля и возвращает их как union
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
