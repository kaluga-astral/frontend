import { type DisabledItem } from '../TreeList/types';

export type FormatDisableItem = { id: string; disableReason?: string };

export const getFormatDisabledItems = (
  disabledItems: Array<DisabledItem> | null | undefined,
): Array<FormatDisableItem> => {
  return (
    disabledItems?.map((item) => {
      if (typeof item === 'string') {
        return { id: item };
      } else {
        return item;
      }
    }) || []
  );
};
