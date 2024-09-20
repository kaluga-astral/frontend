import type { TagValue } from '../../types';

export const getKey = (option: TagValue, keyId: string): string => {
  if (typeof option === 'string') {
    return option;
  }

  const key = option[keyId];

  return typeof key === 'number' ? key.toString() : (key as string);
};
