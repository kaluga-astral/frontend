import { findExtension } from '../findExtension';

import { SUFFIX_LENGTH } from './constants';

export const truncateString = (fileName: string) => {
  const fileExtension = findExtension(fileName);

  if (fileName.endsWith(fileExtension)) {
    const baseName = fileName.slice(
      0,
      fileName.length - fileExtension.length - SUFFIX_LENGTH,
    );
    const suffixWithExtension = fileName.slice(
      fileName.length - fileExtension.length - SUFFIX_LENGTH,
    );

    return { baseName, suffixWithExtension };
  }

  const baseName = fileName.slice(0, -SUFFIX_LENGTH);
  const suffixWithExtension = fileName.slice(-SUFFIX_LENGTH);

  return { baseName, suffixWithExtension };
};
