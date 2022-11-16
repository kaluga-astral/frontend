import { fireEvent, renderWithTheme, screen, waitFor } from '@astral/tests';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormTextField } from './FormTextField';

describe('FormTextField', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm();

      return (
        <Form
          data-testid="form"
          form={form}
          onSubmit={form.handleSubmit(() => undefined)}
        >
          <FormTextField name="user" rules={{ required: 'required' }} />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      const errorText = screen.getByText('required');

      expect(errorText).toBeVisible();
    });
  });
});
