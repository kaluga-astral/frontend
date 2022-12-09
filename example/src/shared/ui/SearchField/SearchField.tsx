import { ChangeEvent } from 'react';

import { SearchOutlineMd } from '../../ui/icons';
import { TextField } from '../../ui/external';

type Props = {
  onChangeSearch: (search: string) => void;
  searchValue: string;
  placeholder?: string;
};

export const SearchField = ({
  onChangeSearch,
  searchValue,
  placeholder = 'Поиск по наименованию',
}: Props) => {
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onChangeSearch(value);
  };

  return (
    <TextField
      value={searchValue}
      fullWidth
      size="small"
      placeholder={placeholder}
      onChange={handleChangeSearch}
      InputProps={{
        startAdornment: <SearchOutlineMd />,
      }}
    />
  );
};
