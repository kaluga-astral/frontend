import { forwardRef } from 'react';
import type { TableCellProps as MuiTableCellProps } from '@mui/material';

import type { WithoutEmotionSpecific } from '../../types';

import { StyledTableCell } from './styles';

export type TableCellProps = WithoutEmotionSpecific<MuiTableCellProps> & {
  isDisabled?: boolean;
};

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (props: TableCellProps, ref) => {
    const { isDisabled, children, ...rest } = props;

    return (
      <StyledTableCell $isDisabled={isDisabled} {...rest} ref={ref}>
        {isDisabled ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div {...{ inert: isDisabled ? '' : undefined }}>{children}</div>
        ) : (
          children
        )}
      </StyledTableCell>
    );
  },
);
