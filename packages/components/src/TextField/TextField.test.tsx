import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { expect, it } from 'vitest';
import { theme } from '@astral/tests/src/theme';

import { ThemeProvider } from '../ThemeProvider';

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

  it('Prop:error, helperText: отображает helperText и состояние error', () => {
    renderWithTheme(
      <ThemeProvider theme={theme}>
        <TextField
          defaultValue="TestTextField"
          error
          helperText="Обязательно"
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Обязательно'));

    expect(screen.getByText('Обязательно')).toHaveStyle({
      color: theme.palette.error.dark,
    });
  });

  it('Prop:success, helperText: отображает helperText и состояние success', () => {
    renderWithTheme(
      <ThemeProvider theme={theme}>
        <TextField
          defaultValue="TestTextField"
          success
          helperText="Удачно завершился процесс проверки"
        />
      </ThemeProvider>,
    );

    expect(
      screen.getByText('Удачно завершился процесс проверки'),
    ).toBeInTheDocument();

    expect(screen.getByText('Удачно завершился процесс проверки')).toHaveStyle({
      color: theme.palette.success.dark,
    });
  });

  it('Prop:required: после становится required', () => {
    renderWithTheme(<TextField defaultValue="TestTextField" required />);
    expect(screen.getByDisplayValue('TestTextField')).toBeRequired();
  });

  it('Prop:changeValue: меняется значение input при вводе текста', () => {
    renderWithTheme(<TextField defaultValue="TestTextField" required />);

    fireEvent.change(screen.getByDisplayValue('TestTextField'), {
      target: { value: 'newTextInTextField' },
    });

    expect(screen.getByDisplayValue('newTextInTextField')).toBeInTheDocument();
  });
});
