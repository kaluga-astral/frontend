import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { PasswordField } from './PasswordField';

describe('PasswordField', () => {
  it('Prop:disabled: блокирует поле', () => {
    renderWithTheme(<PasswordField label="password" disabled />);

    const field = screen.getByLabelText('password');

    expect(field).toBeDisabled();
  });

  it('Prop:showSymbols: по-умолчанию символы скрыты, иконка поля соответствует состоянию', () => {
    renderWithTheme(<PasswordField label="password" />);

    const field = screen.getByLabelText('password');

    expect(field).toHaveAttribute('type', 'password');

    const icon = screen.getByRole('button').getElementsByTagName('svg')[0];

    expect(icon.id).toBe('visibility-on');
  });

  it('Prop:showSymbols: символы видны, иконка поля соответствует состоянию', () => {
    renderWithTheme(<PasswordField label="password" showSymbols />);

    const field = screen.getByLabelText('password');

    expect(field).toHaveAttribute('type', 'text');

    const icon = screen.getByRole('button').getElementsByTagName('svg')[0];

    expect(icon.id).toBe('visibility-off');
  });

  it('Ref доступен', () => {
    const resultRef = { current: null };

    const PasswordFieldRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <PasswordField ref={ref} />;
    };

    renderWithTheme(<PasswordFieldRef />);
    expect(resultRef?.current).not.toBeNull();
  });
});
