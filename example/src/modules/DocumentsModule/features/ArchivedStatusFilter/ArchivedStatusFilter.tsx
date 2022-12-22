import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { MenuItem, Select } from '@example/shared';

import { DocumentPackageState } from '../../data';
import { ChangeFilterFunc, DOCUMENT_STATUS } from '../../domain';

import { createArchiveFiltersStore } from './store';

type Props = {
  onChangeFilter: ChangeFilterFunc;
  filter?: DocumentPackageState;
};

export const ArchivedStatusFilter = observer(
  ({ onChangeFilter, filter = DocumentPackageState.Unknown }: Props) => {
    const [{ getOptionLabel, handleChangeFilter, archivedStatusList }] =
      useState(createArchiveFiltersStore);

    return (
      <Select
        placeholder="Статус"
        value={filter}
        size="small"
        onChange={handleChangeFilter(onChangeFilter, 'status')}
        getOptionLabel={getOptionLabel}
      >
        {archivedStatusList.map((status) => (
          <MenuItem key={status} value={status}>
            {DOCUMENT_STATUS[status]}
          </MenuItem>
        ))}
      </Select>
    );
  },
);
