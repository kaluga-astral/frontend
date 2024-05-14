import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { describe, expect, it, vi } from 'vitest';

import { CodeField } from './CodeField';

describe('CodeField', () => {
  const TEST_LENGTH = 6;
  const TEST_FOCUS_FIELD = 4;

  it('Prop:codeLength: задает кол-во символов', () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields = screen.getAllByRole('textbox');

    expect(fields).toHaveLength(TEST_LENGTH);
  });

  it('Prop:disabled: блокирует поле', () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        disabled
        onResendCode={() => Promise.resolve()}
        isAllowResendCode
      />,
    );

    const fields = screen.getAllByRole('textbox');

    const resendButton = screen.getByRole('button');

    fields.forEach((field) => expect(field).toBeDisabled());
    expect(resendButton).toBeDisabled();
  });

  it('Prop:loading: заменяет инпуты на скелетон', () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        loading
        onResendCode={() => Promise.resolve()}
        isAllowResendCode
      />,
    );

    const fields = screen.queryByRole('textbox');
    const resendButton = screen.getByRole('button');

    expect(fields).not.toBeInTheDocument();
    expect(resendButton).toBeDisabled();
  });

  it('Prop:time: пока timer > 0, кнопка повторной отправки кода неактивна', () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        onResendCode={() => Promise.resolve()}
        isAllowResendCode
      />,
    );

    const resendButton = screen.getByRole('button');

    expect(resendButton).toBeDisabled();
  });

  it('Prop:time: когда timer = 0, кнопка повторной отправки кода активна', () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        resendTimeout={0}
        onResendCode={() => Promise.resolve()}
        isAllowResendCode
      />,
    );

    const resendButton = screen.getByRole('button');

    expect(resendButton).not.toBeDisabled();
  });

  it('backspace: удаляет символ в текущем поле (при наличии)', async () => {
    renderWithTheme(
      <CodeField codeLength={TEST_LENGTH} initialValue="123456" />,
    );

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

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

  it('backspace: удаляет символ в предыдущем поле (при отсутствии в текущем поле)', async () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        initialValue="1234"
        onResendCode={() => Promise.resolve()}
      />,
    );

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

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
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('{ArrowRight}');
    expect(fields[TEST_FOCUS_FIELD + 1]).toHaveFocus();
  });

  it('Нажатие стрелки влево <- переводит фокус в соседнее поле слева', async () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('{ArrowLeft}');
    expect(fields[TEST_FOCUS_FIELD - 1]).toHaveFocus();
  });

  it('Для ввода доступны только арабские цифры', async () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    /* cspell:disable-next-line */
    await userEvents.keyboard('fF&^Ⅷאַחַת');
    expect(fields[TEST_FOCUS_FIELD].value).toBe('');
  });

  it('cntl+v: вставка в поле обрезает все, кроме цифр', async () => {
    const TEST_VALUE = 'test123t4t56';

    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
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

  it('cntl+v: при вставке кода длинной, равной кол-ву символов в коде, фокус снимается с элементов', async () => {
    const TEST_VALUE = '123456';

    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.paste(TEST_VALUE);
    fields.map((item) => expect(item).not.toHaveFocus());
  });

  it('cntl+v: при вставке кода длинной, меньше кол-ва символов в коде, фокус на следующем элементе', async () => {
    const TEST_VALUE = '123';

    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.paste(TEST_VALUE);
    expect(fields[TEST_VALUE.length]).toHaveFocus();
  });

  it('Prop:onComplete: срабатывает при заполнении поля', async () => {
    const onComplete = vi.fn();

    renderWithTheme(
      <CodeField codeLength={TEST_LENGTH} onComplete={onComplete} />,
    );

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[TEST_FOCUS_FIELD]);
    await userEvents.keyboard('12345');
    expect(onComplete).not.toBeCalled();
    await userEvents.keyboard('6');
    expect(onComplete).toBeCalled();
  });

  it('Если поле кода пустое, всегда начинаем ввод с первого инпута', async () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[5]);
    await userEvents.keyboard('1');
    expect(fields[1]).toHaveFocus();
  });

  it('Prop:isAutoFocus: Если true, автоматически устанавливается фокус на первый инпут', async () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} isAutoFocus />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    expect(fields[0]).toHaveFocus();
  });

  it('Prop:isAutoFocus: Если false, не устанавливается фокус на первый инпут', async () => {
    renderWithTheme(<CodeField codeLength={TEST_LENGTH} />);

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    expect(fields[0]).not.toHaveFocus();
  });

  it('При нажатии на кнопку "отправить код повторно", введенный код сбрасывается', async () => {
    renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        isAllowResendCode
        onResendCode={() => Promise.resolve()}
        resendTimeout={0}
      />,
    );

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');
    const resendButton = screen.getByRole('button');

    await userEvents.click(fields[0]);
    await userEvents.keyboard('123456');

    expect(fields.map((item) => item.value)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);

    await userEvents.click(resendButton);

    expect(fields.map((item) => item.value)).toStrictEqual([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  });

  it('При получении ошибки, введенный код сбрасывается', async () => {
    const { rerender } = renderWithTheme(
      <CodeField codeLength={TEST_LENGTH} isAllowResendCode isError={false} />,
    );

    const fields: HTMLInputElement[] = screen.getAllByRole('textbox');

    await userEvents.click(fields[0]);
    await userEvents.keyboard('123456');

    expect(fields.map((item) => item.value)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);

    rerender(
      <CodeField codeLength={TEST_LENGTH} isAllowResendCode isError={true} />,
    );

    expect(fields.map((item) => item.value)).toStrictEqual([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  });

  it('Prop:resetTimeout: При изменении значения таймера, он обновляется', async () => {
    const { rerender } = renderWithTheme(
      <CodeField
        codeLength={TEST_LENGTH}
        isAllowResendCode
        onResendCode={() => Promise.resolve()}
        resendTimeout={60}
      />,
    );

    const resendButton = screen.getByRole('button');

    expect(resendButton).toBeDisabled();

    rerender(
      <CodeField
        codeLength={TEST_LENGTH}
        isAllowResendCode
        onResendCode={() => Promise.resolve()}
        resendTimeout={0}
      />,
    );

    expect(resendButton).not.toBeDisabled();
  });
});
