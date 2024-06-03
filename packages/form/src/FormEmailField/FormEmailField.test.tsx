import { describe, expect, it, vi } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormEmailField } from './FormEmailField';

describe('FormEmailField', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const TestComponent = () => {
      const ref = useRef(null);
      const form = useForm();

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Form form={form}>
          <FormEmailField name="email" control={form.control} ref={ref} />
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Value сетится в форму без пробелов в начале и в конце', async () => {
    const submitSpy = vi.fn();

    const TestComponent = () => {
      const form = useForm<{ email: string }>();

      return (
        <Form form={form} onSubmit={form.handleSubmit(submitSpy)}>
          <FormEmailField name="email" label="email" control={form.control} />
          <FormSubmitButton>Отправить</FormSubmitButton>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);

    const input = screen.getByLabelText('email');

    await userEvents.type(input, '  email@email.com  ');

    const submitButton = screen.getByRole('button');

    await userEvents.click(submitButton);
    expect(submitSpy.mock.calls[0][0]).toEqual({ email: 'email@email.com' });
  });
});
