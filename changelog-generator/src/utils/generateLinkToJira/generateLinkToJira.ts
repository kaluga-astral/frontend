import { JIRA_URL } from '../../config';

export const generateLinkToJira = (storyNumber: string) => `${JIRA_URL}${storyNumber}`;
