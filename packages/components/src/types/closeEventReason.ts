import { type AutocompleteCloseReason } from '@mui/base';

/**
 * список возможных причин закрытия попперов, модалок, тултипов,
 * является абстрактным способом связать сущности всплывашек с BackdropStackManager
 */
export type CloseEventReason =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'clickAway'
  | 'focusAway'
  | 'toggleInput'
  | 'blur'
  | AutocompleteCloseReason
  | null;
