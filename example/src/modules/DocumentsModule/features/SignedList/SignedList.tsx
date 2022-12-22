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
  DocumentsSignedListSorting,
  getPackageDownloadUrl,
} from '../../domain';
import { DocumentPackagesDTO, DocumentPackagesListDTO } from '../../data';
import { SignerCell } from '../SignerCell';
import { ListActionsCell } from '../ListActionsCell';

import { createSignedListStore } from './store';

type SignedListProps = {
  signed: DocumentPackagesListDTO;
  isLoading: boolean;
  page: number;
  onChangePage: (_event: ChangeEvent<unknown>, page: number) => void;
  onSort: (sorting?: DataGridSort<DocumentsSignedListSorting>) => void;
  sorting?: DataGridSort<DocumentsSignedListSorting>;
  onRowClick: ({ documentPackageId }: { documentPackageId: string }) => void;
  refetchList: () => void;
};

export const SignedList = observer((props: SignedListProps) => {
  const {
    signed,
    isLoading,
    page,
    onChangePage,
    onSort,
    sorting,
    onRowClick,
    refetchList,
  } = props;

  const [
    {
      formatCompletedDate,
      handleArchiveButtonClick,
      isLoading: isArchiveButtonLoading,
    },
  ] = useState(createSignedListStore());

  const signedListColumns =
    useMemo((): DataGridColumns<DocumentPackagesDTO>[] => {
      return [
        {
          field: 'completedAt',
          label: 'Дата отправки',
          sortable: true,
          width: '15%',
          format: formatCompletedDate,
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
          width: '25%',
          renderCell: ({ performer }) => (
            <OverflowTypography>{performer.email}</OverflowTypography>
          ),
        },
        {
          field: 'performer',
          label: 'Сертификат ЭП',
          width: '30%',
          renderCell: ({ certificateInfo }) => (
            <SignerCell
              person={certificateInfo?.person}
              organization={certificateInfo?.organization}
            />
          ),
        },
        {
          label: 'Действия',
          width: '1%',
          renderCell: (row) => (
            <ListActionsCell
              row={row}
              ArchiveButtonProps={{
                onClick: handleArchiveButtonClick({
                  data: row,
                  refetchList,
                }),
                // todo: заменить на loading после готовности задачи UIKIT-398
                disabled: isArchiveButtonLoading,
              }}
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
    }, [
      formatCompletedDate,
      handleArchiveButtonClick,
      refetchList,
      isArchiveButtonLoading,
    ]);

  return (
    <DataGrid
      keyId="documentPackageId"
      rows={signed.items}
      columns={signedListColumns}
      loading={isLoading}
      sorting={sorting}
      onSort={onSort}
      onRowClick={onRowClick}
      Footer={
        <DataGridPagination
          rowsPerPage={10}
          totalCount={signed.totalCount}
          onChange={onChangePage}
          page={page}
        />
      }
    />
  );
});
