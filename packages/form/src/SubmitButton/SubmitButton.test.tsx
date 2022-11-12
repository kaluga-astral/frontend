import { fireEvent, renderWithTheme, waitFor } from '@astral/tests';
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

    const { getByTestId, getByText } = renderWithTheme(<TestComponent />);

    fireEvent.submit(getByText('submit'));

    await waitFor(() => {
      const buttonLoader = getByTestId(BUTTON_TEST_ID_MAP.loader);

      expect(buttonLoader).toBeVisible();
    });
  });
});
