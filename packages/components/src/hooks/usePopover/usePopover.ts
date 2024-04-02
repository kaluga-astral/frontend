import { type SyntheticEvent, useState } from 'react';

export type AnchorType = Element | null | undefined;

export type UsePopoverResult = {
  isOpen: boolean;
  anchor: AnchorType;
  actions: {
    open: (event: SyntheticEvent) => void;
    close: () => void;
  };
};

export const usePopover = (): UsePopoverResult => {
  const [anchor, setAnchor] = useState<AnchorType>(null);

  const open = (event: SyntheticEvent) => setAnchor(event.currentTarget);

  const close = () => setAnchor(null);

  const actions = {
    open,
    close,
  };

  return { isOpen: Boolean(anchor), anchor, actions };
};
