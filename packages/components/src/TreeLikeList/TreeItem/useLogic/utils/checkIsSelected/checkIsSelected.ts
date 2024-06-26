export const checkIsSelected = (
  value: Array<string> | undefined,
  optionId: string,
) => {
  if (!value || !value.length) {
    return false;
  }

  return value.includes(optionId);
};
