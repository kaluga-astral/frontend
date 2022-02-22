import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

import { TextFieldProps } from '../TextField';

import { AutocompleteSizes } from './constants';

export type AutocompleteValueProps = {
  title: string;
  value: string;
};

type AutocompleteSize = `${AutocompleteSizes}`;

export type AutocompleteProps = Omit<
  MuiAutocompleteProps<AutocompleteValueProps, boolean, false, false>,
  'size'
> &
  Pick<TextFieldProps, 'error' | 'success' | 'helperText' | 'label'> & {
    size?: AutocompleteSize;
  };
