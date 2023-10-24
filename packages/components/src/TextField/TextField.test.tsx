import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { it, vi } from 'vitest';
import { useEffect, useRef } from 'react';

import { FormHelperTextContent } from '../FormHelperText/FormHelperTextContent';

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

  it('Prop:error: отображает состояние error', () => {
    renderWithTheme(
      <TextField defaultValue="TestTextField" error helperText="Обязательно" />,
    );

    vi.mock('../FormHelperText/FormHelperTextContent', () => {
      return {
        FormHelperTextContent: vi.fn(),
      };
    });

    expect(FormHelperTextContent).toHaveBeenCalledWith(
      { children: 'Обязательно', error: true },
      {},
    );
  });

  it('Prop:success: отображает состояние success', () => {
    renderWithTheme(
      <TextField
        defaultValue="TestTextField"
        success
        helperText="Удачно завершился процесс проверки"
      />,
    );

    vi.mock('../FormHelperText/FormHelperTextContent', () => {
      return {
        FormHelperTextContent: vi.fn(),
      };
    });

    expect(FormHelperTextContent).toHaveBeenCalledWith(
      { children: 'Удачно завершился процесс проверки', success: true },
      {},
    );
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
  });

  it('Prop:ref: меняется значение input при вводе текста', () => {
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
});
