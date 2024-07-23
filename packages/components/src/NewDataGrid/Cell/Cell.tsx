import { type ReactNode } from 'react';

import { OverflowTypography } from '../../OverflowTypography';
import type { CellValue, DataGridColumns } from '../types';

import { useLogic } from './useLogic';
import { Wrapper } from './styles';

export type CellProps<TData extends Record<string, CellValue>> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Данные строки для отображения
   */
  row: TData;

  cell: DataGridColumns<TData>;

  /**
   * Дополнительное содержимое ячейки, которое будет распложено справа
   */
  startAdornment?: ReactNode;

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   */
  emptyCellValue?: ReactNode;

  /**
   * Если true, ячейка будет недоступна для взаимодействия
   */
  isDisabled?: boolean;
};

export const Cell = <TData extends Record<string, CellValue>>(
  props: CellProps<TData>,
) => {
  const { formattedValue, hasStartAdornment } = useLogic(props);

  const { className, startAdornment, row, cell, isDisabled } = props;
  const { renderCell, align = 'left' } = cell;

  return (
    <Wrapper
      $isDisabled={isDisabled}
      $align={align}
      $hasStartAdornment={hasStartAdornment}
      className={className}
      {...{ inert: isDisabled ? '' : undefined }}
    >
      {startAdornment && startAdornment}
      {renderCell && renderCell(row)}
      {!renderCell && (
        <OverflowTypography rowsCount={2}>
          <>{formattedValue}</>
        </OverflowTypography>
      )}
    </Wrapper>
  );
};
