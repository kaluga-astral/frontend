import {
  AutocompleteRenderInputParams,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material';
import React from 'react';

export type AutocompleteValueProps = {
  title: string;
  value: string;
};

export type AutocompleteProps = Omit<
  MuiAutocompleteProps<AutocompleteValueProps, boolean, false, false>,
  'size' | 'renderInput'
> & {
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  label?: string;
  size?: 'medium' | 'small';
};
