import { VFC, memo } from 'react';
import { GridSelectionModel } from '@mui/x-data-grid';
import { SortFillSm } from '@astral/icons';

import { Pagination } from '../Pagination';

import { DataGridProps } from './types';
import { DataGridStyled } from './styled';

const DataGrid: VFC<DataGridProps<string>> = memo(
  ({
    onSelected,
    pageSize = 10,
    rowsPerPageOptions = [5],
    loading,
    ...props
  }) => {
    const rowHeight = 44;

    const handlerSelectRowId = (newSelectionModel: GridSelectionModel) => {
      const id = newSelectionModel as string[];

      if (onSelected) onSelected(id);
    };

    return (
      <>
        <div style={{ height: '100%', width: '100%' }}>
          <DataGridStyled
            checkboxSelection
            disableColumnMenu
            disableSelectionOnClick
            hideFooterSelectedRowCount
            {...props}
            components={{
              Pagination,
              ColumnSortedDescendingIcon: SortFillSm,
              ColumnSortedAscendingIcon: SortFillSm,
            }}
            rowHeight={rowHeight}
            headerHeight={rowHeight}
            onSelectionModelChange={handlerSelectRowId}
            rowsPerPageOptions={rowsPerPageOptions}
            pageSize={pageSize}
          />
        </div>
      </>
    );
  }
);

DataGrid.displayName = 'DataGrid';

export { DataGrid };
