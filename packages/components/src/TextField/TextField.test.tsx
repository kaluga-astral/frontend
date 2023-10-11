import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { TextField } from './TextField';

describe('TextField', () => {
  it('Prop:startAdornment: Отображается элемент в начале', () => {
    renderWithTheme(<TextField startAdornment="start" />);
    expect(screen.getByText('start')).toBeInTheDocument();
  });

  it('Prop:endAdornment: Отображается элемент в конце', () => {
    renderWithTheme(<TextField endAdornment="end" />);
    expect(screen.getByText('end')).toBeInTheDocument();
  });
});
