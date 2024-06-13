export const checkIsIndeterminate = (
  value: Array<string> | undefined,
  childrenIds: Array<string> | undefined,
) => {
  if (!value || !childrenIds) {
    return false;
  }

  return value.some((item) => childrenIds.includes(item));
};
