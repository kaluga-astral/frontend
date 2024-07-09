export const getGridTemplateColumns = (
  columns: Array<{ width?: string | number }>,
  selectable?: boolean,
) => {
  const columnsWidth = columns.map(({ width }) => width || '1fr');

  if (selectable) {
    columnsWidth.unshift('max-content');
  }

  return columnsWidth.join(' ');
};
