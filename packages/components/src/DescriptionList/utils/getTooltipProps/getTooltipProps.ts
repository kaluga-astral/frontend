export const getTooltipProps = (canCopy?: boolean) => {
  return canCopy ? { title: undefined } : undefined;
};
