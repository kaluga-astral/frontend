import { COMPLEX_EXTENSIONS } from '../../constants';

export const getFileExtension = (fileName: string): string => {
  for (const ext of COMPLEX_EXTENSIONS) {
    if (fileName.endsWith(ext)) {
      return ext;
    }
  }

  const lastDotIndex = fileName.lastIndexOf('.');

  if (!lastDotIndex) {
    return '';
  } else {
    return fileName.slice(lastDotIndex);
  }
};
