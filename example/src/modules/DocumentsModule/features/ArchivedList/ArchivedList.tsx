import { ChangeEvent, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';

import {
  DataGrid,
  DataGridColumns,
  DataGridPagination,
  DataGridSort,
  OverflowTypography,
} from '@example/shared';

import { ListActionsCell } from '../ListActionsCell';
import { StatusCell } from '../StatusCell';
import {
  DocumentsUnsignedListSorting,
  getPackageDownloadUrl,
} from '../../domain';
import { DocumentPackagesDTO, DocumentPackagesListDTO } from '../../data';

import { createArchivedListStore } from './store';

type ArchivedListProps = {
  archived: DocumentPackagesListDTO;
  isLoading: boolean;
  page: number;
  onChangePage: (_event: ChangeEvent<unknown>, page: number) => void;
  onSort: (sorting?: DataGridSort<DocumentsUnsignedListSorting>) => void;
  sorting?: DataGridSort<DocumentsUnsignedListSorting>;
  onRowClick: ({ documentPackageId }: { documentPackageId: string }) => void;
};

export const ArchivedList = observer(
  ({
    archived,
    isLoading,
    page,
    onChangePage,
    onSort,
    sorting,
    onRowClick,
  }: ArchivedListProps) => {
    const [{ formatUpdateDate }] = useState(createArchivedListStore());

    const unsignedListColumns =
      useMemo((): DataGridColumns<DocumentPackagesDTO>[] => {
        return [
          {
            field: 'updatedAt',
            label: 'Дата изменения',
            sortable: true,
            format: formatUpdateDate,
          },

          {
            field: 'displayName',
            label: 'Наименование',
            renderCell: ({ displayName }) => (
              <OverflowTypography>{displayName}</OverflowTypography>
            ),
          },
          {
            field: 'performer',
            label: 'Получатель',
            format: ({ performer }) => performer?.email,
          },
          {
            field: 'state',
            label: 'Статус',
            renderCell: ({ state, stateDisplayName }) => (
              <StatusCell status={state} statusDisplayName={stateDisplayName} />
            ),
          },
          {
            label: 'Действия',
            width: '1%',
            renderCell: (row) => (
              <ListActionsCell
                row={row}
                DownloadArchiveButtonProps={{
                  // todo: что-то не так с типизацией BaseButtonProps, component принимает только button
                  // @ts-ignore
                  component: 'a',
                  href: getPackageDownloadUrl(row.documentPackageId),
                }}
              />
            ),
          },
        ];
      }, [formatUpdateDate]);

    return (
      <DataGrid
        keyId="documentPackageId"
        rows={archived.items}
        columns={unsignedListColumns}
        loading={isLoading}
        sorting={sorting}
        onSort={onSort}
        onRowClick={onRowClick}
        Footer={
          <DataGridPagination
            rowsPerPage={10}
            totalCount={archived.totalCount}
            onChange={onChangePage}
            page={page}
          />
        }
      />
    );
  },
);
