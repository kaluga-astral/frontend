import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from './application';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw Error('React root element is not find');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
