import { CHANGELOG_DIR_URL } from '../../config';

export const generateLinkToChangelog = (fileName: string, section?: string) =>
  CHANGELOG_DIR_URL + fileName + (section ? `#-${section}` : '');
