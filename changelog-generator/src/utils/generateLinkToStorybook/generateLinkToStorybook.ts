import { STORYBOOK_URL } from '../../config';

export const generateLinkToStorybook = (componentName: string) => {
  let section = 'components';

  const preparedComponentName = componentName.trim().toLowerCase();

  if (Object.is(preparedComponentName, 'icons')) {
    section = 'icons';
  }

  return `${STORYBOOK_URL}?path=/docs/${section}-${preparedComponentName}--docs`;
};
