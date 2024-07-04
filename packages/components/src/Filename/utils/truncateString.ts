import { COMPLEX_EXTENSIONS } from '../constants';

export const truncateString = (fileName: string, maxLength: number): string => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  for (const ext of COMPLEX_EXTENSIONS) {
    if (fileName.endsWith(ext)) {
      const extension = fileName.slice(fileName.length - ext.length);
      const beforeExtension = fileName.slice(
        fileName.length - ext.length - 2,
        fileName.length - ext.length,
      );

      return `${fileName.slice(0, maxLength - 3 - ext.length)}...${beforeExtension}${extension}`;
    }
  }

  const extensionIndex = fileName.lastIndexOf('.');
  let truncatedFilename = fileName.slice(0, maxLength - 3);

  if (extensionIndex !== -1 && fileName.length - extensionIndex <= 5) {
    const extension = fileName.slice(extensionIndex - 2);

    truncatedFilename += `...${extension}`;
  } else {
    truncatedFilename += '...';
  }

  return truncatedFilename;
};
