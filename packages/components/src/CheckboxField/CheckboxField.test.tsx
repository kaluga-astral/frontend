import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { CheckboxField } from './CheckboxField';

describe('CheckboxField', () => {
  it('Label отображается', () => {
    renderWithTheme(<CheckboxField label="My Checkbox" />);
    expect(screen.getByLabelText('My Checkbox')).toBeInTheDocument();
  });

  describe('HelperText', () => {
    it('Отображается при передаче props', () => {
      renderWithTheme(
        <CheckboxField label="My Checkbox" helperText="helper text" />,
      );

      expect(screen.getByText('helper text')).toBeVisible();
    });

    it('Не отображается, если hideHelperText=true', () => {
      renderWithTheme(
        <CheckboxField
          label="My Checkbox"
          helperText="helper text"
          hideHelperText
        />,
      );

      expect(screen.queryByText('helper text')).toBeNull();
    });

    it('Отображается в tooltip при наведении, если hideHelperText=true и isError=true', async () => {
      renderWithTheme(
        <CheckboxField
          label="My Checkbox"
          helperText="helper text"
          hideHelperText
          isError
        />,
      );

      await userEvents.hover(screen.getByLabelText('My Checkbox'));

      const tooltip = await screen.findByRole('tooltip');

      expect(tooltip).toHaveTextContent(/^helper text$/);
    });
  });
});
