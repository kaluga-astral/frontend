import { type ReactNode, useMemo } from 'react';
import { SortDownFillSm, SortFillSm, SortUpFillSm } from '@astral/icons';

import { SortStates } from '../enums';
import type { AlignVariant, DataGridRow, DataGridSort } from '../types';

import { useLogic } from './useLogic';
import { StyledTypography, Wrapper } from './styles';

export type HeadCellProps<
  TData = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  onSort: (field: TSortField) => void;
  sorting?: DataGridSort<TSortField>;
  label?: string;

  isSortable?: boolean;

  /**
   * Выравнивание содержимого ячейки по горизонтали
   */
  align?: AlignVariant;

  field?: keyof TData;

  /**
   * Дополнительное содержимое ячейки, которое будет распложено справа
   */
  startAdornment?: ReactNode;
};

export const HeadCell = <TData, TSortField extends keyof TData>(
  props: HeadCellProps<TData, TSortField>,
) => {
  const { wrapperProps } = useLogic(props);

  const { startAdornment, field, isSortable, align, label, sorting } = props;

  const sortIcon = useMemo(() => {
    if (!isSortable) {
      return null;
    }

    if (sorting?.fieldId !== field) {
      return <SortFillSm />;
    }

    switch (sorting?.sort) {
      case SortStates.ASC:
        return <SortUpFillSm color="primary" />;
      case SortStates.DESC:
        return <SortDownFillSm color="primary" />;
      default:
        return <SortFillSm />;
    }
  }, [sorting, isSortable, field]);

  return (
    <Wrapper $align={align} $isSortable={isSortable} {...wrapperProps}>
      {startAdornment && startAdornment}
      <StyledTypography variant="pointer">
        {label}
        {sortIcon}
      </StyledTypography>
    </Wrapper>
  );
};
