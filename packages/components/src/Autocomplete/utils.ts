export function checkIsInputEmpty(val: unknown): boolean {
  // мульти ввод
  if (Array.isArray(val)) {
    return val.length === 0;
  }

  return !Boolean(val);
}
