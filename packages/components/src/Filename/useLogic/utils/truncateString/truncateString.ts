import { findExtension } from '../findExtension';

import { ELLIPSIS } from './constants';

export const truncateString = (fileName: string, maxLength: number): string => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const extension = findExtension(fileName);

  if (fileName.endsWith(extension)) {
    const beforeExtension = fileName.slice(
      fileName.length - extension.length - 2,
      fileName.length - extension.length,
    );

    return `${fileName.slice(0, maxLength - ELLIPSIS.length - extension.length)}${ELLIPSIS}${beforeExtension}${extension}`;
  }

  let truncatedFilename = fileName.slice(0, maxLength - ELLIPSIS.length);

  truncatedFilename += ELLIPSIS;

  return truncatedFilename;
};
