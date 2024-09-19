export const truncateString = (
  visibleLastSymbolsCount: number,
  label: string,
) => {
  const firstPartLabel = label.slice(0, -visibleLastSymbolsCount);
  const secondPartLabel = label.slice(-visibleLastSymbolsCount);

  return { firstPartLabel, secondPartLabel };
};
