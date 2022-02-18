import { AutocompleteGroupedOption, UseAutocompleteProps } from '@mui/base';
import { AutocompleteValue } from '@mui/base/AutocompleteUnstyled/useAutocomplete';

export type AutocompleteValueProps = {
  title: string;
  value: string;
};

export type AutocompleteProps = UseAutocompleteProps<
  AutocompleteValueProps,
  boolean,
  false,
  false
> & {
  placeholder?: string;
  label?: string;
  startAdornment?: Element;
  endAdornment?: Element;
  helperText?: string;
  success?: boolean;
  error?: boolean;
  size?: string;
};
