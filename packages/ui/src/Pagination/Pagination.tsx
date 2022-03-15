import { Pagination as MuiPagination } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import React, { VFC } from 'react';
import { PaginationRenderItemParams } from '@mui/material';

import { StyledPaginationItem } from './styled';

export const Pagination: VFC = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => apiRef.current.setPage(value - 1);

  const renderItem = (item: PaginationRenderItemParams) => (
    <StyledPaginationItem {...item} />
  );

  return (
    <MuiPagination
      shape="rounded"
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={handleChangePage}
      renderItem={renderItem}
    />
  );
};
