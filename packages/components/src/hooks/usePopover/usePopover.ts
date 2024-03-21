import { type MouseEvent, useState } from 'react';

export type AnchorType = Element | null | undefined;

export type UsePopoverResult = [
  AnchorType,
  {
    open: (event: MouseEvent) => void;
    close: () => void;
  },
];

export const usePopover = (): UsePopoverResult => {
  const [anchor, setAnchor] = useState<AnchorType>(null);

  const open = (event: MouseEvent) => setAnchor(event.currentTarget);

  const close = () => setAnchor(null);

  const actions = {
    open,
    close,
  };

  return [anchor, actions];
};
