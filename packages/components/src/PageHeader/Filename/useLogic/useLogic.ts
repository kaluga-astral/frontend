import { priorityExtensions } from '../constants';

export const useLogic = () => {
  const getFileExtension = (fileName: string): string => {
    for (const ext of priorityExtensions) {
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

  return { getFileExtension };
};
