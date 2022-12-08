import { AutocompleteCloseReason } from '@mui/base/AutocompleteUnstyled/useAutocomplete';

export type WithoutEmotionSpecific<Props> = Omit<Props, 'sx' | 'css'>;

export type CloseEventReason =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'awayClick'
  | 'toggleInput'
  | 'blur'
  | AutocompleteCloseReason
  | null;
