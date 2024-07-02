import { type ChangeEvent, type ReactNode } from 'react';

import { Checkbox } from '../../Checkbox';
import { TableCell, TableRow } from '../../Table';
import { Tooltip } from '../../Tooltip';
import type { DataGridRowOptions } from '../types';

import { useLogic } from './useLogic';

export type DataGridRowProps<TData extends Record<string, unknown>> = {
  keyId: keyof TData;
  row: TData;
  activeRowId?: string;
  selectable?: boolean;
  selectedRows?: Array<TData>;
  options?: DataGridRowOptions;
  children: ReactNode;
  onSelectRow: (row: TData) => (event: ChangeEvent<HTMLInputElement>) => void;
  onRowClick?: (row: TData) => void;
};

export const DataGridRow = <TData extends Record<string, unknown>>({
  selectable,
  children,
  ...props
}: DataGridRowProps<TData>) => {
  const { checkboxProps, tableRowProps, tooltipProps } = useLogic({
    selectable,
    ...props,
  });

  return (
    <Tooltip followCursor arrow={false} {...tooltipProps}>
      <TableRow {...tableRowProps}>
        {selectable && (
          <TableCell
            padding="checkbox"
            onClick={(event) => event.stopPropagation()}
          >
            <Checkbox {...checkboxProps} />
          </TableCell>
        )}
        {children}
      </TableRow>
    </Tooltip>
  );
};
