import { describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { useEffect, useRef } from 'react';

import { TextField } from './TextField';

describe('TextField', () => {
  it('Prop:startAdornment: Отображается элемент в начале', () => {
    renderWithTheme(<TextField startAdornment="start" />);
    expect(screen.getByText('start')).toBeInTheDocument();
  });

  it('Prop:endAdornment: Отображается элемент в конце', () => {
    renderWithTheme(<TextField endAdornment="end" />);
    expect(screen.getByText('end')).toBeInTheDocument();
  });

  it('Prop:label: отображается label', () => {
    renderWithTheme(<TextField label="TestTextField" />);
    expect(screen.getByLabelText('TestTextField')).toBeInTheDocument();
  });

  it('Prop:disabled: блокирует TextField', () => {
    renderWithTheme(<TextField defaultValue="TestTextField" disabled />);
    expect(screen.getByDisplayValue('TestTextField')).toBeDisabled();
  });

  it('Prop:required: после становится required', () => {
    renderWithTheme(<TextField defaultValue="TestTextField" required />);
    expect(screen.getByDisplayValue('TestTextField')).toBeRequired();
  });

  it('Prop:onChange: корректно передаётся значение в onChange', () => {
    const onChangeMock = vi.fn();

    renderWithTheme(
      <TextField
        onChange={(e) => onChangeMock(e.target.value)}
        defaultValue="TestTextField"
      />,
    );

    fireEvent.change(screen.getByDisplayValue('TestTextField'), {
      target: { value: 'newTextInTextField' },
    });

    expect(onChangeMock.mock.lastCall).toEqual(['newTextInTextField']);
    vi.clearAllMocks();
  });

  it('Prop:ref: ref из props заменяется на оригинальный', () => {
    const resultRef = { current: null };

    const TextFieldRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <TextField ref={ref} defaultValue="TestTextField" />;
    };

    renderWithTheme(<TextFieldRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:error: отображает состояние error', () => {
    renderWithTheme(
      <TextField defaultValue="TestTextField" error helperText="Обязательно" />,
    );

    expect(screen.getByText('Обязательно')).toBeInTheDocument();
  });

  it('Prop:success: отображает состояние success', () => {
    renderWithTheme(
      <TextField
        defaultValue="TestTextField"
        success
        helperText="Удачно завершился процесс проверки"
      />,
    );

    expect(
      screen.getByText('Удачно завершился процесс проверки'),
    ).toBeInTheDocument();
  });

  it('Ref доступен', () => {
    const resultRef = { current: null };

    const TextFieldWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <TextField ref={ref} />;
    };

    renderWithTheme(<TextFieldWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Максимальная длина ввода ограничивается', async () => {
    const MAX_LENGTH = 3;

    renderWithTheme(
      <TextField
        inputProps={{ 'data-testid': 'customField' }}
        maxLength={MAX_LENGTH}
        label="Имя"
      />,
    );

    const inputElement = screen.getByTestId('customField') as HTMLInputElement;

    await userEvents.type(inputElement, 'Hello');

    await waitFor(() => {
      expect(inputElement.value).toHaveLength(MAX_LENGTH);
    });
  });

  it('При переводе фокуса с инпута пробел в конце текста удаляется', async () => {
    const onChangeMock = vi.fn();

    renderWithTheme(
      <TextField
        inputProps={{ 'data-testid': 'textFieldForTrim' }}
        onChange={(e) => onChangeMock(e.target.value)}
      />,
    );

    const inputElement = screen.getByTestId(
      'textFieldForTrim',
    ) as HTMLInputElement;

    await userEvents.type(inputElement, 'test ');
    await userEvents.tab();

    await waitFor(() => {
      expect(onChangeMock.mock.lastCall).toEqual(['test']);
    });

    vi.clearAllMocks();
  });

  it('При переводе фокуса с инпута вызывается переданный onBlur', async () => {
    const onBlurMock = vi.fn();

    renderWithTheme(
      <TextField
        inputProps={{ 'data-testid': 'textFieldForOnBlur' }}
        onBlur={(e) => onBlurMock(e.target.value)}
      />,
    );

    const inputElement = screen.getByTestId(
      'textFieldForOnBlur',
    ) as HTMLInputElement;

    await userEvents.type(inputElement, 'test');
    await userEvents.tab();

    await waitFor(() => {
      expect(onBlurMock.mock.lastCall).toEqual(['test']);
    });

    vi.clearAllMocks();
  });
});
