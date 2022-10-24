import { AutocompleteCloseReason } from '@mui/base/AutocompleteUnstyled/useAutocomplete';

export type WithoutEmotionSpecific<Props> = Omit<Props, 'sx' | 'css'>;

export type Reason =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'toggleInput'
  | 'blur'
  | AutocompleteCloseReason
  | null;
