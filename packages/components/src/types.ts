import { type AutocompleteCloseReason } from '@mui/base';

export type WithoutEmotionSpecific<Props> = Omit<Props, 'sx' | 'css'>;

export type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => JSX.Element,
) => (props: P & React.RefAttributes<T>) => JSX.Element;

/**
 * @description список возможных причин закрытия попперов, модалок, тултипов,
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
