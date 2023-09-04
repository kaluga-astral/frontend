import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { vi } from 'vitest';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormAutocomplete } from './FormAutocomplete';

type FormValues = { user: string };

type Option = {
  name: string;
  surname: string;
};

const validationSchema = object<FormValues>({
  user: string(),
});

describe('FormAutocomplete', () => {
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
          <FormAutocomplete name="user" options={[]} />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const errorText = screen.getByText('Обязательно');

      expect(errorText).toBeVisible();
    });
  });

  it('После выбора значения в форму сетится весь выбранный option', async () => {
    const user = userEvents.setup();
    const onSubmit = vi.fn();
    const options: Option[] = [{ name: 'Vasya', surname: 'Pupkin' }];

    const TestComponent = () => {
      const form = useForm<{ user: Option }>();

      return (
        <Form name="form" form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete
            name="user"
            getOptionLabel={(option) => (option as Option).name}
            options={options}
          />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option'));
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: { name: 'Vasya', surname: 'Pupkin' },
      });
    });
  });

  it('Prop:inputRef: Фокус на поле после клика на Submit', async () => {
    const TestComponent = () => {
      const form = useForm<FormValues>({
        resolver: resolver<FormValues>(validationSchema),
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormAutocomplete name="user" label="user" options={[]} />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    const input = await screen.findByRole('combobox', { name: /user/i });

    expect(input).toHaveFocus();
  });

  it('Prop:freeSolo: В форму сетится значение из input', async () => {
    type FormFreeValues = { user: Option | string };

    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[{ name: 'Vasya', surname: 'Pupkin' }]}
            getOptionLabel={(value) =>
              typeof value === 'string' ? value : value.name
            }
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: 'Ivan',
      });
    });
  });

  it('Prop:freeSolo: В форму сетится значение из списка при наличии значения в input', async () => {
    type FormFreeValues = { user: Option | string };

    const onSubmit = vi.fn();
    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[
              { name: 'Vasya', surname: 'Pupkin' },
              { name: 'Ivan', surname: 'Ivanov' },
            ]}
            getOptionLabel={(value) =>
              typeof value === 'string' ? value : value.name
            }
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');
    await userEvents.click(screen.getByRole('option'));
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const [submitValues] = onSubmit.mock.calls[0];

      expect(submitValues).toEqual({
        user: { name: 'Ivan', surname: 'Ivanov' },
      });
    });
  });

  it('Prop:freeSolo: onInputChange:  onInputChange корректно вызывается вместе с freeSolo', async () => {
    type FormFreeValues = { user: Option | string };

    const onInputChange = vi.fn();

    const TestComponent = () => {
      const form = useForm<FormFreeValues>({
        defaultValues: { user: '' },
      });

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormAutocomplete<FormValues, Option, false, false, true>
            name="user"
            label="user"
            freeSolo
            options={[]}
            onInputChange={onInputChange}
          />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.type(screen.getByRole('combobox'), 'Ivan');

    await waitFor(() => {
      expect(onInputChange.mock.calls.length).toBe(4);
    });
  });
});
