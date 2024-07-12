import { type ReactNode } from 'react';

import { OverflowTypography } from '../../OverflowTypography';
import type { DataGridColumns } from '../types';

import { useLogic } from './useLogic';
import { Wrapper } from './styles';

export type CellProps<TData extends object> = {
  row: TData;
  cell: DataGridColumns<TData>;

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   */
  emptyCellValue?: ReactNode;

  /**
   * Если true, ячейка будет недоступна для взаимодействия
   */
  isDisabled?: boolean;
};

export const Cell = <TData extends object>(props: CellProps<TData>) => {
  const { formattedValue } = useLogic(props);

  const { row, cell, isDisabled } = props;
  const { renderCell, align = 'left' } = cell;

  return (
    <Wrapper
      $isDisabled={isDisabled}
      $align={align}
      {...{ inert: isDisabled ? '' : undefined }}
    >
      {renderCell && renderCell(row)}
      {!renderCell && (
        <OverflowTypography rowsCount={2}>
          <>{formattedValue}</>
        </OverflowTypography>
      )}
    </Wrapper>
  );
};
