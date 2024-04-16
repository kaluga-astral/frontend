import { STORYBOOK_URL } from '../../config';

export const generateLinkToStorybook = (componentName: string) =>
  `${STORYBOOK_URL}?path=/docs/components-${componentName?.toLowerCase()}--docs`;
