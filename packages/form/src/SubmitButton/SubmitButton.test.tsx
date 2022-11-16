import { fireEvent, renderWithTheme, screen, waitFor } from '@astral/tests';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  it('Form-submitting: отображается лоадер', async () => {
    const TestComponent = () => {
      const form = useForm();

      const handleSubmit = () => new Promise(() => {});

      return (
        <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
          <SubmitButton>submit</SubmitButton>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.submit(screen.getByText('submit'));

    await waitFor(() => {
      const buttonLoader = screen.getByRole('progressbar');

      expect(buttonLoader).toBeVisible();
    });
  });
});
