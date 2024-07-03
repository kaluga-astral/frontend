import { forwardRef } from 'react';
import { type TableCellProps as MuiTableCellProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

import { DisabledCellContent, StyledTableCell } from './styles';

export type TableCellProps = WithoutEmotionSpecific<MuiTableCellProps> & {
  isDisabled?: boolean;
};

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (props: TableCellProps, ref) => {
    const { isDisabled, children, ...rest } = props;

    return (
      <StyledTableCell $isDisabled={isDisabled} {...rest} ref={ref}>
        {isDisabled ? (
          <DisabledCellContent {...{ inert: isDisabled ? '' : undefined }}>
            {children}
          </DisabledCellContent>
        ) : (
          children
        )}
      </StyledTableCell>
    );
  },
);
