export const checkIsDisabled = (
  isDisabled: boolean | undefined,
  matrix: Array<boolean> | undefined,
  index: number,
) => {
  if (!isDisabled) {
    return false;
  }

  if (!matrix) {
    return true;
  }

  return matrix[index] || false;
};
