import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import {
  type FormDateRangePickerValue,
  FormNewDateRangePicker,
} from './FormNewDateRangePicker';

type FormValues = {
  dateField: FormDateRangePickerValue;
};

const validationSchema = object<FormValues>({
  dateField: object({
    start: date(),
    end: date(),
  }),
});

describe('FormDateRangePicker', () => {
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
          <FormNewDateRangePicker
            name="dateField"
            control={form.control}
            startDateProps={{
              inputProps: {
                label: 'startDate',
              },
            }}
            endDateProps={{
              inputProps: {
                label: 'endDate',
              },
            }}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const dateErrorText = screen.queryByText('Обязательно');

    expect(dateErrorText).toBeVisible();
  });

  it('После выбора значения в форму устанавливается выбранная дата', async () => {
    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<{
        dateField: FormDateRangePickerValue;
      }>();

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormNewDateRangePicker
            name="dateField"
            control={form.control}
            startDateProps={{
              inputProps: {
                label: 'startDate',
              },
            }}
            endDateProps={{
              inputProps: {
                label: 'endDate',
              },
            }}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.click(screen.getByLabelText('startDate'));

    const startDateBtn = screen.getAllByText('14')[0];
    const endDateBtn = screen.getAllByText('15')[1];

    await userEvents.click(startDateBtn);
    await userEvents.click(endDateBtn);

    await waitFor(async () => {
      await userEvents.click(screen.getByText('submit'));
    });

    const [submitValues] = onSubmit.mock.calls[0];

    expect(
      submitValues.dateField.start.toISOString().includes('2022-02-14'),
    ).toBeTruthy();

    expect(
      submitValues.dateField.end.toISOString().includes('2022-03-15'),
    ).toBeTruthy();
    // TODO Разобраться со скоростью выполнения теста, в ci падает по таймауту в 3s, на локале выполняется примерно за 1.3s
    // https://track.astral.ru/soft/browse/UIKIT-1352
  }, 5000);
});
