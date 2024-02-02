import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect } from 'vitest';

import { CheckboxField } from './CheckboxField';

describe('CheckboxField', () => {
  it('Prop:label: лейбл отображается', () => {
    renderWithTheme(<CheckboxField label="My Checkbox" />);
    expect(screen.getByLabelText('My Checkbox')).toBeInTheDocument();
  });

  it('Prop:helperText: отображается', () => {
    renderWithTheme(
      <CheckboxField label="My Checkbox" helperText={'helper text'} />,
    );

    expect(screen.getByText('helper text')).toBeVisible();
  });

  it('Props:helperText: hideHelperText: helperText не отображается', () => {
    renderWithTheme(
      <CheckboxField
        label="My Checkbox"
        helperText={'helper text'}
        hideHelperText
      />,
    );

    expect(screen.queryByText('helper text')).toBeNull();
  });

  it('Props:helperText: hideHelperText: isError: При наведении отображается тултип с текстом-подсказкой (helperText)', async () => {
    renderWithTheme(
      <CheckboxField
        label="My Checkbox"
        helperText={'helper text'}
        hideHelperText
        isError
      />,
    );

    const parentEl = screen.getByLabelText('helper text');
    const helperTextEl = parentEl.querySelector('p');

    expect(helperTextEl).toBeNull();
    await userEvents.hover(parentEl);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(/^helper text$/);
  });
});
