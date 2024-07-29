import { COMPLEX_EXTENSIONS } from './constants';

export const findExtension = (filename: string) => {
  for (const fileExtension of COMPLEX_EXTENSIONS) {
    if (filename.endsWith(fileExtension)) {
      return fileExtension;
    }
  }

  const extensionIndex = filename.lastIndexOf('.');

  if (extensionIndex !== -1) {
    return filename.slice(extensionIndex);
  }

  return undefined;
};
