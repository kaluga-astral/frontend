import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

import { ThemeWrapper } from './ThemeWrapper';

export const renderWithTheme = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeWrapper, ...options });
