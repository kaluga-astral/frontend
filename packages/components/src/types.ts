import { AutocompleteCloseReason } from '@mui/base';

export type WithoutEmotionSpecific<Props> = Omit<Props, 'sx' | 'css'>;

/**
 * @description список возможных причин закрытия попперов, модалок, тултипов,
 * является абстрактным способом связать сущности всплывашек с BackdropStackManager
 */
export type CloseEventReason =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'clickAway'
  | 'toggleInput'
  | 'blur'
  | AutocompleteCloseReason
  | null;
