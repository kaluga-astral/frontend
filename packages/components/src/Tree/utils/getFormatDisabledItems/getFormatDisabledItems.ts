import { type DisabledItemValue } from '../../TreeList/types';

export type FormatDisableItem = { id: string; disableReason?: string };

export const getFormatDisabledItems = (
  disabledItems: Array<DisabledItemValue> | null | undefined,
): Array<FormatDisableItem> => {
  return (
    disabledItems?.map((item) => {
      if (typeof item === 'string') {
        return { id: item };
      }

      return item;
    }) || []
  );
};
