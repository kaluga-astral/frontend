import { fireEvent, renderWithTheme, waitFor } from '@astral/tests';

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

    const { getByText, getByTestId } = renderWithTheme(<TestComponent />);

    fireEvent.submit(getByTestId('form'));

    await waitFor(() => {
      const errorText = getByText('required');

      expect(errorText).toBeVisible();
    });
  });
});
