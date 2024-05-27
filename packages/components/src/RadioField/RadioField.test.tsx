import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { RadioField } from './RadioField';

describe('RadioField', () => {
  it('Label отображается', () => {
    renderWithTheme(<RadioField label="radio label" />);

    const label = screen.getByText('radio label');

    expect(label).toBeVisible();
  });

  it('К label добавляется "*", если required=true', () => {
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

  it('Причина блокировки поля отображается', async () => {
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
