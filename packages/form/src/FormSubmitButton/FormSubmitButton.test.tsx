import { describe, expect, it } from 'vitest';
import { fireEvent, renderWithTheme, screen, waitFor } from '@astral/tests';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormSubmitButton } from './FormSubmitButton';

describe('FormSubmitButton', () => {
  it('Form-submitting: отображается лоадер', async () => {
    const TestComponent = () => {
      const form = useForm();

      const handleSubmit = () => new Promise(() => {});

      return (
        <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
          <FormSubmitButton>submit</FormSubmitButton>
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
