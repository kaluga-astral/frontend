import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect } from 'vitest';

import { RadioField } from './RadioField';

describe('RadioField', () => {
  it('Prop label отображает название для поля', () => {
    renderWithTheme(<RadioField label="radio label" />);

    const label = screen.getByText('radio label');

    expect(label).toBeVisible();
  });

  it('Prop required добавляет для label "*"', () => {
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

  it('Prop disabledReason отображает причину блокировки поля', async () => {
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
