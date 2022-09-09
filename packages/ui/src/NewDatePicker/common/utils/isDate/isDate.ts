export const isDate = (value: unknown): value is Date =>
  value !== null &&
  (value instanceof Date ||
    (typeof value === 'object' &&
      Object.prototype.toString.call(value) === '[object Date]')) &&
  !isNaN(+value);
