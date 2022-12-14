import { ChangeEvent, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';

import {
  DataGrid,
  DataGridColumns,
  DataGridPagination,
  DataGridSort,
  OverflowTypography,
} from '@example/shared';

import {
  DocumentsUnsignedListSorting,
  getPackageDownloadUrl,
} from '../../domain';
import { DocumentPackagesDTO, DocumentPackagesListDTO } from '../../data';
import { ListActionsCell } from '../ListActionsCell';

import { createUnsignedListStore } from './store';

type PublishedListProps = {
  unsigned: DocumentPackagesListDTO;
  isLoading: boolean;
  page: number;
  onChangePage: (_event: ChangeEvent<unknown>, page: number) => void;
  onSort: (sorting?: DataGridSort<DocumentsUnsignedListSorting>) => void;
  sorting?: DataGridSort<DocumentsUnsignedListSorting>;
  selected: DocumentPackagesDTO[];
  onSelectRow: (rows: DocumentPackagesDTO[]) => void;
  onRowClick: ({ documentPackageId }: { documentPackageId: string }) => void;
};

export const UnsignedList = observer(
  ({
    unsigned,
    isLoading,
    page,
    onChangePage,
    onSort,
    sorting,
    selected,
    onSelectRow,
    onRowClick,
  }: PublishedListProps) => {
    const [{ formatCreatedDate }] = useState(createUnsignedListStore());

    const unsignedListColumns =
      useMemo((): DataGridColumns<DocumentPackagesDTO>[] => {
        return [
          {
            field: 'displayName',
            label: 'Наименование',
            renderCell: ({ displayName }) => (
              <OverflowTypography>{displayName}</OverflowTypography>
            ),
          },
          {
            field: 'createdAt',
            label: 'Время получения',
            sortable: true,
            format: formatCreatedDate,
          },
          {
            field: 'requester',
            label: 'Отправитель',
            format: ({ requester }) => requester.email,
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
                RejectButtonProps={{
                  onClick: () => {},
                }}
                ProcessButtonProps={{
                  onClick: () => {},
                }}
              />
            ),
          },
        ];
      }, [formatCreatedDate]);

    return (
      <DataGrid
        keyId="documentPackageId"
        rows={unsigned.items}
        columns={unsignedListColumns}
        loading={isLoading}
        sorting={sorting}
        onSort={onSort}
        selectedRows={selected}
        onSelectRow={onSelectRow}
        onRowClick={onRowClick}
        Footer={
          <DataGridPagination
            rowsPerPage={10}
            totalCount={unsigned.totalCount}
            onChange={onChangePage}
            page={page}
          />
        }
      />
    );
  },
);
