import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents, waitFor } from '@astral/tests';

import { Form } from '../Form';
import { useForm } from '../hooks';

import { FormTextField } from './FormTextField';

describe('FormTextField', () => {
  it('Отображается ошибка валидации', async () => {
    const TestComponent = () => {
      const form = useForm();

      return (
        <Form form={form} onSubmit={form.handleSubmit(() => undefined)}>
          <FormTextField name="user" rules={{ required: 'required' }} />
          <button type="submit">submit</button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByText('submit'));

    await waitFor(() => {
      const errorText = screen.getByText('required');

      expect(errorText).toBeVisible();
    });
  });

  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const FormTextFieldWithRef = () => {
      const ref = useRef(null);
      const form = useForm();

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Form form={form}>
          <FormTextField name="user" ref={ref} />
        </Form>
      );
    };

    renderWithTheme(<FormTextFieldWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });
});
