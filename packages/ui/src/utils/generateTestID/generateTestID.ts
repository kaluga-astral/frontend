export const generateTestID = (
  baseElementName: string,
  ...nestedElements: string[]
): string =>
  ['astralui', baseElementName, ...nestedElements]
    .filter(Boolean)
    .map((string) => string.toLowerCase())
    .join('-');
