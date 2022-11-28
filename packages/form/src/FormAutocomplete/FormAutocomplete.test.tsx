import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { vi } from 'vitest';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormAutocomplete } from './FormAutocomplete';

describe('FormAutocomplete', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm();

      return (
        <Form
          name="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormAutocomplete
            name="user"
            options={[]}
            rules={{ required: 'required' }}
          />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const errorText = screen.getByText('required');

      expect(errorText).toBeVisible();
    });
  });

  it('После выбора значения в форму сетится весь выбранный option', async () => {
    type Option = {
      name: string;
      surname: string;
    };

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
});
