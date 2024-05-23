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
  FormDateRangePicker,
  type FormDateRangePickerValue,
} from './FormDateRangePicker';

type FormValues = {
  startDateField: FormDateRangePickerValue;
  endDateField: FormDateRangePickerValue;
};

const validationSchema = object<FormValues>({
  startDateField: date(),
  endDateField: date(),
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
          <FormDateRangePicker
            startDateProps={{
              name: 'startDateField',
              control: form.control,
              inputProps: {
                label: 'startDate',
              },
            }}
            endDateProps={{
              name: 'endDateField',
              control: form.control,
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

    const startDateErrorText = screen.queryAllByText('Обязательно')[0];
    const endDateErrorText = screen.queryAllByText('Обязательно')[1];

    expect(startDateErrorText).toBeVisible();
    expect(endDateErrorText).toBeVisible();
  });

  it('После выбора значения в форму устанавливается выбранная дата', async () => {
    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<{
        startDateField: FormDateRangePickerValue;
        endDateField: FormDateRangePickerValue;
      }>();

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormDateRangePicker
            startDateProps={{
              name: 'startDateField',
              control: form.control,
              inputProps: {
                label: 'startDate',
              },
            }}
            endDateProps={{
              name: 'endDateField',
              control: form.control,
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
      submitValues.startDateField.toISOString().includes('2022-02-14'),
    ).toBeTruthy();

    expect(
      submitValues.endDateField.toISOString().includes('2022-03-15'),
    ).toBeTruthy();
    // TODO Разобраться со скоростью выполнения теста, в ci падает по таймауту в 3s, на локале выполняется примерно за 1.3s
    // https://track.astral.ru/soft/browse/UIKIT-1352
  }, 5000);
});
