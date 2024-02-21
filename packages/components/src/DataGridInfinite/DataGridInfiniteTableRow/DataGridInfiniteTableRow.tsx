import { TableCell, TableRow } from '../../Table';
import { Checkbox } from '../../Checkbox';
import { useDataGridCommonUtils } from '../../DataGrid/hooks';

type DataGridInfiniteTableRowProps<Data extends Record<string, unknown>> = {
  item: Data;
  renderCells: (row: Data, rowId: string) => JSX.Element[];
  keyId: string;
  isSelectable: boolean;
  selectedRows: Data[];
  onRowClick?: ((row: Data) => void) | undefined;
  onSelectRow?: (row: Data[]) => void;
  activeRowId?: string;
};

export const DataGridInfiniteTableRow = <Data extends Record<string, unknown>>({
  item,
  keyId,
  isSelectable,
  selectedRows = [],
  onRowClick,
  onSelectRow,
  activeRowId,
  renderCells,
  ...props
}: DataGridInfiniteTableRowProps<Data>) => {
  const { handleSelectRow } = useDataGridCommonUtils<Data>({
    selectedRows,
    keyId,
    onSelectRow,
  });
  const row = item;
  const rowId = row[keyId] as string;
  const checked =
    isSelectable &&
    Boolean(selectedRows.find((selectedRow) => selectedRow[keyId] === rowId));
  const handleRowClick = (itemRow: Data) => () => {
    if (onRowClick) {
      onRowClick(itemRow);
    }
  };

  return (
    <TableRow
      key={keyId}
      hover={Boolean(onRowClick)}
      selected={activeRowId === rowId}
      onClick={handleRowClick(row)}
      {...props}
    >
      {isSelectable && (
        <TableCell
          padding="checkbox"
          onClick={(event) => event.stopPropagation()}
        >
          <Checkbox checked={checked} onChange={handleSelectRow(row)} />
        </TableCell>
      )}
      {renderCells(row, rowId)}
    </TableRow>
  );
};
