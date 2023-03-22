import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';
import { vi } from 'vitest';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormDatePicker, FormDatePickerValue } from './FormDatePicker';

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
      const form = useForm();

      return (
        <Form
          name="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormDatePicker name="date" rules={{ required: 'required' }} />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const errorText = await screen.findByText('required');

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
      const form = useForm();

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormDatePicker
            name="date"
            inputProps={{ label: 'date', required: true }}
            rules={{ required: 'required' }}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const input = screen.getByRole('textbox', { name: /date/i });

      expect(input).toHaveFocus();
    });
  });
});
