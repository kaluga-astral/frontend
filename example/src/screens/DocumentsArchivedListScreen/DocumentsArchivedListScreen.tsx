import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { LegacyGrid, PageLayout, SearchField } from '@example/shared';
import {
  ArchivedList,
  ArchivedStatusFilter,
  createDocumentsArchiveListStore,
  useDocumentsQuery,
} from '@example/modules/DocumentsModule';

type Props = {
  handleRedirectToArchivedDocument: ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => void;
};

export const DocumentsArchivedListScreen = observer(
  ({ handleRedirectToArchivedDocument }: Props) => {
    const [
      {
        archived,
        setArchivedDocuments,
        getFetchQueryParams,
        loadingState,
        searchValue,
        handleChangeSearch,
        sorting,
        handleChangeSort,
        page,
        handleChangePage,
        filters,
        handleChangeFilter,
      },
    ] = useState(createDocumentsArchiveListStore());

    const query = useDocumentsQuery(getFetchQueryParams());

    useEffect(() => {
      setArchivedDocuments(query);
    }, [query.data]);

    return (
      <PageLayout
        header={{
          title: 'Мои документы: Архив',
          subheader: (
            <LegacyGrid
              container
              templateColumns="240px repeat(2, 192px)"
              spacing={2}
            >
              <SearchField
                onChangeSearch={handleChangeSearch}
                searchValue={searchValue}
              />
              <ArchivedStatusFilter
                onChangeFilter={handleChangeFilter}
                filter={filters.status}
              />
            </LegacyGrid>
          ),
        }}
        content={{
          children: (
            <ArchivedList
              archived={archived}
              isLoading={loadingState.isLoading}
              page={page}
              onChangePage={handleChangePage}
              onSort={handleChangeSort}
              sorting={sorting}
              onRowClick={handleRedirectToArchivedDocument}
            />
          ),
          isPaddingDisabled: false,
        }}
      />
    );
  },
);
