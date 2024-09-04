import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { array, min, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import {
  FormTreeLikeAutocomplete,
  type FormTreeLikeAutocompleteProps,
  type FormTreeLikeAutocompleteValue,
} from './FormTreeLikeAutocomplete';

type FormValues = {
  treeLikeAutocomplete: FormTreeLikeAutocompleteValue;
};

const validationSchema = object<FormValues>({
  treeLikeAutocomplete: array(min(1)),
});

describe('FormTreeLikeAutocomplete', () => {
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
          <FormTreeLikeAutocomplete
            name="treeLikeAutocomplete"
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
        treeAutocomplete: FormTreeLikeAutocompleteValue;
      }>();

      const options: FormTreeLikeAutocompleteProps<{}>['options'] = [
        { id: '1', label: 'Vasya' },
        { id: '2', label: 'Kolya' },
      ];

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormTreeLikeAutocomplete
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
