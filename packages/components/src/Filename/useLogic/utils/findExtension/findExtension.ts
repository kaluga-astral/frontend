import { COMPLEX_EXTENSIONS } from './constants';

export const findExtension = (filename: string): string => {
  for (const ext of COMPLEX_EXTENSIONS) {
    if (filename.endsWith(ext)) {
      return ext;
    }
  }

  const extensionIndex = filename.lastIndexOf('.');

  if (extensionIndex !== -1) {
    const extension = filename.slice(extensionIndex);

    if (extension.length <= 5) {
      return extension;
    }
  }

  return '';
};
