import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';
import { useEffect, useRef } from 'react';

import { EmailField } from './EmailField';

describe('EmailField', () => {
  it('Prop:startAdornment: Отображается элемент в начале', () => {
    renderWithTheme(<EmailField startAdornment="start" />);
    expect(screen.getByText('start')).toBeInTheDocument();
  });

  it('Prop:endAdornment: Отображается элемент в конце', () => {
    renderWithTheme(<EmailField endAdornment="end" />);
    expect(screen.getByText('end')).toBeInTheDocument();
  });

  it('Prop:label: отображается label', () => {
    renderWithTheme(<EmailField label="TestEmailField" />);
    expect(screen.getByLabelText('TestEmailField')).toBeInTheDocument();
  });

  it('Prop:disabled: блокирует TextField', () => {
    renderWithTheme(<EmailField defaultValue="TestEmailField" disabled />);
    expect(screen.getByDisplayValue('TestEmailField')).toBeDisabled();
  });

  it('Prop:required: после становится required', () => {
    renderWithTheme(<EmailField defaultValue="TestEmailField" required />);
    expect(screen.getByDisplayValue('TestEmailField')).toBeRequired();
  });

  it('Prop:onChange: корректно передаётся значение в onChange', () => {
    const onChangeMock = vi.fn();

    renderWithTheme(
      <EmailField
        onChange={(e) => onChangeMock(e.target.value)}
        defaultValue="TestEmailField"
      />,
    );

    fireEvent.change(screen.getByDisplayValue('TestEmailField'), {
      target: { value: 'newEmailInEmailField' },
    });

    expect(onChangeMock.mock.lastCall).toEqual(['newEmailInEmailField']);
    vi.clearAllMocks();
  });

  it('Prop:ref: ref из props заменяется на оригинальный', () => {
    const resultRef = { current: null };

    const TextFieldRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <EmailField ref={ref} defaultValue="TestEmailField" />;
    };

    renderWithTheme(<TextFieldRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:error: отображает состояние error', () => {
    renderWithTheme(
      <EmailField
        defaultValue="TestEmailField"
        error
        helperText="Обязательно"
      />,
    );

    expect(screen.getByText('Обязательно')).toBeInTheDocument();
  });

  it('Prop:success: отображает состояние success', () => {
    renderWithTheme(
      <EmailField
        defaultValue="TestEmailField"
        success
        helperText="Удачно завершился процесс проверки"
      />,
    );

    expect(
      screen.getByText('Удачно завершился процесс проверки'),
    ).toBeInTheDocument();
  });
});
