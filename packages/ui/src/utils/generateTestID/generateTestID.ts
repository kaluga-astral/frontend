export const generateTestID = (
  baseElementName: string,
  ...nestedElements: string[]
): string =>
  [baseElementName, ...nestedElements, 'testid']
    .filter(Boolean)
    .map((string) => string.toLowerCase())
    .join('-');
