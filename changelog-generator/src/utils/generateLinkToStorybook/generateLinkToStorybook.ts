import { STORYBOOK_URL } from '../../config';

export const generateLinkToStorybook = (componentName: string) => {
  let section = 'components';

  if (Object.is(componentName, 'icons')) {
    section = 'icons';
  }

  return `${STORYBOOK_URL}?path=/docs/${section}-${componentName?.toLowerCase()}--docs`;
};
