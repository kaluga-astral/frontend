import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it } from 'vitest';

import { CodeField } from './CodeField';

describe('PasswordField', () => {
  it('Prop:disabled: блокирует поле', () => {
    renderWithTheme(<CodeField label="password" disabled />);

    const field = screen.getByLabelText('password');

    expect(field).toBeDisabled();
  });

  it('Prop:showSymbols: по-умолчанию символы скрыты, иконка поля соответствует состоянию', () => {
    renderWithTheme(<CodeField label="password" />);

    const field = screen.getByLabelText('password');

    expect(field).toHaveAttribute('type', 'password');

    const icon = screen.getByRole('button').getElementsByTagName('svg')[0];

    expect(icon.id).toEqual('visibility-on');
  });

  it('Prop:showSymbols: символы видны, иконка поля соответствует состоянию', () => {
    renderWithTheme(<CodeField label="password" showSymbols />);

    const field = screen.getByLabelText('password');

    expect(field).toHaveAttribute('type', 'text');

    const icon = screen.getByRole('button').getElementsByTagName('svg')[0];

    expect(icon.id).toEqual('visibility-off');
  });
});
