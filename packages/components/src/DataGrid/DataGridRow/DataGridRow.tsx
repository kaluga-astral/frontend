import {
  type ChangeEvent,
  type MouseEvent,
  type ReactNode,
  useState,
} from 'react';

import { Checkbox } from '../../Checkbox';
import { TableCell, TableRow } from '../../Table';
import { Tooltip } from '../../Tooltip';
import type { DataGridRowOptions } from '../types';

export type DataGridRowProps<Data extends Record<string, unknown>> = {
  keyId: keyof Data;
  row: Data;
  activeRowId?: string;
  selectable?: boolean;
  selectedRows?: Array<Data>;
  options?: DataGridRowOptions;
  children: ReactNode;
  onSelectRow: (row: Data) => (event: ChangeEvent<HTMLInputElement>) => void;
  onRowClick?: (row: Data) => void;
};

export const DataGridRow = <Data extends Record<string, unknown>>({
  keyId,
  activeRowId,
  selectable,
  selectedRows,
  options,
  row,
  children,
  onSelectRow,
  onRowClick,
}: DataGridRowProps<Data>) => {
  const [isVisibleTooltip, setVisibleTooltip] = useState<boolean>(false);

  const { isDisabled, disabledReason } = options || {};
  const rowId = row[keyId] as string;
  const checked =
    selectable &&
    Boolean(selectedRows?.find((selectedRow) => selectedRow[keyId] === rowId));

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (isDisabled && element.tagName !== 'TD') {
      setVisibleTooltip(false);
    }
  };

  const handleRowClick = (row: Data, isDisabled?: boolean) => () => {
    if (isDisabled) {
      return undefined;
    }

    onRowClick?.(row);
  };

  return (
    <Tooltip
      title={isDisabled && disabledReason}
      followCursor
      arrow={false}
      open={isVisibleTooltip}
      onOpen={() => setVisibleTooltip(true)}
      onClose={() => setVisibleTooltip(false)}
    >
      <TableRow
        hover={Boolean(!isDisabled && onRowClick)}
        selected={activeRowId === rowId}
        onClick={handleRowClick(row as Data, isDisabled)}
        onMouseMove={handleMouseMove}
      >
        {selectable && (
          <TableCell
            padding="checkbox"
            onClick={(event) => event.stopPropagation()}
          >
            <Checkbox
              checked={checked}
              disabled={isDisabled}
              onChange={onSelectRow(row as Data)}
            />
          </TableCell>
        )}
        {children}
      </TableRow>
    </Tooltip>
  );
};
