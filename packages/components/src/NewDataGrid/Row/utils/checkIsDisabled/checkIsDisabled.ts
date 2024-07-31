export const checkIsDisabled = (
  isDisabled: boolean | undefined,
  availableCellsByIndex: Array<number> | undefined,
  index: number,
) => {
  if (!isDisabled) {
    return false;
  }

  if (!availableCellsByIndex) {
    return true;
  }

  return !availableCellsByIndex.includes(index);
};
