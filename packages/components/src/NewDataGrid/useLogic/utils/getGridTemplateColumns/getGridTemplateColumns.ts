export const getGridTemplateColumns = (
  columns: Array<{ width?: string | number }>,
) => {
  const columnsWidth = columns.map(({ width }) => width || '1fr');

  return columnsWidth.join(' ');
};
