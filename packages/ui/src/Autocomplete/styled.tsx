import { Autocomplete } from '@mui/material';

import { styled } from '../styles';

import { AutocompleteProps } from './types';
import { AutocompleteSizes } from './constants';

const getAutocompleteHeight = ({ size }: Pick<AutocompleteProps, 'size'>) => {
  if (size === AutocompleteSizes.small) return '32px';

  return '40px';
};

export const StyledAutocomplete = styled(Autocomplete)<AutocompleteProps>`
  padding: ${({ theme }) => theme.spacing(1)};

  .MuiAutocomplete-clearIndicator {
    padding: 0;
  }

  .MuiOutlinedInput-root.MuiInputBase-sizeSmall {
    padding: 0;
  }

  .MuiOutlinedInput-root {
    padding: 0;
    min-height: ${getAutocompleteHeight};
  }
`;
