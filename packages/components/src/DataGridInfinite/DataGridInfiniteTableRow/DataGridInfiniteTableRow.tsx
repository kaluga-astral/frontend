import { TableCell, TableRow } from '../../Table';
import { Checkbox } from '../../Checkbox';
import { useDataGridCommonUtils } from '../../DataGrid/hooks';

type DataGridInfiniteTableRowProps<TData extends Record<string, unknown>> = {
  row: TData;
  renderCells: (row: TData, rowId: string) => JSX.Element[];
  keyId: keyof TData;
  isSelectable: boolean;
  selectedRows: TData[];
  onRowClick?: ((row: TData) => void) | undefined;
  onSelectRow?: (row: TData[]) => void;
  activeRowId?: string;
};

export const DataGridInfiniteTableRow = <
  TData extends Record<string, unknown>,
>({
  row,
  keyId,
  isSelectable,
  selectedRows = [],
  onRowClick,
  onSelectRow,
  activeRowId,
  renderCells,
  ...props
}: DataGridInfiniteTableRowProps<TData>) => {
  const { handleSelectRow } = useDataGridCommonUtils<TData>({
    selectedRows,
    keyId,
    onSelectRow,
  });
  const rowId = row[keyId] as string;
  const checked =
    isSelectable &&
    Boolean(selectedRows.find((selectedRow) => selectedRow[keyId] === rowId));
  const handleRowClick = (itemRow: TData) => () => {
    if (onRowClick) {
      onRowClick(itemRow);
    }
  };

  return (
    <TableRow
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
