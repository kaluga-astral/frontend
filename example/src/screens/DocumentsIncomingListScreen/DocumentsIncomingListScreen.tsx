import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import {
  BlockOutlineMd,
  CheckOutlineMd,
  Grid,
  PageLayout,
  SearchField,
} from '@example/shared';
import {
  UnsignedList,
  createDocumentsUnsignedListStore,
  useDocumentsQuery,
} from '@example/modules/DocumentsModule';

type Props = {
  handleRedirectToUnsignedDocument: ({
    documentPackageId,
  }: {
    documentPackageId: string;
  }) => void;
};

export const DocumentsIncomingListScreen = observer(
  ({ handleRedirectToUnsignedDocument }: Props) => {
    const [
      {
        unsigned,
        setUnsignedDocuments,
        getFetchQueryParams,
        loadingState,
        searchValue,
        handleChangeSearch,
        isDisabledHeaderActions,
        sorting,
        handleChangeSort,
        selected,
        handleSelectRows,
        page,
        handleChangePage,
      },
    ] = useState(createDocumentsUnsignedListStore());

    const query = useDocumentsQuery(getFetchQueryParams());

    useEffect(() => {
      setUnsignedDocuments(query);
    }, [query.data]);

    return (
      <PageLayout
        header={{
          title: 'Мои документы: Входящие',
          actions: {
            main: [
              {
                variant: 'light',
                text: 'Отклонить',
                color: 'error',
                startIcon: <BlockOutlineMd />,
                disabled: isDisabledHeaderActions,
              },
              {
                variant: 'contained',
                text: 'Подписать и отправить',
                startIcon: <CheckOutlineMd />,
                disabled: isDisabledHeaderActions,
              },
            ],
          },
          subheader: (
            <Grid
              container
              templateColumns="240px repeat(2, 192px)"
              spacing={2}
            >
              <SearchField
                onChangeSearch={handleChangeSearch}
                searchValue={searchValue}
              />
            </Grid>
          ),
        }}
        content={{
          children: (
            <UnsignedList
              unsigned={unsigned}
              isLoading={loadingState.isLoading}
              page={page}
              onChangePage={handleChangePage}
              onSort={handleChangeSort}
              sorting={sorting}
              selected={selected}
              onSelectRow={handleSelectRows}
              onRowClick={handleRedirectToUnsignedDocument}
            />
          ),
          isPaddingDisabled: false,
        }}
      />
    );
  },
);
