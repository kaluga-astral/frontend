import { describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import {
  FormTreeAutocomplete,
  type FormTreeAutocompleteProps,
  type FormTreeAutocompleteValue,
} from './FormTreeAutocomplete';

type FormValues = {
  treeAutocomplete: FormTreeAutocompleteValue;
};

const validationSchema = object<FormValues>({
  treeAutocomplete: string(),
});

describe('FormTreeAutocomplete', () => {
  it('Ошибка валидации отображается', async () => {
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
          <FormTreeAutocomplete
            name="treeAutocomplete"
            control={form.control}
            options={[]}
            dialogProps={{ title: 'Выбор значения' }}
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

  it('Выбранное значения option устанавливается в форму', async () => {
    const onSubmit = vi.fn();

    const TestComponent = () => {
      const form = useForm<{
        treeAutocomplete: FormTreeAutocompleteValue;
      }>();

      const options: FormTreeAutocompleteProps<{}>['options'] = [
        { id: '1', label: 'Vasya' },
        { id: '2', label: 'Kolya' },
      ];

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormTreeAutocomplete
            name="treeAutocomplete"
            control={form.control}
            options={options}
            dialogProps={{ title: 'Выбор значения' }}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);

    const input = screen.getByRole('textbox');

    await userEvents.click(input);

    const option = screen.getByText('Vasya');

    await userEvents.click(option);

    const confirmButton = screen.getByText('Выбрать');

    await userEvents.click(confirmButton);
    await userEvents.click(screen.getByText('submit'));

    const [submitValues] = onSubmit.mock.calls[0];

    expect(submitValues.treeAutocomplete.includes('1')).toBeTruthy();
    // TODO Разобраться со скоростью выполнения теста, в ci падает по таймауту в 3s, на локале выполняется примерно за 1.3s
    // https://track.astral.ru/soft/browse/UIKIT-1352
  }, 5000);
});
