import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { LegacyGrid, PageLayout, SearchField } from '@example/shared';
import {
  SignedList,
  createDocumentsSignedListStore,
  useDocumentsQuery,
} from '@example/modules/DocumentsModule';

type Props = {
  handleRedirectToSignedDocument: ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => void;
};

export const DocumentsSentListScreen = observer(
  ({ handleRedirectToSignedDocument }: Props) => {
    const [
      {
        signed,
        setSignedDocuments,
        getFetchQueryParams,
        loadingState,
        searchValue,
        handleChangeSearch,
        sorting,
        handleChangeSort,
        page,
        handleChangePage,
      },
    ] = useState(createDocumentsSignedListStore());

    const query = useDocumentsQuery(getFetchQueryParams());

    useEffect(() => {
      setSignedDocuments(query);
    }, [query.data]);

    return (
      <PageLayout
        header={{
          title: 'Мои документы: Отправленные',
          subheader: (
            <LegacyGrid container templateColumns="240px" spacing={2}>
              <SearchField
                onChangeSearch={handleChangeSearch}
                searchValue={searchValue}
              />
            </LegacyGrid>
          ),
        }}
        content={{
          children: (
            <SignedList
              signed={signed}
              isLoading={loadingState.isLoading}
              page={page}
              onChangePage={handleChangePage}
              onSort={handleChangeSort}
              sorting={sorting}
              onRowClick={handleRedirectToSignedDocument}
              refetchList={query.refetch}
            />
          ),
          isPaddingDisabled: false,
        }}
      />
    );
  },
);
