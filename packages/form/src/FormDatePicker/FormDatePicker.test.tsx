import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormDatePicker, type FormDatePickerValue } from './FormDatePicker';

type FormValues = { date: Date };

const validationSchema = object<FormValues>({
  date: date(),
});

describe('FormDatePicker', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2022-02-10'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form
          name="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormDatePicker name="date" />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const errorText = await screen.findByText('Обязательно');

    expect(errorText).toBeVisible();
  });

  it('После выбора значения в форму устанавливается выбранная дата', async () => {
    const onSubmit = vi.fn();

    const TestComponent = () => {
      const form = useForm<{ date: FormDatePickerValue }>();

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormDatePicker name="date" />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));
    await userEvents.click(screen.getAllByText('9')[0]);
    await userEvents.click(screen.getByText('submit'));

    const [submitValues] = onSubmit.mock.calls[0];

    expect(submitValues.date.toISOString().includes('2022-02-09')).toBeTruthy();
  });

  it('Prop:inputRef: Фокус на поле после клика на Submit', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormDatePicker
            name="date"
            inputProps={{ label: 'date', required: true }}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const input = await screen.findByRole('textbox', { name: /date/i });

    expect(input).toHaveFocus();
  });
});
