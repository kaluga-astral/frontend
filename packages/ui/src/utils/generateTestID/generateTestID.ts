export const generateTestID = (
  baseElementName: string,
  ...nestedElements: string[]
): string =>
  ['astral-ui', baseElementName, ...nestedElements]
    .filter(Boolean)
    .map((string) => string.toLowerCase())
    .join('-');
