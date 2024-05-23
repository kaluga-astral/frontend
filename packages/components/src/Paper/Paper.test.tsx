import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { Paper } from './Paper';

describe('Paper', () => {
  it('Базовое отображение', () => {
    renderWithTheme(<Paper data-testid="paper" />);

    const paper = screen.getByTestId('paper');

    expect(paper).toBeVisible();
  });
});
