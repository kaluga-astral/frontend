import { findExtension } from '../findExtension';

export const truncateString = (fileName: string) => {
  const extension = findExtension(fileName);

  if (fileName.endsWith(extension)) {
    const baseName = fileName.slice(0, fileName.length - extension.length - 2);
    const ext = fileName.slice(fileName.length - extension.length - 2);

    return { baseName, ext };
  } else {
    const baseName = fileName.slice(0, fileName.length - 2);
    const ext = fileName.slice(fileName.length - 2);

    return { baseName, ext };
  }
};
