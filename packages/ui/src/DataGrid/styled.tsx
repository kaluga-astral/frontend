import { DataGrid } from '@mui/x-data-grid';

import { styled } from '../styles';

export const DataGridStyled = styled(DataGrid)`
  &.MuiDataGrid-root {
    border: none;

    .MuiDataGrid-iconButtonContainer {
      width: 0 !important;

      visibility: visible;

      .MuiIconButton-root {
        margin-left: ${({ theme }) => theme.spacing(1)};
        padding: ${({ theme }) => theme.spacing(1)};

        border-radius: ${({ theme }) => theme.shape.small};
      }

      .MuiSvgIcon-root {
        opacity: 1 !important;
      }
    }

    & .MuiDataGrid-columnHeader {
      padding: 0;
    }

    & .MuiDataGrid-columnSeparator {
      visibility: hidden;
    }

    & .MuiDataGrid-cell--withRenderer,
    & .MuiDataGrid-cell {
      border-bottom: none;
    }

    & .MuiDataGrid-cell:focus {
      outline: none;
    }

    .MuiDataGrid-columnHeaderCheckbox {
      width: 40px;
      min-width: 40px !important;
      max-width: 40px !important;
      height: 44px;

      .MuiSvgIcon-root {
        width: 14px;
        height: 14px;
      }
    }

    .MuiDataGrid-cellCheckbox {
      width: 40px;
      min-width: 40px !important;
      max-width: 40px !important;
      height: 44px;

      .MuiSvgIcon-root {
        width: 14px;
        height: 14px;
      }
    }

    .MuiDataGrid-columnHeaders {
      border-bottom: 2px solid ${({ theme }) => theme.palette.grey[300]};
    }

    .MuiDataGrid-columnHeader:focus-within,
    .MuiDataGrid-cell--withRenderer:focus-within,
    .MuiDataGrid-cellCheckbox:focus-within {
      border: none;
      outline: none;
    }

    .MuiDataGrid-columnHeaderTitle {
      color: ${({ theme }) => theme.palette.grey[700]};
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
