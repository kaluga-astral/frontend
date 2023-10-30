import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { describe, expect, it } from 'vitest';

import { CodeField } from './CodeField';

describe('CodeField', () => {
  it('Prop:codeLength: задает кол-во символов', () => {
    const TEST_LENGTH = 10;

    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields = screen.getAllByRole('textbox');

    expect(fields.length).toBe(TEST_LENGTH);
  });

  it('Prop:disabled: блокирует поле', () => {
    renderWithTheme(<CodeField disabled />);

    const fields = screen.getAllByRole('textbox');

    const resendButton = screen.getByRole('button');

    fields.forEach((field) => expect(field).toBeDisabled());
    expect(resendButton).toBeDisabled();
  });

  it('Prop:loading: блокирует поле', () => {
    renderWithTheme(<CodeField loading />);

    const fields = screen.getAllByRole('textbox');

    const resendButton = screen.getByRole('button');

    fields.forEach((field) => expect(field).toBeDisabled());
    expect(resendButton).toBeDisabled();
  });

  it('Prop:time: пока timer > 0, кнопка повторной отправки кода неактивна', () => {
    renderWithTheme(<CodeField />);

    const resendButton = screen.getByRole('button');

    expect(resendButton).toBeDisabled();
  });

  it('Prop:time: когда timer = 0, кнопка повторной отправки кода активна', () => {
    renderWithTheme(<CodeField time={0} />);

    const resendButton = screen.getByRole('button');

    expect(resendButton).not.toBeDisabled();
  });

  it('backspace: удаляет символ в текущием поле (при наличии)', async () => {
    renderWithTheme(<CodeField initialValue={[1, 2, 3, 4, 5, 6]} />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[4]);
    await userEvents.keyboard('{Backspace}');

    expect(fields.map((item) => item.value)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '',
      '6',
    ]);
  });

  it('backspace: удаляет символ в предыдущем поле (при отсутвии в текущем поле)', async () => {
    renderWithTheme(<CodeField initialValue={[1, 2, 3, 4, '', '']} />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[4]);
    await userEvents.keyboard('{Backspace}');

    expect(fields.map((item) => item.value)).toStrictEqual([
      '1',
      '2',
      '3',
      '',
      '',
      '',
    ]);
  });

  it('Нажатие стрелки вправо -> переводит фокус в соседнее поле справа', async () => {
    const TEST_FOCUS_FIELD = 4;

    renderWithTheme(<CodeField />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('{ArrowRight}');
    expect(fields[TEST_FOCUS_FIELD + 1]).toHaveFocus();
  });

  it('Нажатие стрелки влево <- переводит фокус в соседнее поле слева', async () => {
    const TEST_FOCUS_FIELD = 4;

    renderWithTheme(<CodeField />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('{ArrowLeft}');
    expect(fields[TEST_FOCUS_FIELD - 1]).toHaveFocus();
  });

  it('Для ввода доступны только арабские цифры', async () => {
    const TEST_FOCUS_FIELD = 4;

    renderWithTheme(<CodeField />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('fF&^Ⅷאַחַת');
    expect(fields[TEST_FOCUS_FIELD].value).toBe('');
  });

  it('cntl+v: вставка в поле обрезает все, кроме цифр', async () => {
    const TEST_VALUE = 'test123t4t56';

    renderWithTheme(<CodeField />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.paste(TEST_VALUE);

    expect(fields.map((item) => item.value)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
  });
});
