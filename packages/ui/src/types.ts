import { AutocompleteCloseReason } from '@mui/base/AutocompleteUnstyled/useAutocomplete';

export type WithoutEmotionSpecific<Props> = Omit<Props, 'sx' | 'css'>;

/**
 * @description список возможных причин закрытия попперов, модалок, тултипов,
 * является абстрактным способом связать сущности всплывашек с BackdropStackManager
 */
export type CloseEventReason =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'awayClick'
  | 'toggleInput'
  | 'blur'
  | AutocompleteCloseReason
  | null;
