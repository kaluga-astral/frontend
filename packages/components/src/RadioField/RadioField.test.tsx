import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect } from 'vitest';

import { RadioField } from './RadioField';

describe('RadioField', () => {
  it('Prop:label: label отображается', () => {
    renderWithTheme(<RadioField label="radio label" />);

    const label = screen.getByText('radio label');

    expect(label).toBeVisible();
  });

  it('Prop:required: применяет required', () => {
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

  it('Props:disabled: true disabledReason: string: При наведении отображается tooltip с текстом', async () => {
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

  it('Prop:required: применяет required', () => {
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
});
