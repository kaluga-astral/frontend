import './commands';
import { mount } from 'cypress/react18';

import { ThemeProvider } from '../../packages/ui/src';
import { theme } from '../common/theme';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component, props) => {
  const wrapped = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return mount(wrapped, props);
});
