import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

import { TextFieldProps } from '../TextField';

import { AutocompleteSizes } from './constants';

export type AutocompleteSize = `${AutocompleteSizes}`;

export type AutocompleteProps<
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean
> = Omit<
  MuiAutocompleteProps<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  'size' | 'renderInput'
> &
  Pick<TextFieldProps, 'error' | 'success' | 'helperText' | 'label'> & {
    size?: AutocompleteSize;
  };
