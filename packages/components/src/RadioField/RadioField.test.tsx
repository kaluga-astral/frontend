import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect } from 'vitest';

import { RadioField } from './RadioField';

describe('RadioField', () => {
  it('Отображает label', () => {
    renderWithTheme(<RadioField label="radio label" />);

    const label = screen.getByText('radio label');

    expect(label).toBeVisible();
  });

  it('Делает поле обязательным', () => {
    renderWithTheme(
      <RadioField
        label="radio label"
        required
        inputProps={{ role: 'radio' }}
      />,
    );

    const input = screen.getByRole('radio');
    const asterisk = screen.getByText('*');

    expect(input).toHaveAttribute('required');
    expect(asterisk).toBeVisible();
  });

  it('Отображает причину блокировки поля', async () => {
    renderWithTheme(
      <RadioField
        label="label"
        disabled
        disabledReason="disabled reason text"
      />,
    );

    const radioLabel = screen.getByText('label');

    await userEvents.hover(radioLabel);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(/^disabled reason text$/);
  });
});
