import { fireEvent, renderWithTheme, screen, waitFor } from '@astral/tests';
import { BUTTON_TEST_ID_MAP } from '@astral/ui';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  it('Form:submitting: отображается лоадер', async () => {
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
      const buttonLoader = screen.getByTestId(BUTTON_TEST_ID_MAP.loader);

      expect(buttonLoader).toBeVisible();
    });
  });
});
